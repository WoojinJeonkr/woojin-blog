---
external: false
title: "Create Recent Post Feature"
date: 2023-12-30
---

## 1. Purpose

Home 페이지에서 가장 최근에 작성한 게시글 3개를 보여주고 게시글의 제목을 클릭 시 해당 게시글로 이동하도록 작성합니다.

## 2. Method

`src/pages`에 `recent-page.astro`라는 파일을 생성해주고 아래와 같이 입력합니다.

```astro
---
import { readAll } from "../lib/markdoc/read";
import { blog } from "../lib/markdoc/frontmatter.schema";

// "blog" 디렉토리에 있는 모든 게시물을 읽어옵니다.
// 각 게시물의 frontmatter는 blog 스키마를 따라야 합니다.
const posts = await readAll({
  directory: "blog",
  frontmatterSchema: blog,
});

// 게시물을 필터링하여 드래프트(draft)가 아닌 것들을 선택하고, 날짜를 기준으로 내림차순으로 정렬합니다.
const sortedPosts = posts
  .filter((p) => p.frontmatter.draft !== true)
  .sort(
    (a, b) =>
      new Date(b.frontmatter.date).valueOf() -
      new Date(a.frontmatter.date).valueOf()
  );

// 최근 3개의 게시물을 선택합니다.
const recentPosts = sortedPosts.slice(0, 3);
---

// 최근 게시물 목록을 표시하는 리스트를 생성합니다.
<ul class="list-none">
  {recentPosts.map((post) => {
    return (
      // 각 게시물에 대한 리스트 아이템을 생성합니다.
      <li class="mb-4" :key={post.slug}>
        {/* 외부 링크인 경우 post.frontmatter.url을 사용하고, 내부 링크인 경우 '/blog/${post.slug}'를 사용합니다. */}
        <a
          href={post.frontmatter.external ? post.frontmatter.url : `/blog/${post.slug}`}
          class="text-text-link hover:underline"
        >
          {/* 게시물의 제목을 표시합니다. */}
          <h4 class="text-x2 font-bold mb-4">{post.frontmatter.title}</h4>
        </a>
      </li>
    );
  })}
</ul>
```

### 2-1. import Section

```astro
import { readAll } from "../lib/markdoc/read";
import { blog } from "../lib/markdoc/frontmatter.schema";
```

코드에서 블로그 게시물을 읽고 처리하는 데 필요한 기능을 외부 모듈로 분리하고 재사용성을 높이기 위해 `../lib/markdoc/read` 모듈에서 readAll 함수를, `../lib/markdoc/frontmatter.schema` 모듈에서 blog 스키마를 import합니다.

### 2-2. Select Post

```astro
const posts = await readAll({
  directory: "blog",
  frontmatterSchema: blog,
});
```

"blog" 디렉토리에 있는 모든 게시물을 읽어옵니다. 각 게시물의 frontmatter는 blog 스키마를 따라야 합니다.

```astro
const sortedPosts = posts
  .filter((p) => p.frontmatter.draft !== true)
  .sort(
    (a, b) =>
      new Date(b.frontmatter.date).valueOf() -
      new Date(a.frontmatter.date).valueOf()
  );
```

읽어온 게시물을 필터링하여 게시물의 상태가 draft가 아닌 것들을 선택하고, 날짜를 기준으로 내림차순으로 정렬합니다.

```astro
const recentPosts = sortedPosts.slice(0, 3);
```

필터링되어 내림차순된 게시물들 중 최근의 게시물을 3개 선택합니다.

### 2-3. Display Post in List Format

```astro
// 최근 게시물 목록을 표시하는 리스트를 생성합니다.
<ul class="list-none">
  {recentPosts.map((post) => {
    return (
      // 각 게시물에 대한 리스트 아이템을 생성합니다.
      <li class="mb-4" :key={post.slug}>
        {/* 외부 링크인 경우 post.frontmatter.url을 사용하고, 내부 링크인 경우 '/blog/${post.slug}'를 사용합니다. */}
        <a
          href={post.frontmatter.external ? post.frontmatter.url : `/blog/${post.slug}`}
          class="text-text-link hover:underline"
        >
          {/* 게시물의 제목을 표시합니다. */}
          <h4 class="text-x2 font-bold mb-4">{post.frontmatter.title}</h4>
        </a>
      </li>
    );
  })}
</ul>
```

위의 코드에서는 리스트 형식으로 게시물의 제목을 표시하도록 구성했습니다.  
만약 게시물의 날짜를 표시하고 싶다면 다음과 같이 작성하여 원하는 위치에 삽입하면 됩니다.

```astro
<div class="text-text-muted text-sm italic pt-1">
  <time datetime={post.frontmatter.date.toISOString()}>
    {formattedDate}
  </time>
</div>
```

### 2-4. recent-post.astro

전체적인 코드는 다음과 같습니다.

```astro
---
import { readAll } from "../lib/markdoc/read";
import { blog } from "../lib/markdoc/frontmatter.schema";

const posts = await readAll({
  directory: "blog",
  frontmatterSchema: blog,
});

const sortedPosts = posts
  .filter((p) => p.frontmatter.draft !== true)
  .sort(
    (a, b) =>
      new Date(b.frontmatter.date).valueOf() -
      new Date(a.frontmatter.date).valueOf()
  );

const recentPosts = sortedPosts.slice(0, 3);
---

<ul class="list-none">
  {recentPosts.map((post) => {
    return (
      <li class="mb-4" :key={post.slug}>
        <a
          href={post.frontmatter.external ? post.frontmatter.url : `/blog/${post.slug}`}
          class="text-text-link hover:underline"
        >
          <h4 class="text-x2 font-bold mb-4">{post.frontmatter.title}</h4>
        </a>
      </li>
    );
  })}
</ul>
```

## 3. Usage

`src/components/AboutTheTheme.astro`에서 상위 디렉토리의 pages 폴더 안에 위치한 recent-page.astro 모듈을 가져와서 RecentPost 변수에 할당해줍니다.

```astro
import RecentPost from "../pages/recent-page.astro"; 
```

이제, `Recent Post`라는 제목을 가진 `텍스트 크기는 중간 크기(text-xl), 굵게(font-bold), 하단 마진은 4 (mb-4)`으로 지정한 `<h2>` 태그를 생성하고, RecentPost 변수에 할당된 recent-page.astro 모듈을 통해, 해당 모듈이 내보내는 컴포넌트 또는 기능을 사용하여 화면에 출력합니다.

```astro
<h2 class="text-xl font-bold mb-4">Recent Post</h2>
<RecentPost />
```

### 3-1. AboutTheTheme.astro

전체 코드는 다음과 같습니다.

```astro
---
import RecentPost from "../pages/recent-page.astro"; 
---

<div>
  <p>
    <h2 class="text-xl font-bold mb-4">Recent Post</h2>
    <RecentPost />
  </p>
</div>
```
