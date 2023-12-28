---
external: false
title : "Sementic UI"
date: 2022-10-31
---

## 1. Install

Semantic UI React는 React 구성 요소를 제공하고 Semantic UI는 CSS 스타일시트로 테마를 제공한다.

### 1-1. yarn/npm

yarn이나 npm을 사용해서 설치할 수 있다.

```bash
yarn add semantic-ui-react semantic-ui-css
npm install semantic-ui-react semantic-ui-css
```

설치 후 `import semantic-ui-css/semantic.min.css`를 통해 CSS를 가져온다.

- 요구 조건 : Semantic UI >=2.3.x의 테마에는 Semantic UI React >=0.81.0이 필요하다.

Semantic UI CSS 패키지는 기본 Semantic UI 저장소와 자동으로 동기화되어 Semantic UI의 경량 CSS 전용 버전을 제공한다.
TypeScript를 사용하는 경우 패키지에 타이핑이 포함되어 있으므로 아무것도 설치할 필요가 없다.

### 1-2. CDN

CDN을 통해 패키지를 설치하지 않고 가져오는 방법도 있다.

```html
<link
    async
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
  />
  <script src="https://cdn.jsdelivr.net/npm/semantic-ui-react/dist/umd/semantic-ui-react.min.js"></script>
```

## 2. Example

{% codepen url="https://codepen.io/calomys/full/WNyQqNz" title="Sementic-UI-3max-dropdown" /%}

## 3. Reference

- [Sementic-ui > Get Started](https://react.semantic-ui.com/usage)
- [Sementic-ui > Dropdown](https://react.semantic-ui.com/modules/dropdown/)
- [Semantic UI Multiple Dropdown](https://codepen.io/alexproca/pen/RaKLXm)
