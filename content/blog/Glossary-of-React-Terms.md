---
external: false
title : "Glossary of React Terms"
date: 2022-11-06
---

## 1. React 기술 용어 모음 20가지

### 1-1. 싱글 페이지 애플리케이션(Single-page application, SPA)

- 하나의 HTML 페이지와 애플리케이션 실행에 필요한 JavaScript와 CSS 같은 모든 자산을 로드하는 애플리케이션
- 페이지 또는 후속 페이지의 상호작용은 서버로부터 새로운 페이지를 불러오지 않으므로 페이지가 다시 로드되지 않는다
- React로 작성된 코드는 PHP와 같은 서버에 의해 렌더된 마크업 또는 다른 클라이언트사이드 라이브러리와 함께 문제없이 공존할 수 있다

### 1-2. ES6, ES2015, ES2016과 같은 단어들

- ECMAScript 언어 명세의 최신 버전을 나타내며, JavaScript는 이들을 구현한 것
- ES6 버전(ES2015)에는 이전 버전에 없던 화살표 함수(arrow function), class, 템플릿 리터럴(template literal), let 과 const 구문과 같은 많은 추가 사항이 포함되어 있다

### 1-3. Compiler

- JavaScript 컴파일러는 JavaScript 코드를 변환하고 다른 형식으로 JavaScript 코드를 반환한다
- ES6 문법을 구형 브라우저에서도 동작할 수 있도록 변환하는 데 많이 사용한다
- React와 함께 널리 사용되는 컴파일러로는 Babel이 있다

### 1-4. Bundler

- 분리된 JavaScript와 CSS 모듈 코드를 브라우저에 최적화된 여러 개의 파일로 결합한다
- React 애플리케이션에서 널리 사용되는 번들러에는 Webpack과 Browserify가 있다

### 1-5. 패키지 관리자

- 프로젝트의 종속성을 관리할 수 있는 도구
- npm, Yarn : React 애플리케이션에서 자주 사용되는 패키지 관리자로 두 패키지 관리자 모두 같은 npm 패키지 레지스트리의 클라이언트다

### 1-6. CDN(Content Delivery Network)

- 전 세계의 서버 네트워크에서 캐시된 정적 콘텐츠를 제공한다

### 1-7. JSX

- JavaScript의 확장 문법
- 템플릿 언어와 비슷해 보이지만, JavaScript의 강력한 기능들을 모두 사용할 수 있다
- React.createElement()의 호출을 통해 일반 JavaScript 객체인 React element로 컴파일된다
- React DOM : HTML attribute 이름 대신 캐멀케이스(camelCase)를 네이밍 컨벤션으로 사용한다

### 1-8. React Element

- React 애플리캐이션을 구성하는 블록
- 화면에 보이는 것들을 기술하며, 변경되지 않는다

### 1-9. React Component

- 페이지에 렌더링할 React 엘리먼트를 반환하는 작고 재사용 가능한 코드 조각
- 가장 간단한 React 컴포넌트는 React 엘리먼트를 반환하는 일반 JavaScript 함수이다
- 기능별로 나눌 수 있으며 다른 컴포넌트 안에서 사용할 수 있다
- 다른 컴포넌트, 배열, 문자열 그리고 숫자를 반환할 수 있다
- 화면을 구성하는 데 자주 사용되는 UI(Button, Panel, Avatar), 혹은 복잡한 UI(App, FeedStory, Comment) 컴포넌트는 재사용 가능한 컴포넌트가 될 수 있으며 이름은 항상 대문자로 시작해야 한다

### 1-10. props

- 컴포넌트의 입력값
- 부모 컴포넌트로부터 자식 컴포넌트로 전달된 데이터로 읽기 전용이며 어떤 방식으로든 수정해서는 안된다
- 사용자의 입력 또는 네트워크 응답에 반응하여 어떤 값을 수정해야 한다면 state를 사용하는 것을 권장한다

### 1-11. props.children

- 모든 컴포넌트에서 사용할 수 있으며 컴포넌트의 여는 태그와 닫는 태그 사이의 내용을 포함한다
- Class로 정의된 컴포넌트에서는 this.props.children을 사용한다

### 1-12. state

- 컴포넌트와 관련된 일부 데이터가 시간에 따라 변경될 경우 사용한다
- state와 props의 차이점
  1. state: 컴포넌트에서 관리되며 컴포넌트가 변경할 수 있다
  2. props: 부모 컴포넌트로부터 전달받으며 컴포넌트가 변경할 수 없다
- 데이터가 변경되는 각 특정한 부분에 대해, 해당 state를 소유하는 컴포넌트는 하나만 존재해야 한다

### 1-13. 생명주기 메서드(Lifecycle method)

- 컴포넌트의 각각의 단계에서 실행되는 커스텀 기능
- 컴포넌트가 만들어지고 DOM에 삽입될 때(mounting), 컴포넌트가 업데이트될 때 및 컴포넌트가 DOM에서 마운트 해제될 때(unmounted) 혹은 제거될 때 사용할 수 있는 기능을 제공한다

### 1-14. 제어 컴포넌트(controlled component)

- React에 의해 입력값이 제어되는 엘리먼트
- 사용자가 제어 컴포넌트에 데이터를 입력하면 변경 이벤트 핸들러가 호출되고 코드가 (업데이트된 값으로 다시 렌더링에 의해) 입력의 유효 여부를 결정한다
- 다시 렌더링되지 않는다면 form 엘리먼트는 변경되지 않은 상태로 유지된다
- 되도록 제어 컴포넌트의 사용을 권장한다

### 1-15. 비제어 컴포넌트(uncontrolled component)

- form 엘리먼트가 React 외부에서 작동하는 것처럼 작동한다
- 사용자가 form 필드(input box, dropdown 등)에 데이터를 입력하면 업데이트된 정보가 React에서 별도 처리할 필요 없이 엘리먼트에 반영된다 --> 특정 필드가 특정 값을 갖도록 강제할 수 없다는 의미

### 1-16. Key

- 엘리먼트의 배열을 만들 때 포함해야 하는 특별한 문자열
- React가 어떤 항목을 변경, 추가 혹은 삭제할지 식별하는 것을 돕는다
- 엘리먼트들을 안정적으로 식별할 수 있도록 배열 내의 엘리먼트에 key를 제공해야 한다
- 같은 배열에 포함된 다른 요소 사이에서만 고윳값을 가지면 된다. 전체 애플리케이션 또는 단일 컴포넌트 전체에서 고윳값을 가질 필요는 없다
- post.id와 같이 데이터에서 사용되는 유일하고 안정적인 식별자를 사용하는 것이 좋다

### 1-17. ref attribute

- React.createRef() 함수, 콜백 함수, 혹은 문자열(레거시 API에서)로 생성할 수 있다
- ref 어트리뷰트가 콜백 함수인 경우, 함수는 DOM 엘리먼트나 class 인스턴스를 인자로 받는다 --> 컴포넌트 인스턴스나 DOM 엘리먼트에 직접 접근할 수 있다
- 되도록 ref attribute를 적게 사용하는 것을 권장한다. 앱에서 Ref를 사용하여 작동되는 부분이 많다면 하향식 데이터 흐름을 사용하는 것이 더 좋다

### 1-18. Event

- React 이벤트 핸들러는 소문자가 아닌 캐멀케이스(camelCase)를 사용한다
- JSX를 사용하면 문자열이 아닌 함수로 이벤트 핸들러를 전달한다

### 1-19. 재조정(Reconciliation)

컴포넌트의 state나 props가 변경되면 React는 새로 반환된 컴포넌트를 이전에 렌더링된 컴포넌트와 비교하여 실제 DOM을 업데이트 해야하는지 결정하는데 두 컴포넌트가 동일하지 않다면, React는 DOM을 업데이트하게 된다. 이 과정을 재조정이라고 한다

### 1-20. 하향식 데이터 흐름

- 데이터가 위에서 아래로 전달되는 구조
- 하향식(top-down) 또는 단방향식 데이터 흐름이라고 정의한다
- 모든 state는 항상 특정한 컴포넌트가 소유하고 있으며 그 state로부터 파생된 UI 또는 데이터는 오직 트리 구조에서 자신의 아래에 있는 컴포넌트에만 영향을 미치는데 트리구조가 props들의 폭포라고 상상하면 각 컴포넌트의 state는 임의의 점에서 만나지만 동시에 아래로 흐르는 부가적인 수원(water source)이라고 할 수 있다

## 2. Reference

- [reactjs - Glossary of React Terms](https://reactjs.org/docs/glossary.html)
- [reactjs - The Data Flows Down](https://reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down)
