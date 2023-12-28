---
external: false
title: "useImperativeHandle"
date: 2023-03-23
---

## 1. useImperativeHandle

### 1-1. 기본 구조

```ts
useImperativeHandle(ref, createHandle, [deps])
```

## 1-2. 기능

ref를 사용할 때 부모 컴포넌트에 노출되는 인스턴스 값을 사용자화한다.
대부분의 경우 ref를 사용한 명령형 코드는 피해야 하며 forwardRef와 더불어 사용한다.

## 1-3. 예시

아래의 코드에서 `<FancyInput ref={inputRef} />`를 렌더링한 부모 컴포넌트는 `inputRef.current.focus()`를 호출할 수 있다.

```ts
function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} ... />;
}
FancyInput = forwardRef(FancyInput);
```

## 2. Reference

- [useImperativeHandle](https://react.dev/reference/react/useImperativeHandle)
