---
external: false
title : "html react parser"
description : What is html-react-parser library?
date: 2022-11-05
---

## 1. html-react-parser란?

HTML을 React 문법인 jsx로 변환해주는 라이브러리이다.

### 1-1. 설치

#### 1-1-1. npm

```bash
npm install html-react-parser --save
```

#### 1-1-2. yarn

```bash
yarn add html-react-parser
```

#### 1-1-3. CDN

```html
<!-- HTMLReactParser depends on React -->
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/html-react-parser@latest/dist/html-react-parser.min.js"></script>
<script>
  window.HTMLReactParser(/* string */);
</script>
```

### 1-2. 사용

```ts
const parse = require('html-react-parser');
parse('<p>Hello, World!</p>'); // React.createElement('p', {}, 'Hello, World!')
```

## 2. html-react-parser를 이용한 카드 뒤집기 게임

{% codepen url="https://codepen.io/calomys/full/WNyGvaQ" title="html-react-parser card game" /%}

## 3. Reference

- [html-react-parser - npm](https://www.npmjs.com/package/html-react-parser)
- [Paulina Hetman > Embed pen with React - html react parser](https://codepen.io/pehaa/pen/jOPNRMJ)
