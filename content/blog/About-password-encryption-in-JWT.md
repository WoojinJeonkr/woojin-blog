---
external: false
title: "About password encryption in JWT"
date: 2023-02-12
---

## 1. JWT란?

JWT(JSON Web Token)는 당사자 간에 정보를 JSON 개체로 안전하게 전송하기 위한 간결하고 독립적인 방법을 정의하는 개방형 표준( RFC 7519 )이다.
이 정보는 디지털 서명되어 있으므로 확인하고 신뢰할 수 있으며 서명된 토큰은 그 안에 포함된 클레임의 무결성을 확인할 수 있는 반면 암호화된 토큰은 다른 당사자로부터 해당 클레임(정보의 한 덩어리)을 숨기게 된다.
공개/개인 키 쌍을 사용하여 토큰에 서명할 때 서명은 개인 키를 보유한 당사자만이 서명한 당사자임을 인증하게 된다.

### 1-1. JWT의 구조

jwt는 'xxxxx.yyyyy.zzzzz'와 같은 '머리글(헤더).유효 탑재량(페이로드드).서명'의 형태로 이루어져 있다.
머리글은 일반적으로 토큰 유형(JWT)과 사용 중인 서명 알고리즘(예: HMAC SHA256 또는 RSA)의 두 부분으로 구성된다.
예를 들어,

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

이 JSON은 Base64Url로 인코딩되어 JWT의 첫 번째 부분을 구성된다.
유효탑재량(페이로드)은 클레임(엔터티(일반적으로 사용자) 및 추가 데이터에 대한 설명)을 포함한다.
클레임은 등록된 클레임 , 공개 클레임 및 비공개 클레임 의 세 가지 유형이 있다.

1. 등록된 클레임: 필수는 아니지만 유용하고 상호 운용 가능한 클레임을 제공하기 위해 권장되는 미리 정의된 클레임 집합
2. 공개 클레임: JWT를 사용하는 사람들이 마음대로 정의할 수 있지만 충돌을 방지하려면 IANA JSON 웹 토큰 레지스트리 에 정의하거나충돌 방지 네임스페이스를 포함하는 URI로 정의해야 하는 클레임
3. 비공개 클레임: 사용에 동의한 당사자 간에 정보를 공유하기 위해 생성된 사용자 정의 클레임

유효탑재량(페이로드)의 예는 다음과 같다.

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

위와 같은 JSON을 Base64Url로 인코딩되어 JSON 웹 토큰의 두 번째 부분을 형성하게 된다.

서명 부분을 생성하려면 인코딩된 헤더, 인코딩된 페이로드, 비밀, 헤더에 지정된 알고리즘을 가져와서 서명해야 한다.
예를 들어 HMAC SHA256 알고리즘을 사용하려는 경우 서명은 다음과 같은 방식으로 생성된다.

```textile
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```

서명은 도중에 메시지가 변경되지 않았는지 확인하는 데 사용되며 개인 키로 서명된 토큰의 경우 JWT 발신자가 누구인지 확인할 수도 있다.

### 1-2. JWT 작동 방식

인증에서 사용자가 자격 증명을 사용하여 성공적으로 로그인하면 JSON 웹 토큰이 반환된다. 사용자가 보호된 경로 또는 리소스에 액세스하려고 할 때마다 사용자 에이전트는 일반적으로 Bearer 스키마를 사용하여 Authorization 헤더 에서 JWT를 보내야 하는데 헤더의 내용은 다음과 같다.

```textile
Authorization: Bearer <token>
```

이는 경우에 따라 상태 비저장 권한 부여 메커니즘일 수 있다. 서버의 보호된 경로는 헤더에서 유효한 JWT인지를 확인하고 JWT가 있는 경우 사용자는 보호된 리소스에 액세스할 수 있다. JWT에 필요한 데이터가 포함되어 있으면 항상 그런 것은 아니지만 특정 작업에 대해 데이터베이스를 쿼리해야 할 필요성이 줄어들 수 있다.

HTTP 헤더를 통해 JWT 토큰을 보내는 경우 토큰이 너무 커지지 않도록 해야 한다. 일부 서버는 8KB 이상의 헤더를 허용하지 않으며 모든 사용자 권한을 포함하는 것과 같이 JWT 토큰에 너무 많은 정보를 포함하려는 경우 Auth0 Fine-Grained Authorization 과 같은 대체 솔루션이 필요하게 될 수도 있다.

다음은 API 또는 리소스에 액세스하기 위해 JWT를 얻고 사용하는 방법에 대해 설명한 다이어그램이다.

![diagram](/images/api_Jwt.png)

서명된 토큰을 사용하면 토큰에 포함된 모든 정보가 사용자 또는 다른 당사자가 변경할 수 없더라도 노출되게 되므로 토큰에 비밀 정보를 입력해서는 안된다.

## 2. PasswordEncoder

Spring에서 PasswordEncoder interface는 암호 인코딩을 위한 서비스 인터페이스이다. BCryptPasswordEncoder로의 구현을 선호하며 인코딩 알고리즘은 임의로 생성된 8바이트 이상의 솔트와 결합된 SHA-1 이상의 해시를 적용하게 된다.

```java
boolean matches(java.lang.CharSequence rawPassword, java.lang.String encodedPassword)
```

매개변수로 rawPassword(인코딩하고 일치시킬 원시 암호)와 encodedPassword(비교할 스토리지의 인코딩된 비밀번호)를 받으며
저장소에서 얻은 인코딩된 암호가 인코딩된 후 제출된 원시 암호와 일치하는지 확인하고 암호가 일치하면 true를 반환하고 일치하지 않으면 false를 반환하게 된다. 이때 저장된 암호 자체는 해독되지 않는다.

PasswordEncoder를 사용하여 AbstractPasswordEncoder , BCryptPasswordEncoder , NoOpPasswordEncoder , Pbkdf2PasswordEncoder , SCryptPasswordEncoder , StandardPasswordEncoder를 구현할 수 있다.

## 3. BCryptPasswordEncoder란?

PasswordEncoder 인터페이스를 구현한 클래스로 BCrypt 해싱 함수(BCrypt hashing function)를 사용해서 비밀번호를 해싱해주는 encode() 메서드와 확인 요청된 비밀번호와 저장된 비밀번호의 일치 여부를 확인해주는 matches() 메서드를 제공한다.
해당 클래스를 인스턴트화할 때 사용되는 인자 strength 값을 통해 해시의 강도를 조절할 수 있다.

```java
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
```

```java
@Override
public String encode(CharSequence rawPassword) {
  if (rawPassword == null) {
    throw new IllegalArgumentException("rawPassword cannot be null");
  }
  String salt = getSalt();
  return BCrypt.hashpw(rawPassword.toString(), salt);
}
```

비밀번호를 해싱해주는 encode() 메서드를 살펴보면 내부적으로 getSalt() 메서드를 통해 매번 새로운 salt 값을 생성하는 것을 볼 수 있다. 사용자에게 입력받은 password 값과 이렇게 내부적으로 생성되는 salt 값을 가지고 BCrypt.hashpw() 메서드에서 최종적으로 해싱된 비밀번호 값을 얻게 된다.

```java
@Override
public boolean matches(CharSequence rawPassword, String encodedPassword) {
  if (rawPassword == null) {
    throw new IllegalArgumentException("rawPassword cannot be null");
  }
  if (encodedPassword == null || encodedPassword.length() == 0) {
    this.logger.warn("Empty encoded password");
    return false;
  }
  if (!this.BCRYPT_PATTERN.matcher(encodedPassword).matches()) {
    this.logger.warn("Encoded password does not look like BCrypt");
    return false;
  }
  return BCrypt.checkpw(rawPassword.toString(), encodedPassword);
}
```

확인 요청된 비밀번호와 저장된 비밀번호의 일치 여부를 확인하는 matches() 메서드이다. 해당 메서드의 동작 순서를 따라가 보면 아래 checkpw() -> equalsNoEarlyReturn()으로 이어지게 된다.

```java
public static boolean checkpw(String plaintext, String hashed) {
  byte[] passwordb = plaintext.getBytes(StandardCharsets.UTF_8);
  return equalsNoEarlyReturn(hashed, hashpwforcheck(passwordb, hashed));
}

public static boolean checkpw(byte[] passwordb, String hashed) {
  return equalsNoEarlyReturn(hashed, hashpwforcheck(passwordb, hashed));
}

static boolean equalsNoEarlyReturn(String a, String b) {
  return MessageDigest.isEqual(a.getBytes(StandardCharsets.UTF_8), b.getBytes(StandardCharsets.UTF_8));
}
```

plaintext와 저장된 hashed 값을 넣어, hashed 값에서 real_salt를 추출하여 plaintext와 real_salt 값으로 다시 해싱을 하고, 이렇게 해싱되어서 나온 결과와 저장된 해싱 값을 비교하여 일치 여부를 확인하게 된다.

## 4. Reference

- [jwt.io](https://jwt.io/introduction)
- [BCrypt 동작원리 파헤치기(BCryptPasswordEncoder)](https://wildeveloperetrain.tistory.com/175)
