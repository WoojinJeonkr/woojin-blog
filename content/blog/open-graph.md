---
external: false
title : "open graph"
description : "What is Open Graph and How to use it for website?"
date: 2022-10-02
---

## 1. Open Graph

Open Graph는 원래 Facebook에서 페이지 콘텐츠를 표현하는 것을 목적으로 웹 페이지 내 메타데이터 사용을 표준화하기 위해 만든 인터넷 프로토콜이다.페이지 제목처럼 간단하거나 동영상 길이만큼 구체적인 세부 정보를 제공할 수 있다.

## 2. Open Graph가 필요한 이유

인터넷의 콘텐츠는 일반적으로 다른 사람과 공유한다는 하나 이상의 목표를 염두에 두고 만들어진다.친구 1명에게만 보내는 경우가 아닌 여러 사람에게 공유하고 싶거나 미리보기를 사용하는 소셜 네트워크나 앱에서 공유하려는 경우 Open Graph를 사용하므로써 내용을 상대방에게 미리 보여줄 수 있다.대부분의 소셜 미디어 플랫폼에서는 오픈 그래프 태그가 없어도 title과 description 정도는 미리보기로 표시해주지만 이는 실제 페이지의 콘텐츠 내용과 다를 수 있고, 그것만으로는 이 페이지가 어떤 정보를 보여줄지 사용자가 예상하기 어렵다. 소셜 미디어의 급성장으로는 최근에는 많은 웹사이트들이 og 태그를 사용하고 있는데, 만약 공유받은 웹사이트의 미리보기에 썸네일도 없고 페이지 title만 있는 경우 사용자 입장에서는 클릭해도 괜찮은 페이지인지 망설여지게 될 수 있다.

## 3. Open Graph 태그

### 3-1. 기본 태그

1. **og:title** : 사이트의 제목 태그
2. **og:type** :  사이트의 종류 스타일 ex) video, movie
3. **og:image** : 사이트를 나타낼 대표 이미지
4. **og:url** : 사이트의 대표 url

### 3-2. 옵션 태그

1. **og:audio** : 사이트에 포함되는 오디오 파일 url
2. **og:description** : 사이트 설명
3. **og:locale** : 사이트 언어 선택 ex) 한글: ko_KR
4. **og:locale:alternate** : 사이트의 다른 언어 종류 (다국적 사이트인 경우 적용)
5. **og:site_name** : 전체 사이트의 제목이 **og:title**이라면 **og:site_name**은 좀 더 세부적인 카테고리의 제목을 의미한다.
6. **og:video** : 사이트에 포함되는 비디오 파일 url

### 3-3. 구조 프로퍼티

여기서 'object'는 image, video, audio와 같은 태그를 의미한다.  

1. **og:'object':url** : object의 경로
2. **og:'object':secure_url** : SSL(HTTPS)의 경로
3. **og:'object':type** : object 타입의 종류
4. **og:'object':width** : object의 너비
5. **og:'object':height** : object의 높이
6. **og:'object':alt** : object 설명

## 4. metatags.io

[사이트 바로가기](https://metatags.io/)

콘텐츠를 편집하고 실험한 다음 Google, Facebook, Twitter 등에서 웹페이지가 어떻게 보일지 미리 볼 수 있는 사이트이다.

## 5. 참고 자료

- [What is Open Graph and how can I use it for my website?](https://www.freecodecamp.org/news/what-is-open-graph-and-how-can-i-use-it-for-my-website/)
- [[HTML] Open graph  (오픈 그래피, og 태그)](https://nowonbun.tistory.com/517)
- [Meta Tag , OG(오픈그래프) 사용하기](https://velog.io/@byeol4001/Meta-Tag-OG%EC%98%A4%ED%94%88%EA%B7%B8%EB%9E%98%ED%94%84-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)
- [Jekyll::Linkpreview](https://github.com/ysk24ok/jekyll-linkpreview)
- [Jekyll 링크 미리보기 추가하기](https://leeminjoo.github.io/jekyll-setting/2021/06/20/Git-page-link-preview.html)
