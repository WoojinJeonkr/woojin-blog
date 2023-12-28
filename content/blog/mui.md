---
external: false
title : "Material-UI"
date: 2022-10-14
---

## 1. Material-UI란?

- Google의 Material Design 시스템 구현을 특징으로 하는 포괄적인 오픈 소스 React 구성 요소 라이브러리   
- 디자인이 아름답고 구성 요소 위에 사용자 정의 디자인 시스템을 쉽게 구현할 수 있는 사용자 정의 옵션 모음을 제공

## 2. 장점

- 빠른 로딩
- 디자인적으로 뛰어남
- 직관적인 사용자 정의 기능의 광범위한 세트 포함
- 백엔드 개발자와 덜 기술적인 디자이너의 진입 장벽을 줄여 팀이 보다 효과적으로 협업할 수 있도록 도와줌
- React 생태계에서 가장 큰 UI 커뮤니티 보유

## 3. 설치

### 3-1. 요구사항

```textile
React : v16.8.0 ~
TypeScript : v3.2 ~
```

### 3-2. 설치

```bash
yarn add @mui/material @mui/styled-engine-sc
```

## 4. @material-ui/core와 @mui/material의 차이

yarn으로 mui를 설치하려고 하는 경우 `yarn add @material-ui/core`와 `yarn add @mui/material`로 설치하는 2가지 방법을 볼 수 있다.
두 방법 모두 mui를 설치할 수 있지만 최신 버전이 적용된 mui는 2번째 방법인 `yarn add @mui/material`이다.
MUI v4였던 시절에서 MUI v5로 넘어오면서 `@material-ui/`에서 `@mui/`로 바뀌었다.

## 5. 참고 자료

- ['@mui/material'](https://yarnpkg.com/package/@mui/material)
- ['@material-ui/core'](https://yarnpkg.com/package/@material-ui/core#readme)
- [Material UI - Overview](https://mui.com/material-ui/getting-started/overview/)
- [MUI v4에서 v5로 이사 준비](https://dev.classmethod.jp/articles/prepare-to-move-mui-v4-to-v5/)
