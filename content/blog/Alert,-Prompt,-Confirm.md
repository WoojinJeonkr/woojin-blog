---
external: false
title: "Alert, Prompt, Confirm"
date: 2022-11-23
---

## 1. alert

함수가 실행되면 사용자가 ‘확인(OK)’ 버튼을 누를 때까지 메시지를 보여주는 창이 계속 떠있게 된다.

```ts
alert("Hello");
```

## 2. prompt

함수가 실행되면 텍스트 메시지와 입력 필드(input field), 확인(OK) 및 취소(Cancel) 버튼이 있는 모달 창을 띄워준다.

```ts
prompt('사용자에게 보여줄 문자열', '입력 필드의 초기값(선택 요소)');
```

사용자는 프롬프트 대화상자의 입력 필드에 원하는 값을 입력하고 확인을 누를 수 있으며 값을 입력하길 원하지 않는 경우는 취소(Cancel) 버튼을 누르거나 Esc를 눌러 대화상자를 빠져나갈 수 있다.
두번째 매개 변수는 선택 사항이지만 초기값을 넣지 않더라도 다음과 같이 작성하는 것을 권장한다.

```ts
let test = prompt("Test", '');
```

### 2-1. modal

메시지가 있는 작은 창은 모달 창(modal window) 이라고 부른다.
modal이란 단어엔 페이지의 나머지 부분과 상호 작용이 불가능하다는 의미가 내포되어 있다.
사용자는 확인 버튼을 누르기 전까지 모달 창 바깥에 있는 버튼을 누른다든가 하는 행동을 할 수 없다.

## 3. confirm

```ts
result = confirm(question);
```

매개변수로 받은 질문과 확인 및 취소 버튼이 있는 모달 창을 보여준다.
사용자가 확인 버튼을 누르면 true, 그 외의 경우는 false를 반환한다.

```ts
let isBoss = confirm("당신이 주인인가요?");
alert( isBoss ); // 확인을 누르면 true가 출력
```

## 4. Reference

- [alert, prompt, confirm을 이용한 상호작용](https://ko.javascript.info/alert-prompt-confirm)
