---
external : false
title : "center an element vertically"
tag : [BFE, CSS]
date : 2024-03-18
---

## 1. Problem

해당 문제는 [여기](https://bigfrontend.dev/css/center-an-element-vertically)에서 확인하실 수 있습니다.

## 2. 문제 접근 방법

문제의 정답 코드를 완성하기 위해서는 내부 div를 수직으로 가운데 정렬해야 합니다. 그리고 이를 수행할 때 요소의 크기와 색상은 변경되지 않아야 합니다.

결론적으로 css가 다음과 같이 되도록 완성시키면 됩니다.

1. 수직으로 가운데 정렬되어야 합니다.
2. 컨테이너 크기가 변경되더라도 수직 정렬이 유지되어야 합니다.

## 3. Solve

```css
.outer {
  width: 100%; /* 외부 요소의 너비를 100%로 설정합니다. */
  height: 100%; /* 외부 요소의 높이를 100%로 설정합니다. */
  background-color: #efefef; /* 배경 색상을 연회색으로 지정합니다. */
  /* 가로 세로 중앙 정렬을 위한 코드 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.inner {
  width: 100px; /* 내부 요소의 너비를 100픽셀로 설정합니다. */
  height: 100px; /* 내부 요소의 높이를 100픽셀로 설정합니다. */
  background-color: #f44336; /* 배경 색상을 빨간색으로 지정합니다. */
  /* 내부 요소 스타일링에 대한 추가 코드를 여기에 작성하세요. */
}
```
