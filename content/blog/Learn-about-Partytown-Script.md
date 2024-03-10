---
external: false
title: "Learn about Partytown Script"
tag: [Partytown, Astro]
date : 2024-01-04
---

## 1. Reason for Using Partytown Script

해당 블로그에 대해 Google Analytics를 사용하기 위해서 관련 코드를 입력하던 중 다음과 같이 사용하게 되었습니다.

```astro
<script type="text/partytown">
...
</script>
```

## 2. What is Partytown?

Partytown은 리소스 집약적인 스크립트를 Web Worker(부담스러운 처리 작업을 별개의 스레드에서 수행함으로써 주 스레드(보통 UI 스레드)가 차단되거나 느려지지 않고 실행될 수 있는 장점을 가진 웹 애플리케이션의 주 실행 스레드와 별도의 백그라운드 스레드에서 스크립트 작업을 실행할 수 있게 해주는 기술)로 이동시켜 메인 스레드에서 실행되는 작업을 최소화하는 지연 로드 라이브러리입니다.

### 2-1. Issues related to existing third-party scripts

아래는 `Loading Third-Party JavaScript`에서 언급된 서드파티 스크립트를 추가한 후 발생할 수 있는 잠재적인 문제들에 대한 요약입니다.

1. 여러 서버로의 네트워크 요청이 너무 많이 발생할 경우. 사이트가 요청을 많이 하면 로딩에 더 많은 시간이 걸릴 수 있습니다.
2. 많은 양의 JavaScript 코드를 전송하고 이로 인해 주요 스레드가 계속해서 바쁘게 유지되는 경우(웹 페이지의 주요 스레드가 지속적으로 작업을 처리하고 있어서 다른 작업들이 지연되거나 차단되는 경우), 과도한 JavaScript는 DOM 구성을 차단할 수 있어 페이지 렌더링 속도를 지연시킬 수 있습니다.
3. CPU 집약적인 스크립트 파싱 및 실행이 사용자 상호 작용을 지연시키고 배터리 소모를 일으킬 수 있습니다.
4. 신경쓰지 않고 로드된 서드파티 스크립트는 단일 장애 지점(SPOF, 시스템 구성 요소 중에서, 동작하지 않으면 전체 시스템이 중단되는 요소)가 될 수 있습니다.
5. 충분한 HTTP 캐싱이 없어 자원을 네트워크에서 자주 가져와야 하는 경우.
6. 사용자 경험에 해로운 것으로 알려진 레거시 API (예: document.write())의 사용.
7. 과도한 DOM 요소 또는 비용이 많이 드는 CSS 선택자(CSS에서 스타일을 입힐 HTML 등 마크업 언어의 요소를 선택하는 문자).
8. 여러 서드파티 임베드를 포함하여 프레임워크 및 라이브러리가 여러 번 가져와지면 성능 문제가 악화될 수 있습니다.
9. 서드파티 스크립트는 종종 async 또는 defer를 사용하더라도 window.onload을 차단할 수 있는 임베드 기술을 사용하기도 합니다.

### 2-2. Goal

Partytown의 목표는 다음과 같습니다. 아래에서 말하는 `제3자 스크립트`는 사이트에 내장되어 있지만 직접적으로 제어되지 않는 코드를 말합니다.

1. 메인 스레드 자원을 해방하여 주요 웹 앱 실행에만 사용합니다.
2. 제3자 스크립트를 격리시키고 메인 스레드 API에 대한 접근을 허용하거나 거부합니다.
3. Web Worker 스레드 내에서 장기 실행 작업을 격리합니다.
4. 제3자 스크립트에서 발생하는 레이아웃 충돌을 방지하기 위해 DOM setter/getter를 그룹 업데이트로 묶어 레이아웃 충돌을 감소시킵니다.
5. 제3자 스크립트의 메인 스레드 접근을 쓸데없이 제한합니다.
6. 제3자 스크립트가 정확하게 코드대로 동작하도록 하고 어떠한 수정도 가하지 않습니다.
7. Web Worker 내에서 메인 스레드 DOM 작업을 동기적으로 읽고 쓸 수 있도록 하여 Web Worker에서 실행되는 스크립트가 예상대로 동작하도록 합니다.

### 2-3. Benefit

Partytown은 웹 애플리케이션의 성능을 향상시키고, 메인 스레드를 사용자 코드에 집중시키면서 제3자 스크립트를 Web Worker로 오프로드하여 웹 페이지의 응답성을 향상시킵니다.

![Partytown Image](https://user-images.githubusercontent.com/452425/152363590-89d3b9a5-35c7-4c12-8f3e-c8b5ce4bb267.png)

### 2-4. Usage

1. Google Tag Manager(GTM): 구글에서 2012년 가을에 출시한 서비스로 인터넷 상의 인터페이스에서 웹 분석, 광고성과 측정, 제휴 마케팅 추적 등 다양한 태그를 관리할 수 있도록 하는 솔루션
2. Google Analytics(GA): 구글에서 무료로 제공하고 있는 웹분석 서비스
3. Facebook Pixel: 고객이 광고를 본 후 웹사이트에서 어떤 행동을 하는지에 대한 답을 제시해주는 분석 도구
4. Mixpanel: 사용자 행동 데이터를 수집, 분석, 시각화하는 데 탁월한 성능을 발휘하는 프로덕트 애널리틱스(PA) 도구
5. Hubspot: 마케팅 활동과 결과를 추적하고 분석하는데 사용
6. Segment: 개발자와 마케터가 앱이나 웹사이트에서 발생하는 데이터를 수집, 통합, 관리하는 데 사용되는 서비스
7. Amplitude: 제품 향상 및 비즈니스 결정에 필요한 다양한 데이터를 수집하고 시각화하여 제공하는 서비스

## 3. Partytown Script

각 개별적인 서드파티 스크립트에 type="text/partytown" 속성을 추가하여 Web Worker에서 실행되도록 합니다. 각 스크립트는 옵트인(해당 스크립트가 실행되기 위해서는 사용자나 개발자가 명시적으로 동의해야 하는 상태)이므로 업데이트된 type 속성은 Partytown과 함께 실행되어야 하는 스크립트에만 추가되어야 합니다. Partytown은 이 속성이 추가되지 않은 스크립트를 자동으로 업그레이드하지 않습니다.

```javascript
<script type="text/partytown">...</script>
```

### 3-1.Two functions of the 'type="text/partytown"' attribute

1. 브라우저에게 스크립트를 처리하지 말 것을 알립니다. 브라우저가 인식하지 않는 type 속성을 제공함으로써 임베디드 내용은 브라우저에 의해 처리되지 않는 데이터 블록으로 취급됩니다.

2. Partytown이 Web Worker 내에서 실행할 모든 스크립트를 찾을 수 있도록 쿼리 selector를 제공합니다. document가 준비되고 Partytown이 초기화된 후, Partytown은 그 이후 script[type="text/partytown"] 스크립트 요소를 쿼리 셀렉터로 찾게 됩니다. Web Worker에서 스크립트가 실행된 후에는 해당 스크립트의 type 속성이 type="text/partytown-x"로 업데이트됩니다.

### 3-2. Adding scripts dynamically

일반적으로 document가 로드될 때 스크립트는 이미 DOM의 일부이며, document가 준비되고 창이 로드된 후에 Partytown은 스크립트를 찾아 Web Worker에서 실행하기 시작합니다. 그러나 Partytown이 초기화된 후에 동적으로 DOM에 스크립트가 추가된다면, 여전히 window에서 ptupdate 사용자 지정 이벤트를 디스패치(이벤트를 발생시키거나 전달)하여 Partytown에게 새로운 스크립트를 찾았음을 알릴 수 있습니다.

아래는 동적으로 document에 스크립트를 추가하고, 그 후 Partytown에게 다시 업데이트를 실행하도록 알리는 예시입니다. 주목할 점은 스크립트가 추가되기 전에 이미 type 속성(또는 속성)이 text/partytown으로 설정되어 있다는 것입니다.

```javascript
const script = document.createElement('script');
script.type = 'text/partytown';
script.innerHTML = `console.log("New partytown script!")`;
document.head.appendChild(script);

window.dispatchEvent(new CustomEvent('ptupdate'));
```

## 4. Reference

- [Partytown Docs](https://partytown.builder.io/)
- [Google Tag Manager](https://tagmanager.google.com/?hl=en#/home)
- [Google Analytics](https://analytics.google.com/)
- [페이스북 픽셀(Pixel) 200% 활용 가이드](https://www.openads.co.kr/content/contentDetail?contsId=10204)
- [제품 분석 도구 믹스패널(Mixpanel)을 활용한 뱅킹 앱 사용자 행동 데이터 분석](https://jaeyoung2010.medium.com/제품-분석-도구-믹스패널-mixpanel-을-활용한-뱅킹-앱-핀태크-사용자-행동-데이터-분석-345d2fa6e42e)
- [HubSpot](https://www.performars.com/ko/revops/hubspot/what-is-hubspot)
- [Segment Docs](https://segment.com/docs/?ref=nav)
- [Amplitude Analytics](https://amplitude.com/amplitude-analytics)
