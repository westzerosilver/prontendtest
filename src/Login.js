import React from 'react';

const Login = () => {
  const onLoginClick = () => {
    // 소셜 로그인 페이지로 리디렉션
    // window.location.href = "http://localhost:8080/login/oauth2/code/google";
    window.location.href = "https://api.likelion13th-swu.site/login/oauth2/code/google";
  };

  return (
    <div>
      <h1>로그인 페이지</h1>
      <button onClick={onLoginClick}>Google 로그인</button>
    </div>
  );
};

export default Login;
