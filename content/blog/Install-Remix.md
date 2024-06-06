---
external: false
title: "Install Remix"
tag: [Remix, Typescript]
date : 2024-01-17
---

해당 글에서는 Remix란 무엇인지, 그리고 Remix 설치 방법에 대해 소개하겠습니다.

## 1. Why use Remix?

React와 TypeScript를 이용한 문서 뷰어를 만들고 싶어 보일러 플레이트(boilerplate) 코드를 작성해주는 create-react-app 명령어를 실행했더니 2023년 초부터 create-react-app이 유지보수되지 않으니 권장하지 않는다는 알림이 표시됨과 동시에 babel이 빠져있는 등 여러가지 설치해야하는 절차가 많아져 Remix와 React, Typescript를 사용해서 문서뷰어를 만들어보고자 알아보게 되었습니다.

## 2. What is Remix?

Remix는 사용자 인터페이스에 집중하고 웹 표준을 통해 작업하여 빠르고 원활하며 탄력적인 사용자 경험을 제공할 수 있는 리액트 기반의 풀스택 웹 프레임워크입니다.  
React Router 위에 구축된 Remix는 컴파일러, 서버측 HTTP 핸들러, 서버 프레임워크, 브라우저 프레임워크 이렇게 4가지 기능들을 제공합니다.

## 3. How to Start?

Remix를 사용하는 방법은 다음과 같습니다.

### 3-1. Using create-remix CLI

터미널에 다음과 같이 작성하고 실행한 뒤 터미널 창에 나오는 옵션들을 순차적으로 선택해주시면 됩니다.

```bash
npx create-remix
```

### 3-2. Configuring a Basic Remix App Without Using CLI

먼저 폴더를 생성합니다.

```bash
mkdir my-remix-app
```

이제 폴더로 이동하여 사용자의 입력 없이 기본값으로 설정된 package.json을 생성합니다.

```bash
cd my-remix-app # my-remix-app이라는 폴더로 이동
npm init -y # Node.js 프로젝트를 초기화하기 위해 사용되는 npm 명령
```

remix와 관련된 dependency들도 설치해줍니다.

```bash
npm i @remix-run/node @remix-run/react @remix-run/serve isbot@4 react react-dom
npm i -D @remix-run/dev
```

이제 전체 앱의 루트 레이아웃을 만들어보겠습니다.  
터미널에 다음과 같이 입력하고 app/root.jsx에 다음 코드를 작성해줍니다.

```bash
mkdir app # app이라는 폴더 생성
touch app/root.jsx # app 폴더 안에 root.jsx 파일 생성
```

```js
import {
  Links,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";

export default function App() {
  return (
    <html>
      <head>
        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Hello world!</h1>
        <Outlet />

        <Scripts />
      </body>
    </html>
  );
}
```

이제 프로젝트를 빌드하기 위한 준비 과정을 진행하겠습니다.  
먼저 현재까지 작성된 프로젝트에서 터미널에 다음과 같이 명령어를 작성해줍니다.  

```bash
npx remix build # package.json 파일에서 정의해 놓은 build 명령어를 사용하면 됩니다.
```

작성 후 실행하시면 앱의 서버 버전에 해당하는 build 폴더와 브라우저 버전에 해당하는 public/build 폴더가 생성되는 것을 확인하실 수 있습니다.  
이제 앱을 실행하기 위해 package.json에서 다음과 같이 추가해줍니다.

```json
"type": "module"
```

이제 앱을 실행할 수 있습니다.

```bash
npx remix-serve build/index.js # package.json에서 정의한 start 명령어를 사용하면 됩니다.
```

이제 default적인 구성은 끝이 났고 추후 필요하신 라이브러리를 설치하시면 됩니다.

## 4. Reference

- [Remix Docs](https://remix.run/docs/en/main/)
