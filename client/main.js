// 게시글 데이터 가져오기
function getPosts(category = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const url = category
      ? `http://localhost:5050/posts?category=${category}`
      : "http://localhost:5050/posts";
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const posts = JSON.parse(xhr.responseText);
          resolve(posts);
        } else {
          reject(new Error(`HTTP Error: ${xhr.status}`));
        }
      }
    };

    xhr.onerror = function () {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });
}

// 유저데이터 가져오기
function getUserInfo() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:5050/userInfo", true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const userInfo = JSON.parse(xhr.responseText);
          resolve(userInfo);
        } else {
          reject(new Error(`HTTP Error: ${xhr.status}`));
        }
      }
    };

    xhr.onerror = function () {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });
}

// 개인 랭킹 생성
function generatePersonRanking(userInfo) {
  return [...userInfo].sort((a, b) => b.score - a.score).slice(0, 5); // 상위 5명
}

// 팀 랭킹 생성
function generateTeamRanking(userInfo) {
  const teamScores = {};

  // 팀별 점수 합계
  userInfo.forEach((user) => {
    if (!teamScores[user.teamName]) {
      teamScores[user.teamName] = 0;
    }
    teamScores[user.teamName] += user.score;
  });

  // 팀 랭킹 배열 생성 및 정렬
  return Object.entries(teamScores)
    .map(([teamName, totalScore]) => ({
      name: teamName,
      score: totalScore,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5); // 상위 5팀
}

// 팀랭킹 표시
function displayTeamRanking(teamData, containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = teamData
    .map((team, index) => {
      const rank = index + 1;
      let badgeImg = "";
      let upArrowImg = '<img src="./assets/icons/redUp.png" alt="">';
      // 순위별 메달 이미지
      if (rank === 1) badgeImg = '<img src="./assets/icons/gold.png" alt="">';
      else if (rank === 2)
        badgeImg = '<img src="./assets/icons/silver.png" alt="">';
      else if (rank === 3)
        badgeImg = '<img src="./assets/icons/bronze.png" alt="">';

      return `
      <div class="ranking-item ${rank === 1 ? "rank-1" : ""}">
        <span class="rank">${rank}</span>
        ${rank === 1 ? `<span class="profile"><img src="./assets/icons/king.png" alt=""></span>` : `<span class="profile"><img src="./assets/icons/ranker.png" alt=""></span>`}
        <span class="name">${team.name}</span>
        ${rank <= 3 ? `<span class="badge">${badgeImg}</span>` : ""}
        <span class="score">${upArrowImg} ${team.score}</span>
      </div>
    `;
    })
    .join("");
}

// 개인 랭킹 표시
function displayPersonRanking(personData, containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = personData
    .map((user, index) => {
      const rank = index + 1;
      let badgeImg = "";
      let upArrowImg = '<img src="./assets/icons/redUp.png" alt="">';

      // 순위별 메달 이미지 설정
      if (rank === 1) badgeImg = '<img src="./assets/icons/gold.png" alt="">';
      else if (rank === 2)
        badgeImg = '<img src="./assets/icons/silver.png" alt="">';
      else if (rank === 3)
        badgeImg = '<img src="./assets/icons/bronze.png" alt="">';

      return `
      <div class="ranking-item ${rank === 1 ? "rank-1" : ""}">
        <span class="rank">${rank}</span>
        ${rank === 1 ? `<span class="profile"><img src="./assets/icons/king.png" alt=""></span>` : `<span class="profile"><img src="./assets/icons/ranker.png" alt=""></span>`}
        <span class="name">${user.name}</span>
        ${rank <= 3 ? `<span class="badge">${badgeImg}</span>` : ""}
        <span class="score">${upArrowImg} ${user.score}</span>
      </div>
    `;
    })
    .join("");
}

// 랭킹 로드
async function loadRankings() {
  try {
    const userInfo = await getUserInfo();

    const personRanking = generatePersonRanking(userInfo);
    const teamRanking = generateTeamRanking(userInfo);

    displayTeamRanking(teamRanking, "#team-ranking");
    displayPersonRanking(personRanking, "#person-ranking");

    console.log("개인 랭킹:", personRanking);
    console.log("팀 랭킹:", teamRanking);
  } catch (error) {
    console.error("랭킹 데이터 로드 실패:", error);
  }
}

// 게시글 생성
function displayPosts(posts, targetContainer) {
  const container = document.querySelector(targetContainer);
  if (!container) return;

  if (posts.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: #666;">
        게시글이 없습니다.
      </div>
    `;
    return;
  }

  container.innerHTML = posts
    .map(
      (post) => `
    <div class="post-item" data-post-id="${post.id}">
      <div class="post-title">${post.title}</div>
      <div class="post-date">${post.createAt}</div>
    </div>
  `
    )
    .join("");
}

// 시간 설정
function updateTime() {
  const today = new Date();
  const timeNode = document.querySelector(".update-time");
  if (timeNode) {
    const formattedDate = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, "0")}.${String(today.getDate()).padStart(2, "0")} ${String(today.getHours()).padStart(2, "0")}:${String(today.getMinutes()).padStart(2, "0")}`;
    timeNode.textContent = `${formattedDate}`;
  }
}

// 탭 전환 및 데이터 로드
async function switchTab(tabName) {
  try {
    updateTime();
    await loadRankings();

    // 카테고리 매핑
    const categoryMap = {
      free: "1",
      study: "2",
    };

    // 해당 카테고리의 게시글 가져오기
    const posts = await getPosts(categoryMap[tabName]);

    // 게시글 표시
    displayPosts(posts, `#${tabName} .board-list`);

    console.log(`${tabName} 게시판 데이터 로드 완료:`, posts);
  } catch (error) {
    console.error(`${tabName} 게시판 데이터 로드 실패:`, error);
  }
}

async function initializeBoard() {
  try {
    updateTime();

    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    if (tabButtons.length > 0) {
      tabButtons.forEach((button) => {
        button.addEventListener("click", async () => {
          const targetTab = button.dataset.tab;

          // 모든 탭 비활성화
          tabButtons.forEach((btn) => btn.classList.remove("active"));
          tabContents.forEach((content) => content.classList.remove("active"));

          // 선택된 탭 활성화
          button.classList.add("active");
          const targetContent = document.getElementById(targetTab);
          if (targetContent) {
            targetContent.classList.add("active");
          }

          // 해당 탭의 데이터 로드
          await switchTab(targetTab);
        });
      });
    }

    // 초기 데이터 로드 (기본 자유게시판)
    await switchTab("free");

    // 사용자 정보 로드
    const userInfo = await getUserInfo();
    console.log("사용자 정보:", userInfo);
  } catch (error) {
    console.error("게시판 초기화 실패:", error);
  }
}

document.addEventListener("DOMContentLoaded", initializeBoard);
