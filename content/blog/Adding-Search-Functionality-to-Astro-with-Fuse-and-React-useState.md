---
external: false
title: "Adding Search Functionality to Astro with Fuse and React useState"
tag: [Astro, React, Fuse]
date : 2024-01-07
---

이번 글에서는 블로그에 검색 기능이 필요한 이유와 기능을 구현하는 방법에 대해 알아보겠습니다.

## 1. Need for Search Functionality

기존 블로그에서는 처음에 전체 게시글 목록을 보여주고 태그 목록에서 태그를 누르면 해당하는 태그를 포함하고 있는 게시글 목록을 보여주도록 하고 있었습니다.
이와 별개로 글의 제목이나 태그에서 사용자가 입력한 글자가 존재하는 글들을 검색하는 검색 기능을 추가해보고자 하였습니다.  

블로그에 검색 기능이 필요한 이유는 다음과 같습니다.  

1. `사용자 경험 향상`: 블로그는 다양한 주제에 대한 글을 포함하고 있어 독자들이 원하는 특정 정보나 주제를 빠르게 찾을 수 있다는 장점이 있습니다.
2. `시간 절약`: 블로그에 존재하는 글이 적다면 검색 기능이 그다지 매력적이지 않을 수 있습니다. 하지만 블로그에 글을 적다보면 글의 양이 자연스럽게 많아지기 때문에 검색 기능이 없다면 사용자가 원하는 정보를 오랫동안 찾아야 하는 번거로움이 생기게 됩니다.
3. `유용한 콘텐츠 재발견`: 이전에 작성한 글이나 특정 주제에 대한 글을 다시 찾아보고자 할 때 유용합니다.

## 2. Fuse.js

Fuse.js는 강력하면서 가벼운 퍼지 검색(Fuzzy Search) 라이브러리로, 어떠한 의존성도 필요로 하지 않으며 무엇보다 무료입니다.  

### 2-1. Fuzzy Search

퍼지 검색은 특정 패턴과 대략적으로 동일한 문자열을 찾는 기술로, 철자가 틀려도 관련 결과를 찾을 수 있도록 도와줍니다.  
검색어와 색인 내의 단어 간의 유사도 정도는 다음의 공식을 사용하여 결정됩니다.  

```textile
similarity = 1 - (edit_distance / min (len(term), len(word)))
```

검색어와 인덱싱된 단어 간의 편집 거리는 `레벤슈타인 거리(Levenshtein Distance)`를 사용하여 계산됩니다.  
min() 함수는 검색어와 인덱싱된 단어의 길이를 반환하는 len() 함수의 두 값 중 작은 값을 반환합니다.  

#### 2-1-1. Levenshtein Distance

러시아 수학자 Vladimir Levenshtein(1935-2017)이 1965년에 개발한 것에서 이름을 따온 레벤슈타인 거리는 한 문자열을 다른 문자열로 변경하는 데 필요한 최소한의 문자 편집 횟수를 나타냅니다. 가능한 편집은 삽입(문자열 A에 문자 추가), 삭제(문자열 A에서 문자 제거), 대체(문자열 A의 문자를 다른 문자로 교체)입니다.  

> 문자열 A가 "kitten"이고 문자열 B가 "sitting"으로 변환되어야 하는 경우,  

1. kitten → sitten ("k"를 "s"로 대체)
2. sitten → sittin ("e"를 "i"로 대체)
3. sittin → sitting (끝에 "g"를 삽입)

위와 같은 작업 과정이 필요하기 때문에 Levenshtein 거리는 3이 됩니다.

만약 대체의 비용을 1로, 삭제 또는 삽입의 비용을 0.5로 설정한 두 단어 간의 편집 거리 행렬은 다음 이미지에서 보이는 바와 같습니다.

![Levenshtein Distance 1](/images/video/Levenshtein_distance_animation.gif)

> str1 = "GEEXSFRGEEKKS"이고 str2 = "GEEKSFORGEEKS"이고 str1을 str2로 변환해야 하는 경우

1. GEEXSFRGEEKKS → GEEKSFRGEEKKS ("X"를 "K"로 대체)
2. GEEKSFRGEEKKS → GEEKSFORGEEKKS ("F"와 "R" 사이에 "O"를 삽입)
3. GEEKSFORGEEKKS → GEEKSFORGEEKS (두 번째에서 마지막 문자 "K"를 제거)

위와 같은 작업 과정이 필요하기 때문에 Levenshtein 거리는 3이 됩니다.  
위의 작업 과정을 그림으로 나타내면 다음과 같습니다.

![Levenshtein Distance 2](/images/Levenshtein_Distance.png)

### 2-2. When to Utilize Fuse.js?

1. 작거나 중간 크기의 데이터 집합에 대한 클라이언트 측 퍼지 검색이 필요한 경우
2. 검색 처리를 위해 전용 백엔드를 설정하는 것이 정당화되지 않는 경우

위에서 언급된 2가지 경우에 검색 요구 사항이 해당한다면 Fuse.js를 사용하는 것이 바람직할 수 있습니다.

## 3. React.useState()

검색을 input 태그로 받을 것이기 때문에 input 태그에 담기는 검색 문자열의 상태를 저장하기 위하여 React.js에서 사용되는 useState hook을 사용합니다.  
useState hook은 함수형 컴포넌트에서 상태를 관리할 수 있도록 도와주는 기능을 합니다.  
다음은 `useState hook`을 사용하여 input 태그의 문자열 상태를 저장하는 간단한 예제 코드입니다.

```js
import React, { useState } from 'react';

function InputExample() {
  // input의 상태를 저장하는 변수와 해당 상태를 업데이트하는 함수를 생성
  const [inputValue, setInputValue] = useState('');

  // input 값이 변경될 때 호출되는 함수
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <label>
        Type something:
        {/* input 태그에 상태를 연결하고 값이 변경될 때마다 handleInputChange 함수 호출 */}
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>

      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default InputExample;
```

만약 위의 코드를 tsx로 정의하고 싶다면 다음과 같습니다.

```ts
import React, { useState, ChangeEvent } from 'react';

function InputExample() {
  // input의 상태를 저장하는 변수와 해당 상태를 업데이트하는 함수를 생성
  const [inputValue, setInputValue] = useState<string>('');

  // input 값이 변경될 때 호출되는 함수
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <label>
        Type something:
        {/* input 태그에 상태를 연결하고 값이 변경될 때마다 handleInputChange 함수 호출 */}
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>

      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default InputExample;
```

변경 사항은 다음과 같습니다.

1. `import React, { useState, ChangeEvent } from 'react';`에서 ChangeEvent를 가져와야 합니다.
2. `const [inputValue, setInputValue] = useState<string>('');`에서 inputValue의 타입을 명시적으로 string으로 지정합니다.
3. `const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {...}`에서 event 매개변수의 타입을 `ChangeEvent<HTMLInputElement>`으로 지정합니다.

## 4. Adding Search Function

먼저 필요한 라이브러리를 설치해줍니다.

```bash
npx astro add react
npm i --save fuse.js
```

만약 위의 명령어로 설치되지 않는다면 다음과 같이 `package.json`에 추가해줍니다.

```json
{
  ...,
  "dependencies": {
    "@types/react": "^18.0.26",
    "@types/react-dom": "^18.0.10",
    "fuse.js": "^6.6.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
  }
}
```

`package.json`에 추가하였다면 다음 명령어를 통해 설치를 진행합니다.

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

이제 검색 컴포넌트를 코드로 구현해줍니다. `src/components`에 `Search.jsx`이라는 파일을 생성해주고 다음과 같이 입력합니다.

```jsx
import Fuse from "fuse.js";
import { useState } from "react";

// 검색 옵션 설정
const options = {
  keys: ["frontmatter.title", "frontmatter.tag"],
  includeMatches: true,
  minMatchCharLength: 2,
  threshold: 0.5,
};

function Search({ searchList }) {
  // 검색어 상태와 Fuse 객체 초기화
  const [query, setQuery] = useState("");
  const fuse = new Fuse(searchList, options);

  // 검색 결과 추출
  const posts = fuse
    .search(query)
    .map((result) => result.item);

  // 검색어 변경 핸들러
  function handleOnSearch({ target = {} }) {
    const { value } = target;
    setQuery(value);
  }

  return (
    <div>
      <div className="relative">
        {/* 검색 입력란 */}
        <input
          type="text"
          id="search"
          value={query}
          onChange={handleOnSearch}
          className="block w-full p-4 pl-10 text-xl 
                                    text-gray-900 
                                    border border-gray-300
                                    rounded-lg bg-gray-50
                                    focus:outline-none
                                    focus:ring-blue-500
                                    focus:border-blue-500
                                    rounded-md
          "
          placeholder="Please enter at least 2 characters for your search..."
        />
      </div>

      {/* 검색 결과 메시지 */}
      {query.length > 1 && (
        <div className="my-4">
          Found {posts.length} {posts.length === 1 ? "result" : "results"} for '
          {query}'
        </div>
      )}

      {/* 검색 결과 목록 */}
      <ul className="list-none">
        {posts &&
          posts.map((post) => (
            <li class="grid grid-cols-[1fr] md:grid-cols-[1fr_auto] mb-3 md:gap-2 items-start">
              <div class="title">
                {/* 포스트 제목과 태그 */}
                <a className="unset hover:text-text-link" href={`/blog/${post.slug}`} target="_blank">
                  {post.frontmatter.title}
                </a>
                <p className="text-text-muted text-sm italic pt-1">
                  {post.frontmatter.tag.map((tag, index) => (
                    <span key={index}>
                      #{tag}
                      {index < post.frontmatter.tag.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Search;
```

다음으로 위에서 작성한 검색 컴포넌트에 검색 대상인 포스트 목록을 전달하는 코드를 작성해보겠습니다.  
`src/components`에 `SearchBar.astro`라는 파일을 생성하고 다음과 같이 입력해줍니다.

```astro
---
import { blog } from '../lib/markdoc/frontmatter.schema';
import { readAll } from '../lib/markdoc/read';
import Search from './Search';

// 모든 블로그 포스트를 읽어와서 frontmatter 스키마를 적용하여 저장
const allPosts = await readAll({
  directory: "blog",
  frontmatterSchema: blog,
});

// 초안이 아닌 포스트만 필터링하여 저장
const posts = allPosts.filter(post => (post.frontmatter.draft !== true));
---

// Search 컴포넌트에 검색 대상인 포스트 목록을 전달
<Search client:load searchList={posts}></Search>
```

마지막으로 이 SearchBar를 보여줄 화면을 작성해보겠습니다.  
`src/pages`에 `search.astro`라는 파일을 생성하고 다음과 같이 입력합니다.

```astro
---
import PageLayout from "../layouts/PageLayout.astro";
import SearchBar from "../components/SearchBar.astro";
import PageMeta from "../components/PageMeta.astro";
import { SITE_TITLE } from "../config";
---

<PageLayout>
  {/* 페이지 메타 정보 설정 */}
  <PageMeta title={`Search | ${SITE_TITLE}`} slot="meta" />
  {/* 메인 섹션 시작 */}
  <section slot="main">
    {/* 검색 페이지 제목 */}
    <h2 class="mb-8 text-2xl"><strong>Search</strong></h2>
    {/* 최대 너비를 지정하고 검색 바를 포함하는 컨테이너 */}
    <div class="max-w-3xl mx-auto">
      {/* 검색 바 컴포넌트 */}
      <SearchBar />
    </div>
  </section>
</PageLayout>
```

여기까지 입력하셨다면 검색 기능을 구현하기 위한 모든 준비를 마쳤습니다.  
이제 터미널에 `package.json`에서 설정해놓은 실행 스크립트를 통해 실행을 한 뒤 주소창에 `localhost:{설정한 포트번호}/search` 주소로 이동하면 다음과 같은 화면을 보실 수 있습니다.

![Search screen](/images/video/search_fuse.gif)

### 4-1. Optional Function

구현해놓은 Search 페이지를 보여주는 방법은 여러가지가 있습니다.  
그 중에서 다크모드 토글 옆에 돋보기 아이콘을 추가하고 아이콘을 누르면 해당 페이지로 이동하도록 구현하는 방법에 대해 설명해보겠습니다.  
먼저 사용할 돋보기 아이콘을 검색합니다. 저는 [Font AweSome](https://fontawesome.com/icons)에서 magnifying-glass라는 아이콘을 사용하였습니다.

```html
<!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
</svg>
```

위의 코드를 `src/components/Header.astro`에서 아래와 같이 다크모드 토글의 왼쪽에 해당하는 부분에 추가해줍니다.

```astro
<!-- 기존 코드 -->
<div
    class="justify-self-end flex items-center content-center text-text-bold"
  >
    <svg id="link-svg" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
    </svg>
    <DarkModeToggle />
  </div>
<!-- 기존 코드 -->
```

다음으로 해당 아이콘을 누르면 검색 페이지로 이동하는 함수를 작성하겠습니다.

```astro
<script>
  document.addEventListener('DOMContentLoaded', function() {
    var svgElement = document.getElementById('link-svg');
    if (svgElement) {
      svgElement.addEventListener('click', function() {
        var destinationLink = '/search';
        window.location.href = destinationLink;
      });
    }
  });
</script>
```

위의 코드를 하나하나 살펴보겠습니다.

```js
document.addEventListener('DOMContentLoaded', function() {
```

DOMContentLoaded 이벤트 리스너는 문서의 DOM 콘텐츠가 완전히 로드되면 실행됩니다. 이렇게 하면 페이지의 모든 HTML, CSS, 이미지 등의 리소스가 다운로드되고 파싱된 후에 스크립트가 실행됩니다.  

```js
var svgElement = document.getElementById('link-svg');
```

link-svg라는 아이디를 가진 SVG 요소를 찾습니다. 해당 요소가 존재하면 다음 단계로 이동합니다.

```js
if (svgElement) {
  svgElement.addEventListener('click', function() {
    var destinationLink = '/search';
    window.location.href = destinationLink;
  });
}
```

link-svg 요소가 존재하는 경우, 해당 SVG 요소에 클릭 이벤트 리스너를 추가합니다. svg 요소 클릭 시 새로운 URL인 /search로 페이지를 리다이렉트함으로써 SVG 요소가 클릭되었을 때 특정한 페이지로 이동하게 됩니다.  
이렇게 해서 돋보기 아이콘을 추가한 Header.astro의 전체 코드는 다음과 같습니다.

```astro
---
import HeaderLink from "./HeaderLink.astro";
import DarkModeToggle from "./DarkModeToggle.astro";
---

<script>
  document.addEventListener('DOMContentLoaded', function() {
    var svgElement = document.getElementById('link-svg');
    if (svgElement) {
      svgElement.addEventListener('click', function() {
        var destinationLink = '/search';
        window.location.href = destinationLink;
      });
    }
  });
</script>

<header>
  <a 
    class="unset absolute z-10 left-[50%] -top-[100rem] translate-x-[-50%] bg-white text-black px-8 py-2 focus:top-[initial]" 
    href="#main"
  >
    Skip to content
  </a>
  <nav>
    <section class="text-text-bold">
      <ul class="unset flex gap-4 [&>li]:p-0">
        <li><HeaderLink href="/">Home</HeaderLink></li>
        <li><HeaderLink href="/blog">Blog</HeaderLink></li>
        <li><HeaderLink href="/projects">Projects</HeaderLink></li>
      </ul>
    </section>
  </nav>
  <div
    class="justify-self-end flex items-center content-center text-text-bold"
  >
    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
    </svg>
    <DarkModeToggle />
  </div>
</header>
<style>
  header {
    grid-area: header;
    display: grid;
    align-items: center;
    grid-template-columns: minmax(0, 1fr) minmax(0, max-content);
  }
</style>
```

다시 실행 후 다크모드 토글 옆의 아이콘을 클릭 시 검색 페이지로 이동하는 것을 확인할 수 있습니다.

![Go to Search Page](/images/video/search_icon_move.gif)

이제 다크모드 토글 시 svg 아이콘의 색상을 반전시키는 방법에 대해 알아보겠습니다.  
svg 아이콘에 id를 추가하고 해당 id를 통해 다크모드 시의 css를 지정합니다.

```astro
<svg id="link-svg" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
</svg>
```

```css
.dark #link-svg {
  stroke: #000;
  fill: #fff;
}
```

이제 실행해보면 다음과 같이 다크모드일 때는 흰색 돋보기가, 그렇지 않을 때는 검은색 돋보기가 나오는 것을 확인할 수 있습니다.

![Search Icon Dark Mode](/images/video/search_icon_dark_mode.gif)

## 5. Reference

- [Fuse.js](https://www.fusejs.io/)
- [React - Hooks](https://react.dev/reference/react/hooks#state-hooks)
- [Fuzzy searches](https://www.ibm.com/docs/en/informix-servers/12.10?topic=modifiers-fuzzy-searches)
- [Levenshtein_distance](https://en.wikipedia.org/wiki/Levenshtein_distance)
- [How to Create an Astro Search component](https://danidiaztech.com/create-astro-search-component/)
- [Font AweSome](https://fontawesome.com/)
