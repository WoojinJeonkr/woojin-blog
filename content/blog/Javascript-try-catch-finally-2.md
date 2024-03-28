---
external : false
title : "Javascript try catch finally 2"
tag : [BFE, Javascript]
date : 2024-03-23
---

## 1. 문제

문제 출처 : [BFE.dev Javascript Quizzes 125. try..catch..finally 2](https://bigfrontend.dev/quiz/try-catch-finally-2)

```js
const prettify = (str) => {
  try {
    if (typeof str === 'string') {
      JSON.parse(str)
      return "prettified"
    }
  } catch (e) {
    return "errored"
  } finally {
    return str
  }
}

console.log(prettify('BFE.dev'))
console.log(prettify('123'))
```

위 코드의 출력 결과를 적어보세요.

## 2. 정답

```bash
'BFE.dev'
'123'
```

## 3. 풀이

prettify 함수는 문자열을 받아서 JSON으로 파싱하려고 시도하고, 성공하면 "prettified"를 반환하고, 실패하면 "errored"를 반환합니다.  
그러나 finally 블록에서는 항상 str을 반환하기 때문에 try 블록이 성공하더라도 파싱에 성공하더라도 finally 블록이 실행되어 str이 반환됩니다.  
결과적으로 어떤 문자열을 전달하더라도 전달된 문자열을 그대로 반환하기 때문에 위의 정답과 같은 결과가 출력됩니다.
