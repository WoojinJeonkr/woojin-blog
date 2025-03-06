---
external : false
title : "Express Routing (1)"
tag : [Programmers, Express]
date : 2025-03-06
---

## 1. Express

Express는 Node.js에서 가장 인기 있는 웹 프레임워크 중 하나로, 간단하고 유연한 구조를 통해 웹 애플리케이션을 빠르게 개발할 수 있게 도와줍니다. Express의 유연성은 주로 미들웨어 구조와 라우팅 기능에 기반합니다.

- 미들웨어 구조: Express는 요청과 응답 사이에서 다양한 기능을 수행할 수 있는 미들웨어 함수를 중간에 위치시켜, 요청과 응답 사이의 흐름을 제어할 수 있게 합니다. 이로 인해 필요한 기능만 선택하여 애플리케이션을 유연하게 구성할 수 있습니다. 예를 들어, JSON 데이터 파싱이나 정적 파일 제공 같은 기능을 쉽게 추가할 수 있습니다.

- 라우팅 기능: Express의 라우팅 기능은 URL 요청에 따라 적절한 핸들러 함수를 호출하는 과정을 의미합니다. 핸들러 함수는 요청을 처리하고 응답을 반환하는 함수로, 라우트가 일치할 때 실행됩니다. 핸들러 함수를 통해 클라이언트의 요청에 따라 다양한 경로를 정의하고, 각 경로에 맞는 응답을 보낼 수 있게 해줍니다. 라우팅은 GET, POST, PUT, DELETE 등 다양한 HTTP 메서드를 지원하며, 경로 매개변수를 통해 동적으로 값을 처리할 수도 있습니다.

## 2. Routing - GET

이제 app.get 형태에 대해 알아보겠습니다.
예를 들어, /users/:id 경로에 대한 GET 요청을 처리하는 라우터를 다음과 같이 정의할 수 있습니다.
이 경로에서 :id는 경로 매개변수로, 클라이언트가 요청할 때 실제 값을 전달하여 동적으로 처리할 수 있습니다.

```js
app.get('/users/:id', function(req, res) {
  const id = req.params.id;
  res.send(`User ID: ${id}`);
});
```

위 코드에서 function(req, res)는 핸들러 함수로, 요청 객체(req)와 응답 객체(res)를 통해 요청을 처리하고 응답을 반환합니다. 핸들러 함수는 요청과 응답 사이에서 다양한 작업을 수행할 수 있으며, 여러 개의 핸들러 함수를 순차적으로 실행할 수도 있습니다.

예를 들어, 아래와 같이 여러 개의 핸들러 함수를 사용하여 요청 처리 흐름을 제어할 수 있습니다.

```js
const handler1 = (req, res, next) => {
  console.log('첫 번째 핸들러 실행');
  next(); // 다음 핸들러로 요청이 전달
};

const handler2 = (req, res, next) => {
  console.log('두 번째 핸들러 실행');
  next(); // 다음 핸들러로 요청이 전달
};

const handler3 = (req, res) => {
  res.send('세 번째 핸들러에서 응답 전송');
};

app.get('/example', [handler1, handler2, handler3]);
```

위 코드를 실행하게 되면 terminal에 아래와 같이 출력되고

```text
첫 번째 핸들러 실행
두 번째 핸들러 실행
```

화면에 '세 번째 핸들러에서 응답 전송'이라고 나오게 됩니다.

그렇다면 만약 코드가 아래와 같다면 어떻게 나오게 될까요?

```js
const handler1 = (req, res, next) => {
  console.log('첫 번째 핸들러 실행');
};

const handler2 = (req, res, next) => {
  console.log('두 번째 핸들러 실행');
};

const handler3 = (req, res) => {
  res.send('세 번째 핸들러에서 응답 전송');
};

app.get('/example', [handler1, handler2, handler3]);
```

이 경우에는 다음 핸들러로 넘어가는 next()가 없기 때문에 첫 번째 핸들러 실행이라고 출력이 된 뒤 다음 핸들러로 넘어가지 않고 요청 처리가 여기서 중단됩니다.
handler1에서 next()를 호출하지 않기 때문에, handler2와 handler3는 실행되지 않습니다. 따라서 클라이언트에게는 응답이 전송되지 않으며, 요청은 시간 초과되거나 연결이 끊어질 때까지 대기 상태에 빠질 수 있습니다.

따라서, 미들웨어 체인에서 다음 핸들러로 넘어가려면 next()를 호출해야 한다는 것을 알 수 있었습니다.
