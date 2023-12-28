---
external: false
title : "CSS Position"
date: 2022-10-28
---

## 1. position

position 속성은 HTML 문서 상에서 요소가 배치되는 방식을 결정한다.
요소의 정확한 위치 지정을 위해서 top, left, bottom, right 속성과 함께 사용된다.

### 1-1. static

- position 속성을 별도로 지정해주지 않으면 적용되는 기본값
- position 속성이 static인 요소는 HTML 문서 상에서 원래 있어야하는 위치에 배치된다.
- position 속성이 static일 때 top, left, right, bottom은 무시되며 요소들이 HTML에 작성된 순서 그대로 브라우저 화면에 표시된다.

### 1-2. relative

- 요소를 원래 위치에서 벗어나게 배치할 수 있다
- 요소의 위치 지정은 top, bottom, left, right 속성을 이용해서, 요소가 원래 위치에 있을 때의 상하좌우로 부터 얼마나 떨어지게 할지를 지정할 수 있다.

### 1-3. absolute

- position 속성이 absolute일 때 해당 요소는 배치 기준을 자신이 아닌 상위 요소에서 찾는다.
- DOM 트리를 따라 올라가다가 position 속성이 static이 아닌 첫 번째 상위 요소가 해당 요소의 배치 기준으로 설정된다.
- 만약에 해당 요소 상위에 position 속성이 static이 아닌 요소가 없다면, DOM 트리에 최상위에 있는 `<body>` 요소가 배치 기준이 된다.

### 1-4. fixed

- 요소를 항상 고정된(fixed) 위치에 배치할 수 있다.
- fixed 속성값의 배치 기준이 자신이나 부모 요소가 아닌 뷰포트(viewport), 즉 브라우저 전체화면이다.

### 1-5. sticky

- 브라우저 화면을 스크롤링할 때 효과가 나타난다.
- 스크롤링 시 sticky를 적용한 요소가 화면 상단에 끈적하게(sticky) 붙어서 움직이지 않는다.

## 2. Reference

- [CSS의 position 속성으로 HTML 요소 배치하기](https://www.daleseo.com/css-position/)
