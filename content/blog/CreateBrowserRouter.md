---
external: false
title: "CreateBrowserRouter"
date: 2023-05-09
---

## 1. CreateBrowserRouter

 1. react router v6.4부터 사용할 수 있는 react-router의 새로운 메서드
 2. 기존의 BrowserRouter가 내부적으로 'history' 객체를 생성하고, 이를 통해 브라우저의 세션 히스토리를 추적하고 조작했다면 CreateBrowserRouter는 사용자가 직접 'history'객체를 생성해서 전달할 수 있다.

## 2. 활용 가능한 추가적인 제어 기능들

1. middleware: 'beforeEnter', 'beforeLeave'와 같은 미들웨어 함수를 사용하여 라우트 전환 이전에 특정 동작을 수행할 수 있다.
2. lazy loading: route component를 동적으로 로드하기 위해 'React.lazy()' & 'Suspense'를 함께 사용할 수 있다.
3. 초기 로딩: 초기 라우트 설정 전에 컴포넌트나 데이터를 로딩하기 위해 'startLoading' 함수를 사용할 수 있다.
4. custom history: 'history' 객체를 사용하여 browser history를 직접 제어할 수 있다.

## 3. 예시

## 3-1. index.tsx

```ts
import { RouterProvider } from 'react-router-dom';
import router from './Router';

root.render(
  <React.StrictMode>
    <RouteProvider router={router}>
  </React.StrictMode>
)
```

## 3-2. Router.tsx

1. `<Home />`이 표시되는 경로: 'localhost:3000'
2. `<Management />`가 표시되는 경로: 'localhost:3000/management'
3. 컴포넌트가 렌더링될 때 App에서 작성된 Header or Sidebar, Footer가 같이 적용되어 보여지게 된다.

```ts
import { createBrowserRouter } from 'react-router-dom';
import Management from './pages/Management';
import Home from './pages/Home';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'management',
        element: <Management />,
      }
    ]
  }
])

export default router;
```

## 3-3. App.tsx

1. 하위 경로의 컴포넌트를 알맞게 출력하기 위해 App.tsx에 `<Outlet />`을 추가한다.
2. Outlet: Children과 같은 효과를 준다.

```ts
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
```

## 4. Outlet 예시

### 4-1. App.tsx

```ts
<Routes>
  <Route path="/" element={<Main />}>
  <Route path="/login" element={<Login />} />
  <Route path="/profile" element={<Profile />}> // 중첩 라우팅
    <Route path="admin" element={<Admin />} />
    <Route path="member" element={<Member />} />
  </Route>
</Routes>
```

## 4-2. Main.tsx

```ts
<div>
  <Header />
  <Outlet />
  <Footer />
</div>
```

## 5. Reference

- [createBrowserRouter](https://reactrouter.com/en/main/routers/create-browser-router)
- [리액트 라우터 구현 ^6.4 (BrowserRouter와 createBrowserRouter)](https://velog.io/@rmaomina/react-router-createBrowerRouter)
- [Outlet](https://reactrouter.com/en/6.11.1/components/outlet)
