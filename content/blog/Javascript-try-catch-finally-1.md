---
external : false
title : "Javascript try catch finally 1"
tag : [BFE, Javascript]
date : 2024-03-23
---

## 1. 문제

문제 출처 : [BFE.dev Javascript Quizzes 120. try..catch..finally](https://bigfrontend.dev/quiz/try-catch-finally)

```js
function func() {
  try {
    console.log(1)
    return 
  } catch (e) {
    console.log(2)
  } finally {
    console.log(3)
  }
  console.log(4)
}

func()
```

위 코드의 출력 결과를 적어보세요.

## 2. 정답

```bash
1
3
```

## 3. 풀이

### 3-1. func() 함수 실행 순서

1. func() 함수가 호출되면, 코드 블록이 실행됩니다.
2. try 블록 내에서 console.log(1)이 실행되고, 콘솔에 1이 출력됩니다.
3. return 문에서 값을 반환하지 않고 비워두었기 때문에 함수가 여기서 종료되는데 이때 finally 블록이 실행됩니다.
4. finally 블록 내의 console.log(3)이 실행되어 콘솔에 3이 출력됩니다.

### 3-2. 주의할 점

1. try 블록 내에서 예외가 발생하지 않았기 때문에 catch 블록은 실행되지 않습니다.
2. return 문이 실행되면 함수의 실행이 즉시 중단되고 함수의 호출자로 값을 반환하게 되어 console.log(4)에 도달하지 않고 함수가 종료됩니다.
