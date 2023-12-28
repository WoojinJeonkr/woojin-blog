---
external: false
title: "springfox & springdoc"
date: 2023-01-21
---

## 1. Swagger란?

개발자가 REST 웹 서비스를 설계, 빌드, 문서화, 소비하는 일을 도와주는 대형 도구 생태계의 지원을 받는 오픈 소스 소프트웨어 프레임워크이다.

### 1-1. 주요 Swagger의 도구

1. Swagger 편집기: OpenAPI 정의를 작성할 수 있는 브라우저 기반 편집기
2. Swagger UI: OpenAPI 정의를 대화형 문서로 렌더링
3. Swagger Codegen: OpenAPI 정의에서 서버 스텁(data를 받고 local의 지정된 프로시저를 호출하는 역할) 및 클라이언트 라이브러리를 생성
4. Swagger Core: OpenAPI 정의를 만들고 사용하고 작업하기 위한 java 관련 라이브러리
5. Swagger APIDom: 다양한 설명 언어 및 직렬화 형식에서 API를 설명하기 위한 단일 통합 구조를 제공

### 1-2. Swagger를 사용하는 이유

1. [Swagger](https://swagger.io/ "Swagger 공식 사이트")를 사용하면 본인이 설계한 API를 깔끔한 형태로 한 눈에 볼 수 있다.
2. [postman](https://www.postman.com/ "개발자들이 API를 디자인하고 빌드하고 테스트하고 반복하기 위한 API 플랫폼")을 이용하지 않고도 API에 데이터를 전송해 작동하는 형태를 확인할 수 있다.
   - [postman에 대해서](https://meetup.nhncloud.com/posts/107 "postman 사용방법에 관한 글입니다.")

## 2. Springfox Swagger

Spring으로 구축된 API에 대한 자동화된 JSON API 문서

### 2-1. 시작히기

#### 2-1-1. Maven

```xml
<dependency>
  <groupId>io.springfox</groupId>
  <artifactId>springfox-swagger2</artifactId>
  <version>2.9.2</version>
</dependency>

<dependency>
  <groupId>io.springfox</groupId>
  <artifactId>springfox-swagger-ui</artifactId>
  <version>2.9.2</version>
</dependency>
```

#### 2-1-2. Gradle

```gradle
implementation 'io.springfox:springfox-swagger2:2.9.2'
implementation 'io.springfox:springfox-swagger-ui:2.9.2'
```

### 2-2. SwaggerConfig 생성

```java
@Configuration
@EnableSwagger2
public class SwaggerConfig {

// 기본 swagger 선언
@Bean
  public Docket api() {
    return new Docket(DocumentationType.SWAGGER_2)
      .select()
      .apis(RequestHandlerSelectors.any())
      .paths(PathSelectors.any())
      .build();
  }
}
```

[Docket Bean 공식 문서](https://springfox.github.io/springfox/javadoc/2.7.0/springfox/documentation/spring/web/plugins/Docket.html "Docket Bean에 관한 자세한 설명 확인하기")

### 2-3. Spring MVC 프로젝트인 경우 추가 설정

```java
public class SwaggerConfig implements WebMvcConfigurer {
    
  @Override
  public void addResourceHandlers(ResourceHandlerRegistry registry) {
    registry.addResourceHandler("swagger-ui.html")
      .addResourceLocations("classpath:/META-INF/resources/");

    registry.addResourceHandler("/webjars/**")
      .addResourceLocations("classpath:/META-INF/resoucres/webjars/");
  }

  ... Docket Bean ...
}
```

## 3. Springdoc

위에서 소개한 Springfox와 동일한 기능을 하는 Spring으로 구축된 API에 대한 자동화된 JSON API 문서

### 3-1. 시작하기

#### 3-1-1. Maven

```xml
<dependency>
      <groupId>org.springdoc</groupId>
      <artifactId>springdoc-openapi-ui</artifactId>
      <version>1.6.9</version>
   </dependency>
```

#### 3-1-2. Gradle

```gradle
implementation 'org.springdoc:springdoc-openapi-ui:1.6.9'
```

### 3-2. SwaggerConfig 설정하기

```java
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;

@Configuration
public class SwaggerConfig {
  @Bean
    public OpenAPI openAPI(@Value("${springdoc.version}") String version) {
        
    Info info = new Info()
                .title("Documentation Title") // 문서 제목
                .version(version) // 문서 버전
                .description("Documentation Description") // 문서 설명
                .contact(new Contact() // 연락처
                        .name("Your name")
                        .email("Your email"));

      // Security 스키마 설정
        SecurityScheme bearerAuth = new SecurityScheme()
                .type(SecurityScheme.Type.HTTP)
                .scheme("bearer")
                .bearerFormat("Authorization")
                .in(SecurityScheme.In.HEADER)
                .name(HttpHeaders.AUTHORIZATION);

        // Security 요청 설정
        SecurityRequirement addSecurityItem = new SecurityRequirement();
        addSecurityItem.addList("Authorization");

        return new OpenAPI()
                        // Security 인증 컴포넌트 설정
                        .components(new Components().addSecuritySchemes("Authorization", bearerAuth))
                        // API 마다 Security 인증 컴포넌트 설정
                        .addSecurityItem(addSecurityItem)
                        .info(info);
    }
}
```

### 3-3. Application.yml

1. application.properties에서 yml로 변경하려면 이름바꾸기를 통해 application.yml로 명명해주면 된다.
2. [yaml/yml 파일 작성 방법](https://velog.io/@bloomspes/yaml-%ED%8C%8C%EC%9D%BC-%EC%9E%91%EC%84%B1-%EC%9A%94%EB%A0%B9-%EA%B8%B0%EC%B4%88%ED%8E%B8-%EC%8A%A4%ED%94%84%EB%A7%81%ED%8E%B8)
3. [springdoc application.yml 작성 방법](https://springdoc.org/#properties)

#### 3-3-1. 작성 예시

```yml
springdoc:
  default-consumes-media-type: application/json
  default-produces-media-type: application/json
  version: '1.0.0'
  api-docs:
    groups:
      enabled: true
  swagger-ui:
    operations-sorter: alpha
    tags-sorter: alpha
    enabled: true
    path: '/api/api-docs.html'
    try-it-out-enabled: false
    disable-swagger-default-url: true
```

### 3-4. 실행 화면

```textile
springboot 버전: 2.7.8
spring dependency-management 버전: 1.0.15.RELEASE
java 버전: 11 (17로 설정 후 실행 시 실행되지 않아 11로 변경...)
```

![springdoc](/images/springdoc.png)

## 4. Reference

1. [Mike Ralphson - A brief history of the OpenAPI Specification](https://dev.to/mikeralphson/a-brief-history-of-the-openapi-specification-3g27)
2. [Swagger](https://swagger.io/)
3. [Springfox](https://github.com/springfox/springfox)
4. [Springdoc](https://springdoc.org/)
5. [Swagger(Springfox 사용하기)](https://dev-jwblog.tistory.com/20)
6. [Swagger, 다 같은 놈이 아니었다. (Springfox vs Springdoc)](https://velog.io/@ychxexn/Swagger-%EB%8B%A4-%EA%B0%99%EC%9D%80-%EB%86%88%EC%9D%B4-%EC%95%84%EB%8B%88%EC%97%88%EB%8B%A4.-Springfox-vs-Springdoc)
7. [Swagger 란 ? (이론 + Spring boot 적용)](https://velog.io/@soyeon207/%EC%9A%B0%EB%8B%B9%ED%83%95%ED%83%95-Swagger-%EC%A0%81%EC%9A%A9%EA%B8%B0#%ED%99%94%EB%A9%B4-%EC%A0%81%EC%9A%A9-%EC%98%88%EC%8B%9C)
8. [[Spring] Swagger UI & SpringDoc (OpenAPI) ( 01 )](https://velog.io/@hwan2da/Spring-Swagger-UI-SpringDoc-OpenAPI-01)
