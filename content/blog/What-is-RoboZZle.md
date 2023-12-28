---
external: false
title: "What is RoboZZle"
date: 2023-12-01
---

## 1. RoboZZle이란?

RoboZZle은 게임 보드의 모든 별을 선택하도록 로봇을 프로그래밍하는 소셜 퍼즐 게임입니다. 이 퍼즐은 루프와 조건문뿐만 아니라 추상화(서브루틴 정의)와 재귀를 사용하여 알고리즘과 프로그래밍의 주요 지적 요소를 제공합니다. 퍼즐의 난이도는 다양하며 이미 만들어져 있는 문제들을 풀어보거나 새로 본인이 문제를 생성할 수 있습니다.  
RoboZZle을 풀어보고 싶다면 [여기](http://www.robozzle.com/beta/)에 접속하여 튜토리얼부터 다양한 문제를 풀어볼 수 있습니다.  
접속하면 다음과 같은 튜토리얼을 통해 문제를 푸는 방법에 대해 학습할 수 있습니다.  

![RoboZZle Tutorial 1](/public/images/RoboZZle.png)

## 2. RoboZZle의 역사

RoboZZle은 2009년에 [Igor Konovalov](https://twitter.com/igoro)(RoboZZle 메인 개발자), Mark Byers(서버 측 솔루션 확인 도구 & 퍼즐에 대한 '편집' 링크 생성기 개발), 그리고 Blake Coverett(자바스크립트 RoboZZle 클라이언트)에 의해 Microsoft의 Silverlight 기술을 사용하여 개발된 프로그래밍 및 로봇 제어 퍼즐 게임으로 사용자가 로봇을 프로그래밍하여 다양한 퍼즐을 해결하는 것을 목표로 합니다.  
Silverlight는 Microsoft에서 개발한 웹 애플리케이션 및 Rich Internet Application (RIA)을 만들기 위한 플러그인 기반 프레임워크입니다. 이 기술은 주로 웹 브라우저에서 멀티미디어 컨텐츠를 제공하고 상호 작용성을 향상시키는 데 사용되었습니다.  
Silverlight는 XAML을 사용하여 사용자 인터페이스를 정의하고 표현하며 멀티미디어가 지원되고 웹 브라우저에 플러그인을 설치해야했으며 여러 플랫폼에서 독립적으로 동작한다는 특징을 갖고 있었지만 HTML5, CSS3, JavaScript 등의 웹 표준 기술의 발전과 모바일 기기의 보급 및 Silverlight를 사용한 애플리케이션의 개발 및 유지 보수가 복잡하다는 단점으로 새로운 프로젝트에서의 사용이 감소하게 되어 Microsoft는 이러한 이유로 Silverlight의 개발 및 지원을 중단하고, 대신 웹 표준에 중점을 두는 방향으로 전환하였습니다.  
2009년 5월 23일에 RoboZZle을 개발한 Igor Konovalov씨의 글에는 본인의 평가한 RoboZZle의 특징에 대한 등급(2009년 5월 기준)이 기재되어 있습니다.

### 2-1. 게임 중독성: A

정기적으로 로그인하고, 퍼즐을 풀고, 토론에 참여하고, 퍼즐을 디자인하고, 개선 사항을 제안하는 등의 핵심 플레이어 그룹이 존재합니다. 이외에도 여러 플레이어들의 활동에 기반하여 중독성에 대해서는 RoboZZle에게 뻔뻔한 A를 부여합니다.

### 2-2. 특징: B

게임이 출시된 이후로 저는 부분적으로는 사용자 피드백에 따라 기능을 추가하고 부분적으로는 게임을 더 좋게 만들 것이라고 생각하는 사항을 기반으로 기능을 추가해 왔습니다. 포럼, 퍼즐용 RSS 피드, 위키, 최단 솔루션용 점수판, 솔루션용 스테핑 디버거, 새로운 게임 모드 등을 추가했습니다. 게임으로 하고 싶은 일이 너무 많기 때문에 B를 부여합니다.

### 2-3. 코드 품질: B-

이 섹션은 버그에 관한 내용입니다. 단 한 번만 새로운 기능으로 인해 많은 사용자의 게임 플레이에 영향을 미치는 주요 버그가 발생했습니다. 그 당시 로봇은 때때로 심각하게 잘못된 행동을 했습니다. 예를 들어 타일에서 떨어져 게임이 끝나야 했는데도 경로를 계속했습니다. 이 한 가지 사례를 제외하고 대부분의 버그는 대부분의 플레이어가 겪지 않을 사소한 문제였습니다. 아직 게임에 몇 가지 사소한 결함이 남아 있지만 이를 해결하기 위해 노력하고 있습니다. 따라서 RoboZZle은 품질 측면에서 B-를 받는 것이 적절해 보입니다.

### 2-4. 들어오는 트래픽: C+

흠... 트래픽이 들어오네요. 방문자의 충성도는 높은 것으로 보이지만 들어오는 트래픽 수는 그리 인상적이지 않습니다. 방문: 23000, 실제로 웹사이트를 방문한 고유한 개별 사용자의 수: 12754, 등록된 플레이어: 1379, 10개 이상의 퍼즐을 해결한 등록된 플레이어: 877명입니다. robozzle.com으로 들어오는 트래픽의 주요 소스는 silverlight.net: 4013, habrahabr.ru: 1826, google.com: 1366, dotnetkicks.com: 839, genericerror.com: 779, bluebytesoftware.com: 348입니다. 23,000명의 방문수는 무시할 만한 수준이 아니지만, 글을 쓰는 데 주말이 걸린 블로그 게시물에서도 비슷한 수치를 본 적이 있습니다. 따라서 들어오는 트래픽 측면에서 C+를 드립니다.

## 3. 활용처

현재 RoboZZle은 앞서 설명한 [RoboZZle.com](http://www.robozzle.com/beta/)(Desktop)이나 [RoboZZle Droid](https://play.google.com/store/apps/details?id=com.team242.robozzle&hl=en)에서 플레이해볼 수 있으며 [ecole 42](https://42.fr/en/homepage/), [42SEOUL](https://42seoul.kr/seoul42/main/view)에서 온라인 테스트 중 한 종류로 사용하고 있습니다.

## 4. 예제 문제 및 풀이: [Leftovers](http://www.robozzle.com/beta/index.html?puzzle=376)

![RoboZZle - Leftovers](/images/RoboZZle_Leftovers.gif)

## 5. 자료 출처

- [Igor Ostrovsky Blogging](https://igoro.com/archive/category/robozzle/)
- [42 School Test 1-18 level Answers 2023](https://youtu.be/f6a3vI5_XEg?si=DU9zmWqPHs9PFwNR)
- [RoboZZle](http://www.robozzle.com/beta/)
- [42서울이란](https://velog.io/@sionshin/42Seoul-42%EC%84%9C%EC%9A%B8%EC%9D%B4%EB%9E%80)
