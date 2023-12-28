---
external: false
title : "link and navigate"
date: 2022-10-12
---

## 1. react-router-dom

react-router-dom 패키지에는 웹 애플리케이션에서 React Router를 사용하기 위한 바인딩 이 포함되어 있다.
다음의 코드를 터미널에 입력해 설치할 수 있다.

```bash
npm i react-router-dom
```

## 2. Link

```ts
<Link to="이동하려는 페이지 주소" element={요소 이름} />
```

- 마우스 오른쪽 버튼을 클릭하는 것과 같은 작업이 예상대로 작동
- 클라이언트 측 라우팅을 건너뛰고 브라우저가 전환을 정상적으로 처리하도록 하는데 사용 가능
- 특정 주소로 이동

[Link에 대해 자세히 알아보기](https://reactrouter.com/en/main/components/link)

## 3. Navigate

- 렌더링될 때 현재 위치를 변경
- useNavigate를 둘러싼 component wrapper이며 props와 동일한 모든 인수를 허용
- 특정 행동 수행 시 해당 주소로 이동

[Navigate에 대해 자세히 알아보기](https://reactrouter.com/en/main/components/navigate)

## 4. 참고 자료

- [React Router DOM](https://www.npmjs.com/package/react-router-dom)
- ['Link'](https://reactrouter.com/en/main/components/link)
- ['Navigate'](https://reactrouter.com/en/main/components/navigate)
