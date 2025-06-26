// 페이지 경로(path)와 해당 페이지를 불러오는 함수
const routes = [
  { path: '/', load: () => {} }, //하드 코딩된 html
  { path: '/list', load: () => loadPage('/list') },
  { path: '/detail', load: () => loadPage('/detail') },
  { path: '/write', load: () => loadPage('/write') },
  { path: '/login', load: () => loadPage('/login') },
];

/**
 * 해당 페이지의 HTML과 JS를 동적으로 불러와서 app 영역에 렌더링하는 함수
 * @param {string} pagePath - 페이지 경로 (예: '/list')
 * @returns {Promise<void>}
 */
async function loadPage(pagePath) {
  const pageName = pagePath.slice(1); // /list → list
  try {
    // HTML 불러오기
    const htmlRes = await fetch(`/pages${pagePath}/${pageName}.html`);
    if (!htmlRes.ok) throw new Error('HTML not found');
    const html = await htmlRes.text();
    document.getElementById('app').innerHTML = html;

    // JS 동적으로 불러오기 (모듈)
    try {
      await import(`/pages${pagePath}/${pageName}.js`);
    } catch (e) {
      console.log('JS 파일이 없거나 오류:', e);
    }
  } catch (e) {
    document.getElementById('app').innerHTML = '<h1>404 Not Found</h1>';
  }
}

// 현재 경로에 맞는 페이지 찾기
function findRoute(path) {
  return routes.find(route => route.path === path);
}

// 라우팅 실행 함수
export async function renderPage(path) {
  const route = findRoute(path);
  if (!route) {
    document.getElementById('app').innerHTML = '<h1>404 Not Found</h1>';
    return;
  }
  await route.load();
}

// 라우터 초기화
export function setupRouter() {
  // 네비게이션 링크 클릭 시
  document.addEventListener('click', e => {
    if (e.target.matches('a[data-link]')) {
      e.preventDefault();
      const path = e.target.getAttribute('href');
      history.pushState(null, '', path);
      //url을 변경하고, 해당 이벤트를 감지해 변경된 url에 맞는 컴포넌트를 routes 배열에서 찾아 렌더링
      renderPage(path);
    }
  });

  // 뒤로/앞으로 이동 시
  window.addEventListener('popstate', () => {
    renderPage(window.location.pathname);
  });
}
