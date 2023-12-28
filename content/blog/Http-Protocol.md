---
external: false
title : "Http Protocol"
description : "what is http protocol?"
date: 2022-10-24
---

## 1. 프로토콜(protocol)

- 양자간에 미리 정한 약속, 규약
- ex. A가 “아”라고 보내면 B는 그것을 “아버지”로 이해하도록 정한 약속

## 2. Http 프로토콜 (Http Protocol)

- [RFC2616](https://www.rfc-editor.org/rfc/rfc2616)에 정의되어 있음
- HTTP 메시지 프로토콜은 반드시 request/response의 한쌍으로 구성
- request와 response는 각각 header와 body로 이루어져 있고 header와 body 사이에는 반드시 한줄이 띄어져야 함
- http는 반드시 먼저 요청해야만 받을 수 있음 --> 카카오톡과 같이 서버로부터 데이터를 먼저 받는 것은 불가능 --> FCM 푸쉬나 소켓통신을 통해서 먼저 받을 수 있음

## 3. Http Method

- request 헤더의 첫번째 줄 첫번째에 명시
- method의 정의 : http uri가 리소스에게 수행하는 방법
- method의 종류(리소스에 수행할 방법) : GET(리소스를 가져옴), POST(리소스에 데이터 게시), PUT(리소스의 특정 부분 수정), DELETE(리소스 삭제) 등
- 위 4가지 method로 DB와 같은 리소스에 대해서 CRUD가 가능하므로 4가지를 조합해서 REST api를 만들어서 사용

## 4. content type

- 헤더부분에 명시
- body의 데이터가 어떤 타입인지 정의
- request에도 명시될 수 있고, response 시에도 명시될 수 있음
- html에서 form 방식으로 전송되는 데이터 타입: x-www-form-url-encoded 방식
- json 형태로 보낼때는 application/json 타입으로 정의

## 5. status code

- response 의 첫번째 줄 첫번째에 명시
- 개발 시에 상태코드를 보면 무슨 문제인지를 알 수 있어야 한다. 왜냐하면 상태코드가 오류가 나면 대부분 개발자 코드에 찍히는게 아니라 브라우저가 에러를 처리하기 때문이다.

![상태 코드 에러](/images/4xx_error.png)

## 6. Reference

- [Http와 REST의 이해](https://eastflag.co.kr/fullstack/http_protocol/)
