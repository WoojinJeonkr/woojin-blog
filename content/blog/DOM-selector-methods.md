---
external : false
title : "DOM selector methods"
tag : [JSChallenger, Javascript]
date : 2024-04-17
---

## 1. Problem

해당 문제는 [JSChallenger](https://www.jschallenger.com/overview)의 [DOM selector methods](https://www.jschallenger.com/javascript-dom-exercises/dom-selector-methods)에서 확인하실 수 있습니다.

## 2. Solve

### 2-1. Select the button element on the page

```js
const buttonElem = document.getElementById("button");
```

### 2-2. Query descendent HTML elements

```js
const buttonElem = document.querySelector("#wrapper button");
const inputElem = document.querySelector("#wrapper input");
```

### 2-3. Select multiple HTML elements

```js
document.querySelectorAll("#list li");
```
