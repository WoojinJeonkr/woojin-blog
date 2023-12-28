---
external: false
title : "About CORS"
description : "What is CORS?"
date: 2022-10-09
---

## 1. CORS에 부딪힌 경험

내가 처음 CORS를 접한 건 스프링 프로젝트를 배포할 때였다.
페이지에 이미지를 붙이고 서버에 배포한 뒤 이미지가 잘 나오는지 페이지를 확인하니 이미지 오류가 뜨면서 이미지가 나오지 않는 현상이 발생하였다.
이때 오류를 찾아보니 CORS 허용 코드를 추가하라는 해결하라는 답변을 받았고 CORS 허용 코드를 추가하니 이미지가 정상적으로 표시되게 되었다.

## 2. CORS란?

Cross Origin Resource Sharing의 약자로 도메인이 다른 자원에 리소스를 요청할 때 접근 권한을 부여하는 메커니즘이다.
즉, 다른 도메인(ex. http : 프로토콜, localhost : 호스트, 8080: 포트)의 자원을 쓰려면 자원의 주인이 허락한 규약을 지켜야 하는데 이러한 규약을 표준화한 것을 말한다.

![교차 출처 리소스 공유](/images/CORS.png)
**이미지 출처:** [https://developer.mozilla.org/ko/docs/Web/HTTP/CORS](https://developer.mozilla.org/ko/docs/Web/HTTP/CORS)

## 3. CORS 발생 예시

서버는 8080, 클라이언트는 7070으로 설정한다고 가정하자.
이 경우 `http://localhost:7070/`으로 접근하면 CORS 예외가 발생한다.
이는 클라이언트는 `http://localhost:7070` 도메인을 사용하고 서버는 `http://localhost:8080`을 사용하고 있어서 프로토콜과 호스트는 같지만 포트가 다르기 때문에 다른 도메인에 접근하지 못하도록 예외를 발생시키는 것이다.

## 4. CORS 해결

1. [@crossorgin 사용하기](https://tecoble.techcourse.co.kr/post/2020-07-18-cors/)
2. [Chrome 확장 프로그램('Allow CORS: Access-Control-Allow-Origin') 이용하기](https://inpa.tistory.com/entry/WEB-%F0%9F%93%9A-CORS-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95-%F0%9F%91%8F#chrome-%ED%99%95%EC%9E%A5-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8-%EC%9D%B4%EC%9A%A9)
3. [서버에서 Access-Control-Allow-Origin 세팅하기](https://inpa.tistory.com/entry/WEB-%F0%9F%93%9A-CORS-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95-%F0%9F%91%8F#chrome-%ED%99%95%EC%9E%A5-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8-%EC%9D%B4%EC%9A%A9)

## 5. 참고 자료

- [교차 출처 리소스 공유 (CORS)](https://developer.mozilla.org/ko/docs/Web/HTTP/CORS#%EC%9D%B4_%EA%B8%80%EC%9D%80_%EB%88%84%EA%B0%80_%EC%9D%BD%EC%96%B4%EC%95%BC_%ED%95%98%EB%82%98%EC%9A%94)
- [Tecoble - CORS란?](https://tecoble.techcourse.co.kr/post/2020-07-18-cors/)
- [[WEB] 📚 CORS 개념 💯 완벽 정리 & 해결 방법 👏](https://inpa.tistory.com/entry/WEB-%F0%9F%93%9A-CORS-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95-%F0%9F%91%8F#chrome-%ED%99%95%EC%9E%A5-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8-%EC%9D%B4%EC%9A%A9)
