import React, { useEffect } from 'react';

const OAuthRedirect = () => {
  useEffect(() => {
    const getTokenFromResponse = async () => {
      try {
        // 서버로부터 토큰을 받아오는 fetch 요청
        const response = await fetch('https://port-0-i-gacha-backend-m7ogd43l77318f45.sel4.cloudtype.app/api/user/tokenVerification', {
          method: 'GET',
          credentials: 'include', // 쿠키를 포함해서 요청 보내기
        });
        // const response = await fetch('http://localhost:8080/api/user/tokenVerification', {
        //   method: 'GET',
        //   credentials: 'include', // 쿠키를 포함해서 요청 보내기
        // });

        // 응답 헤더에서 JWT 토큰을 추출
        const jwtToken = response.headers.get('Authorization');
// 
        if (jwtToken) {
          // JWT 토큰을 localStorage에 저장
          localStorage.setItem('access_token', jwtToken);
          console.log('JWT 토큰이 localStorage에 저장되었습니다:', jwtToken);
        } else {
          console.log('서버 응답에서 JWT 토큰을 찾을 수 없습니다.');
        }
      } catch (error) {
        console.error('서버 요청 중 에러 발생:', error);
      }
    };

    // 로그인 후 리디렉션된 페이지에서 토큰 처리
    getTokenFromResponse();
  }, []);

  return (
    <div>
      <h1>로그인 후, 토큰을 로컬 스토리지에 저장 중...</h1>
    </div>
  );
};

export default OAuthRedirect;
