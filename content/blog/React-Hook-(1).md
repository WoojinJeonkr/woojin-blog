---
external: false
title: "React Hook (1)"
date: 2023-02-06
---

## 1. React Hook이란?

React Hook은 React 16.8에 새로 추가된 기능이다.
클래스를 작성하지 않고도 상태 및 기타 React 기능을 사용할 수 있다.

## 2. useState의 기능

컴포넌트의 상태를 관리할 수 있게 해준다.
useState() 함수가 나오기 전까지는 다음과 같이 this.state를 통해 클래스 기반 컴포넌트를 작성했어야 했다.
다음은 사용자 입력 양식을 위한 컴포넌트를 this.state를 통해 작성한 모습이다.

```ts
import React, { Component } from "react";

class UserFormClass extends Component {
  state = { username: "", password: "" };

  handleClick = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleClick}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleClick}
          />
        </label>
      </>
    );
  }
}
```

클래스 컴포넌트의 this.state 필드에 username과 password 값을 저장해둔 후 사용자가 이 값을 변경할 때마다 값이 갱신되고 다시 화면에 반영이 된다.

위의 코드를 React Hooks에서 제공하는 useState() 함수를 통해 함수 기반으로 재작성하면 다음과 같다.

```ts
import React, { useState } from "react";

function UserFormFunction() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={username}
          onChange={({ target: { value } }) => setUsername(value)}
        />
      </label>
      <label>
        Email:
        <input
          type="password"
          name="password"
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
        />
      </label>
    </>
  );
}
```

## 3. useState() 동작 원리

useState의 구조는 다음과 같다.

```ts
import {useState} from 'react'

const [state, setState] = useState(initiailState)
```

useState는 dispatcher라는 인스턴스를 생성하고, 인자로 초기값을 받아 dispatcher.useState에 전달 후 반환값을 return하게 된다.
이 dispatcher는 resolveDispatcher 함수가 반환하는데 resolveDispatcher를 따라가보면

```ts
var dispatcher = ReactCurrentDispatcher.current;
```

라는 코드를 볼 수 있다.
ReactCurrentDispatcher를 따라가보면 ReactCurrentDispatcher라는 객체는 전역에 선언되고 속성으로 current를 가지고 있다는 것을 알 수 있다. 여기서 current가 바로 dispatcher가 들어가는 곳이다.

즉, 실행될 때마다 dispatcher를 선언하고 useState 메소드를 싷행해서 값을 반환하는 react모듈에 선언되어 있는 함수라고 할 수 있다.

## 4. Reference

- [Using the State Hook](https://reactjs.org/docs/hooks-state.html)
- [React Hooks: useState 사용법](https://www.daleseo.com/react-hooks-use-state/)
