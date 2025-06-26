export const createRank = (data, index) => {
  return /* html */ `
    <div class="${index === 0 ? 'isFirst' : 'rankingItems'}">
      <div class="userInfo">
        <p class="ranking ">${index + 1}</p>
        ${
          index === 0
            ? '<img class="userImg" src="./assets/icon/king.png" alt="1등" />'
            : '<img class="userImg" src="./assets/icon/ranker.png" alt="유저" />'
        }
        <p class="nickname">${data.name}</p>

      </div>
              <div class="rank-score">
          ${
            index === 0
              ? '<img class="medalImg" src="./assets/icon/gold.png" alt="금메달" />'
              : index === 1
                ? '<img class="medalImg" src="./assets/icon/silver.png" alt="은메달" />'
                : index === 2
                  ? '<img class="medalImg" src="./assets/icon/bronze.png" alt="동메달" />'
                  : ''
          }
          <span class="riseNumber ">${data.score}</span>
        </div>
    </div>
   `;
};

export const createBoard = data => {
  return /* html */ `
  <li class="communityContents">
    <span class="postTag">${data.tag}</span>
    <p class="postTitle">${data.title}</p>
    <span class="createdDate">${data.createdAt}</span>
  </li>
  `;
};
