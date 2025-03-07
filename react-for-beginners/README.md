# Create React App 시작하기

이 프로젝트는 [Create React App](https://github.com/facebook/create-react-app)을 사용하여 부트스트랩되었습니다.

## 사용 가능한 스크립트

프로젝트 디렉토리 안에서 다음 명령어들을 실행할 수 있습니다:

### `npm start`

개발 모드에서 앱을 실행합니다.  
브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 앱을 확인할 수 있습니다.

파일이 변경되면 페이지가 자동으로 다시 로드됩니다.  
또한 콘솔에서 린트 오류를 확인할 수도 있습니다.

### `npm test`

대화형 감시 모드(interactive watch mode)로 테스트 러너를 실행합니다.  
자세한 내용은 [테스트 실행 방법](https://facebook.github.io/create-react-app/docs/running-tests) 문서를 참조하세요.

### `npm run build`

앱을 프로덕션용으로 빌드하여 `build` 폴더에 결과물을 생성합니다.  
프로덕션 모드에서 React를 올바르게 번들링하고 최적화하여 최고의 성능을 제공합니다.

빌드 결과물은 압축(minified)되며, 파일 이름에 해시가 포함됩니다.  
이제 앱을 배포할 준비가 되었습니다!

자세한 내용은 [배포](https://facebook.github.io/create-react-app/docs/deployment) 문서를 참조하세요.

### `npm run eject`

**주의: 이 작업은 되돌릴 수 없는 일방향 작업입니다. 한 번 `eject`를 실행하면 다시 되돌릴 수 없습니다!**

빌드 도구나 설정 옵션에 만족하지 못한다면 언제든지 `eject`할 수 있습니다. 이 명령은 프로젝트에서 단일 빌드 의존성을 제거합니다.

대신, 모든 설정 파일과 전이적(dependent) 의존성들(webpack, Babel, ESLint 등)을 프로젝트 내로 복사하여 완전한 제어를 할 수 있게 만듭니다. `eject` 명령을 제외한 모든 명령어는 여전히 작동하지만, 복사된 스크립트를 가리키게 되어 이를 원하는 대로 수정할 수 있습니다. 이 시점부터는 스스로 관리해야 합니다.

하지만 `eject`는 반드시 사용할 필요는 없습니다. 기본으로 제공되는 기능 집합은 소규모 및 중간 규모의 배포에 적합하며, 이 기능을 꼭 사용해야 한다는 부담을 느낄 필요는 없습니다. 다만, 필요할 때 커스터마이징할 수 없으면 이 도구가 유용하지 않다는 점도 이해하고 있습니다.

## 더 알아보기

[Create React App 문서](https://facebook.github.io/create-react-app/docs/getting-started)에서 더 자세한 내용을 확인할 수 있습니다.

React를 배우려면 [React 문서](https://reactjs.org/)를 확인해 보세요.

### 코드 분할 (Code Splitting)

이 섹션은 [코드 분할](https://facebook.github.io/create-react-app/docs/code-splitting) 문서로 이동되었습니다.

### 번들 크기 분석 (Analyzing the Bundle Size)

이 섹션은 [번들 크기 분석](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size) 문서로 이동되었습니다.

### 프로그레시브 웹 앱 만들기 (Making a Progressive Web App)

이 섹션은 [프로그레시브 웹 앱 만들기](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app) 문서로 이동되었습니다.

### 고급 설정 (Advanced Configuration)

이 섹션은 [고급 설정](https://facebook.github.io/create-react-app/docs/advanced-configuration) 문서로 이동되었습니다.

### 배포 (Deployment)

이 섹션은 [배포](https://facebook.github.io/create-react-app/docs/deployment) 문서로 이동되었습니다.

### `npm run build`가 압축에 실패할 경우

이 섹션은 [npm run build 압축 실패 문제](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) 문서로 이동되었습니다.

---

**참고:**  
프로젝트 초기 설정 시에는 **src 폴더 내의 App.js, index.js** 외에 불필요한 초기 파일들을 삭제하는 것을 권장합니다.
아래 초기 파일 Setting 참고

### App.js

```jsx
function App() {
  return <div>welcome back!</div>;
}

export default App;
```

### index.js

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
