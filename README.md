# 01. Setup

[Vite](https://vitejs.dev) 빌드 도구를 사용해 프로젝트를 구성합니다. (React + TypeScript)

```bash
npm create vite@latest <프로젝트_이름>
```

프로젝트에 종속성 패키지를 설치합니다.

```bash
npm i react-router-dom@6 localforage match-sorter sort-by
npm i -D @types/node @types/sort-by
```

`package.json` 스크립트 명령을 다음과 같이 수정합니다.

```json
{
  "scripts": {
    **"start": "npm run dev -- --open",
    "dev": "vite --host --port=3000"**
  }
}
```

React + Vite 앱을 구동합니다.

```bash
npm run dev
```

그 외 수정해야 할 프로젝트 파일 코드는 [02-add-router](https://github.com/yamoo9/react-router-v6.4/tree/02-add-router) 브랜치에서 확인합니다.

**수정할 파일 / 디렉토리 목록**

- index.html
- vite.config.ts
- tsconfig.json
- src/main.tsx
- src/@types
- src/services
- src/styles
- src/app
