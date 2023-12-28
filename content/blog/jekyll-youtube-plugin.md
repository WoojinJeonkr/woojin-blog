---
external: false
title : "jekyll youtube plugin"
description : "Let's find out about jekyll-youtube among jekyll plugins"
date: 2022-10-03
---

## 1. jekyll-youtube

jekyll-youtube plugin은 Youtube URL을 사용하고 사이트에 비디오를 임베드하기 위해 반응형 html 스니펫을 생성하는 태그를 제공한다.

## 2. jekyll-youtube 설치하기

설치 후 실행하면 동영상이 나와야 하지만 build error가 나오게 되었다.
다음 방법을 사용하자.

## 3. markdown에서 동영상 삽입하기

### 3-1. 썸네일 이미지를 사용해서 클릭하면 유튜브 페이지로 이동

```md
[![초속 5cm_5cm per second_one more time one more chance .COVER KOREAN](https://img.youtube.com/vi/kvHUXPzxTAw/0.jpg)](https://www.youtube.com/watch?v=kvHUXPzxTAw "초속 5cm_5cm per second_one more time one more chance .COVER KOREAN")
```

와 같이 작성하면 다음과 같은 동영상이 나오게 된다.

### 3-2. 동영상이 기재되어 있는 웹페이지에서 iframe 태그를 사용하여 동영상 출력

유튜브를 예로 들어보자면 사용하려는 동영상이 있는 페이지에서 공유 > 퍼가기를 클릭하면 다음과 같은 코드를 얻을 수 있다.

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/vjdzmGiLgTY?si=HNTfRcEEJgl7y8Tk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

이제 이 코드를 사용하여 작성하면 다음과 같은 동영상을 출력할 수 있다.

{% youtube url="https://www.youtube.com/embed/vjdzmGiLgTY?si=HNTfRcEEJgl7y8Tk" label="YouTube video player" /%}

## 4. 참고 자료

- [Jekyll Youtube](https://github.com/dommmel/jekyll-youtube)
- [JEKYLL YAT THEME](https://github.com/jeffreytse/jekyll-theme-yat)
- [stackoverflow - How can I embed a YouTube video on GitHub wiki pages?](https://stackoverflow.com/questions/11804820/how-can-i-embed-a-youtube-video-on-github-wiki-pages)
