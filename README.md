# 02. Adding a Router

[createBrowserRouter](https://reactrouter.com/en/main/routers/create-browser-router) 함수를 사용해 브라우저 라우터를 생성하고 첫번째 라우트(route)를 구성합니다. 이 구성을 [RouterProvider](https://reactrouter.com/en/main/routers/router-provider) 컴포넌트 `router` prop으로 설정하면 클라이언트 사이드 라우팅이 활성화됩니다.

애플리케이션의 엔트리 파일 `main.tsx`를 열어 브라우저 라우터 생성 코드를 작성합니다. 첫번째 라우트는 나머지 라우트가 내부에서 렌더링된다는 이유로 “루트 라우트”라 불립니다. 루트 라우트는 UI의 루트 레이아웃 역할을 할 것이며, 이후 중첩된 레이아웃을 가지게 될 것입니다.

`src/main.tsx`

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
**import { createBrowserRouter, RouterProvider } from 'react-router-dom';**

import '@/styles/global.css';
import App from '@/app/App';

**const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);**

const container = document.getElementById('root') as HTMLElement;

createRoot(container).render(
  <StrictMode>
    **<RouterProvider router={router} />**
  </StrictMode>
);
```
