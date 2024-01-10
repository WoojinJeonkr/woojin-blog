---
external: false
title: "Learn about SVG"
description: "We will learn about the definition, structure, and usage of SVG."
tag: [CS, Astro]
date: 2024-01-10
---

이번 글에서는 SVG의 정의와 구조, 그리고 사용 방법에 대해 알아보겠습니다.

## 1. What is SVG(Scalable Vector Graphics)?

SVG는 2차원 벡터 그래픽을 표현하기 위한 XML 기반의 파일 형식으로, 1999년 W3C(World Wide Web Consortium)의 주도하에 개발된 오픈 표준의 벡터 그래픽 파일 형식입니다.  
현재 마이크로소프트의 인터넷 익스플로러 8 및 이전 버전을 제외한 대부분의 주요 웹 브라우저들은 SVG를 지원합니다. 인터넷 익스플로러 8 및 이전 버전에서는 SVG 파일을 보기 위해 별도의 플러그인을 수동으로 설치하여야 하며, 그렇지 않은 경우에는 웹 페이지 제작자가 구글 코드에서 개발중인 자바스크립트 라이브러리, SVG Web을 웹 페이지 코드에 포함시켜야 합니다.

## 2. Feature

1. XML로 기술하므로 웹 브라우저 상에서 열람할 수 있고 문서 편집기 등에서 편집할 수 있습니다.
2. 하이퍼링크를 이미지에 걸거나, 자바스크립트 등과 연동시킬 수도 있습니다.
3. 명령어나 수학적인 문장의 연속을 사용하여 2차원 또는 3차원 공간에 선과 형상을 배치하는 컴퓨터 이미지(벡터 그래픽스)이므로 확대나 축소를 해도 화질에는 변화가 없습니다.

## 3. Difference between Bitmap and Vector image

이미지 파일에는 벡터 이미지와 비트맵 이미지라는 두 가지 주요 유형이 있습니다. 벡터는 일반적으로 .SVG 및 .AI 파일 형식인 반면, 비트맵 이미지는 .JPG, .GIF, .PNG 등의 파일 형식을 가집니다.  
비트맵 이미지는 픽셀로 구성되는 반면 벡터 파일은 방정식으로 설명되는 선으로 구성되어 비트맵 이미지를 확대하면 픽셀이 더 크게 나타나면서 이미지가 흐릿하고 선명하지 않게 보이게 되는 반면, 벡터 파일은 부드럽고 선명하게 유지됩니다.  

![vector vs bitmapped](/images/vector_bitmap.jpg)

## 4. Structure

다음은 Html에 관한 svg 코드입니다.

```html
<svg xmlns="http://www.w3.org/2000/svg" width="256" height="361" viewBox="0 0 256 361">
  <path fill="#E44D26" d="m255.555 70.766l-23.241 260.36l-104.47 28.962l-104.182-28.922L.445 70.766z"/>
  <path fill="#F16529" d="m128 337.95l84.417-23.403l19.86-222.49H128z"/>
  <path fill="#EBEBEB" d="M82.82 155.932H128v-31.937H47.917l.764 8.568l7.85 88.01H128v-31.937H85.739zm7.198 80.61h-32.06l4.474 50.146l65.421 18.16l.147-.04V271.58l-.14.037l-35.568-9.604z"/>
  <path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0zm68.65 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88zm62.74 0h16.235v32.508h22.824v16.05h-39.06z"/>
  <path fill="#FFF" d="M127.89 220.573h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08l.779-8.576H127.89zm0-64.719v.078h77.143l.64-7.178l1.456-16.191l.763-8.568H127.89z"/>
</svg>
```

이제 위의 코드를 각 부분 별로 분석해보겠습니다

### 4-1. SVG tag elements

1. `xmlns`: XML 네임스페이스를 정의하며, 이 경우는 SVG에 관한 네임스페이스입니다.
2. `width`, `height`: SVG 이미지의 폭과 높이를 나타냅니다.
3. `viewBox`: 좌표 시스템 내에서 실제 내용이 표시되는 영역을 정의합니다.

### 4-2. path tag elements

1. `fill`: 색상을 지정합니다.
2. `d`: Path 데이터를 나타내며, 경로의 형태와 위치를 정의합니다.

### 4-3. Roles of each path tag elements

1. 첫 번째 `<path>`는 빨간색으로 채워진 동그라미와 그 주변의 모양을 그립니다.
2. 두 번째 `<path>`는 주황색으로 채워진 동그라미와 그 주변의 모양을 그립니다.
3. 세 번째 `<path>`는 회색으로 채워진 복잡한 모양을 그립니다.
4. 네 번째 `<path>`는 여러 도형을 사용하여 그림자 효과를 만듭니다.
5. 다섯 번째 `<path>`는 흰색으로 채워진 여러 도형을 사용하여 그림자 효과를 만듭니다.

### 4-4. Display SVG

아래와 같은 svg 이미지가 삽입되는 것을 확인할 수 있습니다.

![HTML5](/images/html5.png)

## 5. Other Example

위와 같은 요소 말고도 다양한 요소가 svg에 존재합니다. 다음 예시를 통해 좀더 알아보겠습니다.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 200">
  <rect x=".1" y=".1" width="699.8" height="199.8"
        fill="none" stroke="blue" stroke-width=".2" />
  <mysteryElement>
    <path d="M0 0h600v200h-600z" fill="darkkhaki"/>
  </mysteryElement>
  <hideElement xmlns="http://www.example.com/invisibleML">
    nothing to see here
    <path d="M0 0h300v100h-300z" fill="whitesmoke"/>
  </hideElement>
  <text y="2em" font-size="20"><text>This text must not be visible</text></text>
  <linearGradient>
    <gradientExtension>
      <path d="M300 0h100v200h-100z" fill="fuchsia"/>
    </gradientExtension>
  </linearGradient>
  <div xmlns="http://www.w3.org/1999/xhtml">This must not be visible</div>
</svg>
```

### 5-1. rect tag element

rect 태그는 SVG 내에 사각형을 생성합니다.

1. `x`, `y`: 좌측 상단 모서리의 위치를 나타냅니다.
2. `width`, `height`: 사각형의 폭과 높이를 나타냅니다.
3. `fill`: 내부를 채우는 색상을 나타냅니다.
4. `stroke`: 외곽선의 색상을 나타냅니다.
5. `stroke-width`: 외곽선의 두께를 나타냅니다.

### 5-2. mysteryElement tag element

사용자가 정의한 mysteryElement라는 사용자 지정 요소로 내부에 하나의 경로 (`<path>`)를 포함하고 있습니다.

### 5-3. hideElement tag element

xmlns 속성을 사용하여 특정 네임스페이스(`http://www.example.com/invisibleML`)를 가진 hideElement 요소로, 내부에 텍스트와 하나의 경로 (`<path>`)를 포함하고 있습니다.

### 5-4. text tag element

SVG 내에 텍스트를 생성합니다.

1. `y`: 텍스트의 세로 위치를 나타냅니다.
2. `font-size`: 텍스트의 글꼴 크기를 나타냅니다.

### 5-5. linearGradient tag element

선형 그라데이션을 정의하는 요소로, 내부에는 `gradientExtension`과 그 안에 경로 (`<path>`)를 포함하고 있습니다.

### 5-6. div tag element

XHTML 네임스페이스를 가진 `<div>` 요소로, SVG 내에 포함되어 있지만 텍스트는 표시되지 않을 것입니다.

## 6. Usage

### 6-1. Download and Use SVG images directly

1. 웹사이트에서 사용할 svg를 .svg 파일 형태로 다운로드합니다.
2. 저장 경로를 확인하고 svg 이미지가 표시될 부분에 아래와 같이 코드를 작성합니다.

```html
<img src="html5.svg" alt="Html5 Logo" />
```

P.S. 크기를 조절하고 싶다면 css 파일 생성 후(또는 기존의 css 파일에서) 다음과 같이 입력해주시면 됩니다.

```css
img {
  height: 300px;
  width: 300px;
}
```

다시 실행하면 가로, 세로 길이가 300px로 조절된 svg 이미지를 확인하실 수 있습니다.

### 6-2. Use Background image

1. 배경 이미지로 사용하고자 하는 svg 이미지를 다운로드합니다.
2. 아래와 같이 코드를 작성합니다.

```css
body {
  background-image: url(winter.svg);
}
```

실행하시면 해당 svg 이미지가 배경 이미지로 들어간 모습을 확인하실 수 있습니다.

### 6-3. Using the SVG tag for implementation

1. 사용하고자 하는 svg 이미지의 코드 확인하기
2. 사용하고자 하는 위치에 붙여넣기

```html
<body>
  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="361" viewBox="0 0 256 361"><path fill="#E44D26" d="m255.555 70.766l-23.241 260.36l-104.47 28.962l-104.182-28.922L.445 70.766z"/><path fill="#F16529" d="m128 337.95l84.417-23.403l19.86-222.49H128z"/><path fill="#EBEBEB" d="M82.82 155.932H128v-31.937H47.917l.764 8.568l7.85 88.01H128v-31.937H85.739zm7.198 80.61h-32.06l4.474 50.146l65.421 18.16l.147-.04V271.58l-.14.037l-35.568-9.604z"/><path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0zm68.65 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88zm62.74 0h16.235v32.508h22.824v16.05h-39.06z"/><path fill="#FFF" d="M127.89 220.573h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08l.779-8.576H127.89zm0-64.719v.078h77.143l.64-7.178l1.456-16.191l.763-8.568H127.89z"/></svg>
</body>
```

실행 후 확인하시면 해당 svg 이미지가 잘 출력되는 모습을 확인하실 수 있습니다.

### 6-4. Utilizing the HTML Object tag

1. 사용하고자 하는 svg 이미지를 다운로드합니다.
2. 아래와 같이 코드를 작성합니다.

```html
<object data="html5.svg" width="300" height="300" />
```

실행 후 확인하시면 해당 svg 이미지가 잘 출력되는 모습을 확인하실 수 있습니다.

## 7. Reference

- [Oregon State University - Vector And Bitmap Image Guide](https://business.oregonstate.edu/student-experience/resources/DAMlab/vector-and-bitmap-image-guide)
- [DEFINITION - vector graphics](https://www.techtarget.com/whatis/definition/vector-graphics)
- [SVG](https://en.wikipedia.org/wiki/SVG)
- [iconfy.design](https://icon-sets.iconify.design/logos/html-5/)
- [Chapter 5: Document Structure](https://www.w3.org/TR/SVG2/struct.html)