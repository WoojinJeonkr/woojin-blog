---
external: false
title: "React Hook useEffect"
date: 2022-11-09
---

## 1. useEffect Hook

- 컴포넌트가 렌더링 될 때 특정 작업을 실행할 수 있도록 하는 Hook
- 리액트의 useEffect Hook 사용 시 함수 컴포넌트에서도 side effect 사용 가능 --> LifeCycle Hook 대체 가능

## 2. 각 상황별 사용 방법

### 2-1. 렌더링이 완료될 때마다 실행되는 경우

```ts
import React, { useState, useEffect } from "react";

const UseEffectTest = () => {
  const [count, setCount] = useState(0);
  const countUp = () => setCount(count + 1);

  useEffect(() => {
    console.log("useEffect!!", count);
  });

  return (
    <div>
      <p>{count}번 클릭!</p>
      <button onClick={countUp}>Click Me</button>
    </div>
  );
};

export default UseEffectTest;
```

### 2-2. 최초 렌더링시에만 실행되는 경우

```ts
import React, { useState, useEffect } from "react";

const UseEffectTest = () => {
  const [count, setCount] = useState(0);
  const countUp = () => setCount(count + 1);

  useEffect(() => {
    console.log("useEffect!!", count);
  }, []);

  return (
    <div>
      <p>{count}번 클릭!</p>
      <button onClick={countUp}>Click Me</button>
    </div>
  );
};

export default UseEffectTest;
```

### 2-3. 특정 값이 변경될 때에만 실행하는 경우

```TypeScipt
import React, { useState, useEffect } from "react";

const UseEffectTest = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Admin");
  const countUp = () => setCount(count + 1);
  const handleChangeName = (e) => setName(e.target.value);

  useEffect(() => {
    console.log("useEffect!!", count);
  }, [count]);

  return (
    <div>
      <p>안녕하세요. {name} 입니다.</p>
      <input onChange={handleChangeName} />
      <p>{count}번 클릭!</p>
      <button onClick={countUp}>Click Me</button>
    </div>
  );
};

export default UseEffectTest;
```

## 3. Reference

- [reactjs - Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)
