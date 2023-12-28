---
external: false
title : "CRA and Manifest"
date: 2022-10-21
---

> cmd에서 `node -V` 명령어를 통해 버전 출력이 확인되는 것을 전제로 작성하였다.
> 출력이 안 된다면 [여기](https://nodejs.org/en)를 클릭해서 LTS 버전을 다운받으면 된다.

## 1. CRA (Create-React-App) 구조

`npx create-react-app 폴더명 --template typescript`를 통해 TypeScript라는 언어로 react 프로젝트를 실행할 수 있다.
위의 명령어로 설치하게 되면 다음과 같은 구조가 나오게 된다.
![create-react-app_structure](/images/create-react-app_structure.png)
이러한 구조를 CRA(Create-React-App) 구조라고 부른다.

## 2. Manifest.json

- 컴퓨팅에서 집합의 일부 또는 논리정연한 단위인 파일들의 그룹을 위한 메타데이터를 포함하는 파일
- 배경색은 어떠한 색인지, 앱의 이름은 무엇인지, 홈스크린 화면에 추가할 때 아이콘은 어떤 것인지 등의 정보를 내포
- create-react-app 구조의 public 폴더에 위치

## 3. 리액트에서의 manifest 에러

리액트로 프로젝트를 진행할 때 `yarn start`나 `npm start`를 하게 되면 'Manifest: Line: 1, column: 1, Syntax error.'라는 에러를 만날 때가 있다.
이 경우 진행하고 있는 프로젝트에서 `index.html`에서 manifest가 정의된 위치를 찾아 rel 부분을 rel="manifest"에서 "/manifest"로 변경해주면 해결된다.

## 4. Reference

- [CRA (create-react-app) 시작하기](https://velog.io/@kwonh/React-CRA-create-react-app-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0)
- [Manifest file](https://en.wikipedia.org/wiki/Manifest_file)
- [React Error - Manifest: Line: 1, column: 1, Syntax error](https://anerim.tistory.com/209)
