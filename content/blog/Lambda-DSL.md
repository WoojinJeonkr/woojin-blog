---
external : false
title : "Lambda DSL"
tag : [Java, Spring]
date : 2024-05-12
---

이번 글에서는 Lambda DSL은 무엇이고 적용하기 위해 기존 코드를 어떻게 수정해야 하는지에 대해 알아보겠습니다.

## 1. Introduce

패스워드 인코딩을 위해 config 파일을 작성하던 중 아래와 같은 warning 문구를 맞딱드리게 되었습니다.

```textile
Multiple markers at this line
  - The method cors() from the type HttpSecurity has been deprecated since version 6.1 and marked for removal
  - Consider switching to 'HttpSecurity' Lambda DSL syntax
```

패스워드 인코딩이 정상 작동했고, error가 아니라 warning 메시지였기에 처음에는 무시하고 넘어갈까도 생각했습니다. 그러나 나중에 새로운 기능을 추가할 때 이러한 warning 메시지 부분이 문제를 일으킬 수 있으며, 이를 해결하는 것이 좋겠다고 판단하여 해당 부분을 수정하기로 결정했습니다.

## 2. Troubleshooting Process

인터넷을 검색해보니, spring security 6.1 버전 이후로 기존 방식이 deprecated되어서 Lamda DSL로 HttpSecurity와 WebSecurity를 구성해야 한다고 적혀있었습니다. 이를 바탕으로 수정하니 warning 메시지가 더 이상 표시되지 않는 것을 확인했습니다.

- 기존 코드

```java
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
  http.cors().disable()     //cors 방지
    .csrf().disable()	      //csrf 방지
    .formLogin().disable()  //기본 로그인페이지 없애기
    .headers().frameOptions().disable();

  return http.build();
}
```

- 수정된 코드

```java
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
  http.cors(AbstractHttpConfigurer::disable)
    .csrf(AbstractHttpConfigurer::disable)
    .formLogin(AbstractHttpConfigurer::disable)
    .headers(httpSecurityHeadersConfigurer -> httpSecurityHeadersConfigurer
                  .frameOptions(HeadersConfigurer.FrameOptionsConfig::disable));

  return http.build();
}
```

## 3. Lambda DSL

Spring Security에서 Lambda DSL은 Spring Security 구성을 Java 람다 표현식을 사용하여 정의하는 방법을 말합니다. Lambda DSL을 사용하면 코드가 더 간결해지고 가독성이 향상됩니다. 이전의 XML이나 Java 구성 클래스에서는 많은 설정이 필요했지만 Lambda DSL을 사용하면 보다 직관적이고 간단한 방식으로 Spring Security를 구성할 수 있습니다.
예를 들어, 인증 및 권한 부여 규칙을 정의하는 코드를 Lambda DSL을 이용하여 작성한다면 다음과 같이 작성할 수 있습니다.

```java
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
      .authorizeRequests(authorize -> authorize
        .antMatchers("/public/**").permitAll()
        .antMatchers("/admin/**").hasRole("ADMIN")
        .anyRequest().authenticated()
      )
      .formLogin(withDefaults());
  }

  @Override
  protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    auth
      .inMemoryAuthentication(authentication -> authentication
        .withUser("user").password("password").roles("USER")
        .and()
        .withUser("admin").password("password").roles("ADMIN")
      );
  }
}
```

위의 예제에서는 Lambda DSL을 사용하여 "/public/" 경로에 대한 접근을 허용하고 "/admin/" 경로에 대한 접근은 ADMIN 역할을 가진 사용자에게만 허용하도록 설정하였습니다. 또한 사용자 정보를 메모리에 정의하는 부분도 Lambda 표현식을 사용하여 간결하게 작성되었습니다.

Lambda DSL로 코드를 작성할 때에는 2가지 규칙이 존재합니다.

1. Lambda DSL에서는 .and() 메서드를 사용하여 구성 옵션을 연결할 필요가 없습니다. 람다 메서드 호출 후 추가 구성을 위해 HttpSecurity 인스턴스가 자동으로 반환됩니다.
2. withDefaults()는 Spring Security에서 제공하는 기본값을 사용하여 보안 기능을 활성화합니다. 이는 람다 표현식 it -> {}을 사용하는 단축키입니다.

## 4. Reference

- [Spring Security - Lambda DSL](https://spring.io/blog/2019/11/21/spring-security-lambda-dsl)
- [Configuration Migrations](https://docs.spring.io/spring-security/reference/migration-7/configuration.html)
- [Authorize HttpServletRequests](https://docs.spring.io/spring-security/reference/servlet/authorization/authorize-http-requests.html)
- [Cross Site Request Forgery (CSRF)](https://docs.spring.io/spring-security/reference/servlet/exploits/csrf.html#csrf-token-request-handler-custom)
