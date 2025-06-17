/**
 * 깃허브에서 계정 정보를 가져오는 함수
 * @returns {Object} 깃허브 계정 정보
 */
export const githubLogin = async () => {
  const token = 'token';

  try {
    const response = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });

    if (response.ok) {
      const userData = await response.json();
      console.log('GitHub 사용자 데이터:', userData);
      return userData;
    }
  } catch (error) {
    console.error('ERROR: 깃허브 로그인중 에러가 발생했습니다.');
    throw new Error('에러 발생');
  }
};
