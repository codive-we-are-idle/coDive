![co-dive](./assets/co-dive.png)

### 팀 구성원

| 이름   | 역할 | GitHub                                    |
| ------ | ---- | ----------------------------------------- |
| 김현빈 | 팀장 | [hb-k-3376](https://github.com/hb-k-3376) |
| 김정주 | 서기 | [KimJJRoSY](https://github.com/KimJJRoSY) |
| 김영민 | 팀원 | [kimym98](https://github.com/kimym98)     |
| 이석주 | 팀원 | [sbbtt](https://github.com/sbbtt)         |
| 이새롬 | 팀원 | [serom5641](https://github.com/serom5641) |

## 🎯 개요

**CoDive**는 사용자들이 소규모 조(그룹)를 이루어 알고리즘 문제를 함께 풀고,

그 결과를 기반으로 **개인 및 조 단위 랭킹을 제공**하는 서비스입니다.

혼자 하는 공부가 지루하거나, 함께 성장하고 싶은 사람들을 위해 만들어졌습니다.

## 🛠 기술 스택

- Frontend: HTML, CSS, JavaScript
- 기타 도구: Prettier, GitHub Projects

## 📁 프로젝트 구조

```
project-root/
├── {기능이름}/
│   ├── dom.js
│   ├── api.js
│   ├── controller.js
│   ├── {기능이름}.css
│   ├── index.js (export)
│   └── animation.js (예시)
├── package.json
└── README.md
```

각 기능별로 독립적인 폴더 구조를 유지하며, 필요에 따라 추가 파일을 생성할 수 있습니다.

## 📝 코드 컨벤션

### 기본 규칙

- **들여쓰기**: 2칸 스페이스
- **함수 작성법**: 화살표 함수를 기본으로 사용
- **주석**: JSDoc 사용

### 네이밍 컨벤션

| 요소         | 컨벤션                     | 예시                              |
| ------------ | -------------------------- | --------------------------------- |
| 함수명       | camelCase (동사 앞에 붙임) | `handleLoginButton`, `renderRank` |
| 변수명       | camelCase                  | `userName`, `isLoggedIn`          |
| 파일명       | camelCase                  | `userProfile.js`, `loginForm.js`  |
| 클래스명     | PascalCase                 | `UserProfile`, `LoginForm`        |
| 상수         | SNAKE_CASE (대문자)        | `MAX_USER_COUNT`, `API_BASE_URL`  |
| CSS 클래스명 | kebab-case                 | `user-profile`, `login-button`    |

### 함수 작성 규칙

1. **함수명은 기능을 포함하여 작성**

   ```javascript
   // Good
   const handleLoginButton = () => { ... }
   const renderRank = () => { ... }
   ```

2. **함수는 하나의 기능만 수행**

   ```javascript
   // Good - 단일 책임
   const validateEmail = (email) => { ... }
   const sendEmail = (email, message) => { ... }
   ```

3. **JSDoc을 사용하여 매개변수와 리턴값을 명시**
   ```javascript
   /**
    * 사용자 로그인을 처리합니다.
    * @param {string} username - 사용자명
    * @param {string} password - 비밀번호
    * @returns {Promise<boolean>} 로그인 성공 여부
    */
   const handleLogin = async (username, password) => {
     // 로그인 로직
   };
   ```

### 파일 분리 규칙

- 같은 기능의 함수들로 파일을 분리
- 각 기능별로 독립적인 폴더 구조 유지

## 🌿 브랜치 전략

### 브랜치 생성 규칙

**브랜치명 규칙**: `feat-{기능이름}`

```bash
# 예시
feat-user-login
feat-product-search
feat-payment-system
```

### 브랜치 작업 플로우

1. main 브랜치에서 새 브랜치 생성
2. 기능 개발 완료 후 Pull Request 생성
3. 코드 리뷰 후 main 브랜치에 병합

## 🚀 커밋 및 배포

### 커밋 전 체크리스트

1. **코드 포맷팅 검사**

   ```bash
   # 포맷 검사
   npm run format:check

   # 또는 자동 포맷팅
   npm run format
   ```

2. **커밋 메시지 규칙**
   ```bash
   feat: 새로운 기능 추가
   fix: 버그 수정
   docs: 문서 수정
   fomat: 코드 포맷팅
   refactor: 코드 리팩토링
   style: css , ul 업데이트
   test: 테스트 코드
   chore: 기타 변경사항
   ```

### commit & push flow

```bash
# 1. 포맷팅 검사 및 수정
npm run format

# 2. 변경된 파일만 스테이징 (수정 내용 설명 필수)
git add src/login/controller.js  # 로그인 유효성 검사 로직 추가
git add src/login/dom.js        # 에러 메시지 표시 기능 추가

# 3. 커밋 (변경사항 상세 설명)
git commit -m "feat: 사용자 로그인 기능 추가

- controller.js: 이메일/비밀번호 유효성 검사 로직 구현
- dom.js: 로그인 실패 시 에러 메시지 표시 기능 추가
- 빈 입력값 검증 및 사용자 피드백 개선"

# 4. 푸시
git push origin feat-user-login
```

## 🤝 기여 방법

1. 이슈 생성 및 GitHub Projects TODO 등록
2. 브랜치 생성 (`feat-{기능이름}`)
3. 기능 개발
4. 포맷팅 검사 (`npm run format`)
5. 커밋 및 푸시
6. Pull Request 생성 **(생성 시 base repository : FES-5-Project1-TEAM-2 변경 )** 꼭 확인해주세요.
7. 코드 리뷰를 진행 안하면 머지 x ( 코드 리뷰는 팀원 2인 이상 )

---

**Last Updated**: 2025.06.24
