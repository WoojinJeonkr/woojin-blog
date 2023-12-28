---
external: false
title: "Creating Personal Blog Using Blogster Newspaper Theme"
description: "Let's create blog using Blogster Newspaper theme, one of the Astro themes."
date: 2023-12-28
---

기존의 Jekyll theme에서 벗어나 새로운 theme를 사용해보고 싶던 와중에 Astro라는 웹 프레임워크를 통해서 github blog를 만들 수 있다는 글을 읽고 theme를 바꿔보기로 하였습니다.  
[Astro Theme](https://astro.build/themes/)에서 무료 테마를 탐색하던 중 blogster-newspaper 테마의 Live Demo를 보고 깔끔하다고 생각하여 적용해보았습니다.

## 1. What is Astro?

Astro는 블로그, 마케팅, 전자상거래 등 콘텐츠 중심 웹사이트를 구축하기 위한 목적으로 설계되었으며 JavaScript 오버헤드(성능에 부정적인 영향을 미치는 추가적인 작업이나 비용)와 복잡성을 줄이기 위해 만들어진 웹 프레임워크입니다.

### 1-1. Feature

1. 아일랜드 아키텍쳐: 콘텐츠 중심 웹사이트에 최적화된 컴포넌트 기반 웹 아키텍쳐로 모놀리식 JavaScript 패턴을 피하고 페이지에서 필수적이지 않은 모든 JavaScript를 자동으로 제거하는데 도움을 줌으로써 더 나은 Frontend 성능을 제공합니다.
2. 공식 UI 프레임워크 통합: React, Preact, Svelte, Vue, Solid, Lit, HTMX, 웹 컴포넌트 등을 지원합니다.
3. 서버 우선: Astro에서는 대부분의 프로세스가 브라우저가 아닌 서버에서 발생합니다. 이는 일반적으로 성능이 낮은 장치나 느린 인터넷 연결에서 클라이언트 측 렌더링보다 사이트나 앱을 더 빠르게 만듭니다.
4. JavaScript 최소화: 모든 내용이 최종 페이지에서 사용자 브라우저로 전송되기 전에 JavaScript로 추가되지 않아 성능이 향상됩니다.
5. 콘텐츠 컬렉션: Markdown 콘텐츠에 대한 TypeScript 타입 안전성을 구성, 검증 및 제공합니다.
6. 사용자 정의 가능: Tailwind, MDX 등 수백 가지 통합을 제공합니다.

## 2. blogster-newspaper

[blogster-newspaper](https://astro.build/themes/details/blogster-newspaper/)는 [Tailwind](https://tailwindcss.com/)로 구축된 Astro Theme입니다.

### 2-1. Demo

[여기](https://blogster-newspaper.netlify.app/)에서 라이브 데모를 확인하실 수 있습니다.

### 2-2. Feature

1. 다크 모드 제공: 수동 토글이 있는 자동 다크 모드를 제공합니다. 페이지 상단의 토글 버튼을 누르고 라이트 모드에서 다크 모드, 다크 모드에서 라이트 모드로 전환이 가능합니다.
2. 완벽한 [lighthouse](https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=ko) 점수: 해당 테마는 lighthouse에서 [측정 결과](https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fblogster-newspaper.netlify.app%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext)에서 보이는 바와 같이 전반적으로 100점을 얻었습니다.
3. Markdoc을 이용한 확장된 Markdown 제공: Markdwon(.md) 파일에서 Youtube Embed, Twitter Embed와 같은 타입 안전성을 갖춘 사용자 정의 컴포넌트가 사용 가능합니다.
4. RSS 피드 내장: SEO 등을 위한 RSS 피드가 내장되어 있습니다.

### 2-3. 설치 방법

설치하고자 하는 위치에서 터미널을 열고, 아래의 명령어를 입력하면 됩니다.

```bash
npx create-blogster@latest --theme newspaper
```

입력 후 실행하셨다면 아래와 같은 문장을 보실 수 있습니다.

```bash
✨ You're about to generate a Blogster blog.

? What directory should your blog be generated into? >>
```

이제 저 `>>` 옆에 커서가 깜빡거릴텐데 저곳에는 만들고자 하는 폴더 이름을 적어주신 뒤 Enter를 누르시면 자동으로 파일이 다운받아집니다.  
모두 다운받으셨다면 터미널 창에 아래의 명령어를 입력하신 뒤 실행하시면 로컬 환경에서 Demo와 같은 화면을 띄울 수 있습니다.

```bash
npm run dev
```

## 3. 세부 사항 변경

### 3-1. Home 화면 제목 변경

`src/config.ts`로 이동하셔서 `{여기에 제목 작성}`이라고 적힌 부분을 지워주시고 작성하고자 하는 제목을 작성해주시면 됩니다.

```ts
export const SITE_TITLE = "{여기에 제목 작성}";
```

### 3-2. Codepen Embed 설정 변경

기존의 Codepen Embed 설정에는 hash 값을 고정으로 입력해두어 설정을 변경하지 않는다면 Demo에서 미리 작성되어 있던 글에서 보여지는 Codepen 코드가 보여지는 것을 확인할 수 있습니다.

`src/components/CodePenEmbed.astro`로 이동하시면 다음과 같은 코드를 확인하실 수 있습니다.

```astro
---
type Props = {
  url: string;
  title: string;
};

const { url, title } = Astro.props;
---

<p
  class="codepen"
  data-height="300"
  data-default-tab="html,result"
  data-slug-hash="eYJqjgq"
  data-user="ruphaa"
  style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
>
  <span><a href={url}>{title}</a></span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"
></script>
```

위에 있는 코드를 아래와 같이 수정해줍니다.

```astro
---
type Props = {
  url: string;
  title: string;
};

const { url, title } = Astro.props;
const hash = url.split('/').pop();
---

<p
  class="codepen"
  data-height="300"
  data-default-tab="html,result"
  data-slug-hash="{hash}"
  data-user="{data-user}"
  style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
>
  <span><a href={url}>{title}</a></span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"
></script>
```

위의 코드에서 `{data-user}` 부분에는 CodePen에 본인 계정으로 접속 후 Profile에서 보이는 @ 뒤의 영어를 작성해주시면 됩니다.  
작성하실 마크다운 파일에서는 [Guide](https://github.com/flexdinesh/blogster/blob/main/templates/newspaper/content/blog/extended-markdown-style-guide.md?plain=1)와 같이 사용하실 수 있습니다.  
주소로 이동하셔서 CodePen 항목에서 작성한 것과 동일하게 작성해주시면 됩니다.

### 3-3. 이미지 경로 작성

이미지 경로를 작성하실 때에는 기존의 마크다운에서 작성하는 이미지 문법으로 작성하되 경로를 image 폴더부터 시작되게 작성해주시면 됩니다.  
예를 들어 public 폴더 안 image 폴더 안에 weather라는 폴더 안에 today.png라는 이미지가 있다면 `/public/iamge/weather/today.png`가 아닌 `/image/weather/today.png` 이런 형식으로 작성해주시면 됩니다.

## 4. Reference

- [Astro Document](https://docs.astro.build/en/getting-started/)
- [Astro Theme](https://astro.build/themes/)
- [flexdinesh blogster Repository](https://github.com/flexdinesh/blogster)
