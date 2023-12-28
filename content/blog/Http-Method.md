---
external: false
title : "HTTP Method"
date: 2022-11-19
---

## 1. HTTP Method

클라이언트가 웹 서버에게 사용자 요청의 목적이나 종류를 알리는 수단을 말한다.  
HTTP Method에는 GET, POST, PUT, HEAD, DELETE, PATCH, OPTIONS, CONNECT, TRACE가 있다.  
이 중 POST와 GET을 가장 많이 사용한다.  

### 1-2. GET Method

- URL에 변수(데이터)를 포함시켜 요청
- 데이터를 Header에 포함하여 전송
- URL에 데이터가 노출되어 보안에 취약
- 길이 제한이 존재하며 캐싱이 가능하다

### 1-3. POST Method

- URL에 변수(데이터)를 노출하지 않고 요청
- 데이터를 Body에 포함하여 전송
- URL에 데이터가 노출되지 않아 기본 보안이 되어 있다
- 데이터 길이에 제한이 없으며 캐싱이 불가능하다

## 2. Reference

- [HTTP Request Methods](https://www.w3schools.com/tags/ref_httpmethods.asp)
