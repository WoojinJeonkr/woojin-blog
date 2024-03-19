---
external : false
title : "Javascript var"
tag : [BFE, Javascript]
date : 2024-03-19
---

이번 글에서는 javascript에서 변수를 정의할 때 사용하는 var에 대해 알아보고 해당 학습 내용과 관련된 문제를 풀어봅니다.

## 1. var

JavaScript에서 변수를 정의할 때 사용하는 var는 변수를 선언하는 키워드입니다.  
var 키워드로 변수를 선언하면 해당 변수는 함수 범위(function scope) 또는 전역 범위(global scope)에 속하게 됩니다. 함수 범위에서 선언된 변수는 선언된 함수 내에서만 유효하며, 전역 범위에서 선언된 변수는 스크립트 전체에서 유효합니다.  

```js
function example() {
    var x = 10;
    console.log(x); // 출력: 10
}

console.log(x); // 에러: x is not defined
```

위의 예제에서 x 변수는 example 함수 내에서 선언되었으므로 함수 내부에서만 사용할 수 있습니다. 함수 외부에서는 x가 정의되지 않았다는 에러가 발생합니다.  
var 키워드의 한 가지 단점은 변수가 선언되기 전에 접근할 수 있다는 것입니다. 이를 "호이스팅(hoisting)"이라고 합니다.  

```js
console.log(x); // 출력: undefined
var x = 10;
```

위 코드의 출력 결과와 같이 변수 선언은 스코프의 맨 위로 옮겨지지만 할당은 그 자리에 남아 있게 됩니다. 이러한 특징은 종종 예기치 않은 버그를 발생시킬 수 있으므로 ES6에서는 let과 const 키워드를 사용하여 블록 범위(block scope) 변수를 선언하는 것이 권장됩니다.

## 2. 문제

문제 출처 : [BFE.dev Javascript Quizzes 39. var](https://bigfrontend.dev/quiz/var)

```js
function foo() {
  console.log(i)
  for (var i = 0; i < 3; i++) {
    console.log(i)
  }
}

foo()
```

위 코드의 출력 결과를 적어보세요.

## 3. 정답

```bash
undefined
0
1
2
```

## 4. 풀이

코드는 JavaScript로 작성된 함수인 "foo()"를 정의하고 있습니다. 함수 내에서는 먼저 "console.log(i)"를 호출하고 있습니다. 그러나 "i"는 아직 정의되지 않았으므로 "undefined"를 출력합니다. 그 후 다음, "for" 루프가 시작됩니다. 이 루프에서 "i" 변수가 0으로 초기화되고, 조건문 "i < 3"을 만족할 때까지 반복하며, 각 반복마다 "i" 값을 출력하도록 되어 있으므로  0, 1, 2를 순서대로 출력합니다.
