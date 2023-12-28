---
external: false
title : "Differences Between JavaScript and TypeScript"
date: 2022-10-13
---

> GeekWeek 2022 -  [Difference between TypeScript and JavaScript](https://www.geeksforgeeks.org/difference-between-typescript-and-javascript/?ref=lbp)를 번역한 글입니다.

## 1 . 그림으로 보는 TypeScript와 JavaScript의 관계

![TypeScript containing JavaScript](https://cdncontribute.geeksforgeeks.org/wp-content/uploads/Untitled-102-300x216.png "자바스크립트를 포함하고 있는 타입스크립트")

## 2. TypeScript는 어떻게 만들어졌을까?

JavaScript가 개발될 때 JavaScript 개발 팀은 JavaScript를 클라이언트 측 프로그래밍 언어로 도입했습니다.
시간이 지나면서 사람들이 JavaScript를 사용하면서 개발자들은 JavaScript가 서버 측 프로그래밍 언어로 사용될 수 있다는 것도 깨달았습니다.
그러나 JavaScript가 성장함에 따라 JavaScript 코드는 복잡하고 무거워지게 되었고 객체 지향 프로그래밍 언어의 요구 사항조차 충족할 수 없는 수준에 이르렀습니다. 이로 인해 JavaScript가 서버 측 기술로 엔터프라이즈 수준에서 성공하지 못했습니다.
이러한 격차를 메우기 위해 개발팀에서는 TypeScript를 만들었습니다.

## 3. TypeScript의 기능

- `TypeScript` 코드는 일반 `JavaScript` 코드로 변환된다.
  **`Trans-piled process`**(기본적으로 브라우저에서 해석되지 않는 `TypeScript` 코드는 컴파일되어 `JavaScript`로 변환됨)
- `JavaScript`로 작성된 모든 코드는 확장자를 `.js` 에서 `.ts`로 변경하여 TypeScript로 변환할 수 있다.
- 단일 환경에만 국한되지 않고 모든 브라우저, 장치 또는 운영 체제에서 실행되도록 컴파일할 수 있다.
- JS 라이브러리를 지원한다(개발자는 이미 존재하는 JavaScript 코드를 사용하거나, 인기 있는 JavaScript 라이브러리를 통합하거나, 기본 JavaScript 코드에서 TS 코드를 호출할 수 있다)
  
## 4. TypeScript와 JavaScript의 차이점

|                     |         TypeScript        |      JavaScript      |
|:-------------------:|:-------------------------:|:--------------------:|
|         언어        | 객체 지향 프로그래밍 언어 | 프로토타입 기반 언어 |
| 정적 입력 기능 지원 |             O             |           X          |
|      인터페이스     |             O             |           X          |

## 5. TypeScript의 장단점

### 5-1. 장점

- 항상 개발(사전 컴파일) 시 컴파일 오류를 지적하여 런타임 오류가 발생할 가능성이 적다
- 정적/강력한 타이핑을 지원하여 컴파일 타임에 타입의 정확성을 확인할 수 있다.
- `.ts` 파일을 ES3, ES4 및 ES5로도 컴파일할 수 있다

### 5-2. 단점

코드를 컴파일하는 시간이 JavaScript보다 길다

## 6. 참고 자료

- [Difference between TypeScript and JavaScript](https://www.geeksforgeeks.org/difference-between-typescript-and-javascript/)
- [TypeScript vs JavaScript: The Difference You Should Know](https://radixweb.com/blog/typescript-vs-javascript)
