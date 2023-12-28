---
external: false
title: "How to add code block"
date: 2022-09-08
---

## 1. 🧱 코드블록이란?

시각적 스크립팅 환경 내의 문자 스크립팅 인터페이스를 말한다.

### 1-1. 코드블록의 장점

1. 프로그래밍 개념을 설명하거나, 다른 개발자와 코드를 공유하거나, 고유한 코드 스니펫 라이브러리를 유지·관리하는데 유용하다.
2. 많은 양의 코드를 클립보드에 간편하게 복사한 뒤 원하는 곳에서 사용할 수 있다.

## 2. html에서 코드블록 추가하기

다음 2가지 방법으로 html에 코드블록을 추가할 수 있다.

### 2-1. code 태그와 그 내용을 pre 태그 안에 래핑하기

```html
<pre>
    <code>
        print(hellow world);
    </code>
</pre>
```

### 2-2. code 태그와 CSS white-space 속성 사용하기

```html
<code class="test">
    print("hellow world");
</code>
```

```css
.test {
  display: block;
  white-space: pre-wrap;
}
```

## 3. markdown에서 코드블록 추가하기

백틱(`)을 사용하여 코드블록 작성하기

## 4. Github gist 이용하기

1. Github에 접속해서 우측 상단에 '+' 버튼을 누른 뒤 new gist를 클릭한다.
2. 작성하고자 하는 코드를 입력하고 create public gist로 저장한다.
3. 저장 시 우측 상단에 보이는 Embeded 부분에서 복사를 클릭 후 코드를 작성하고자 하는 부분에 붙여넣는다.

[해당 내용에 대해 더 알고 싶다면...](https://turume.tistory.com/entry/Github-Gist)
