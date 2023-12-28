---
external: false
title : "How to remove whitespace"
date: 2022-10-25
---

## 1. trim()

문자열 양 끝의 공백을 제거하는 함수이다. 여기서 공백은 모든 공백문자(space, tab, NBSP 등)와 모든 개행문자(LF, CR 등)를 의미한다. trim() 함수를 사용하면 양 옆의 공백은 제거되지만 문장 안의 공백이 제거되지 않는다.

{% codepen url="https://codepen.io/calomys/full/rNvbEBq" title="trim()" /%}

## 2. split(' ').join('')

문장 안의 공백을 제거하기 위해 split()함수와 join()함수를 제거하는 방법을 사용할 수 있다. split(' ')함수를 이용하여 공백을 기준으로 문자열을 끊고 join('')함수로 문자열을 붙여주는 방법이다.

{% codepen url="https://codepen.io/calomys/full/mdKdBxX" title="split(' ').join('')" /%}

## 3. replace() with regex

문장 안의 공백을 제거하기 위해서 replace() 함수를 이용할 수 있다. replace(/\s/g, "")는 검색범위를 전역으로 확장해 공백문자를 찾은 뒤 ''으로 대체하겠다는 의미이다.

{% codepen url="https://codepen.io/calomys/full/GRdeLLV" title="replace()" /%}

## 4. Reference

- [Remove all Whitespace from a String in TypeScript](https://bobbyhadz.com/blog/typescript-trim-whitespace-from-string)
- [자바스크립트 공백 제거(trim, strip whitespace)](https://sisiblog.tistory.com/249)
- [자바스크립트 간단한 출력 방법 document와 window](https://dasima.xyz/javascript-output/)
