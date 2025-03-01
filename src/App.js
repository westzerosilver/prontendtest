import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';  // 로그인 버튼이 있는 화면
import OAuthRedirect from './OAuthRedirect';  // 리디렉션 후 토큰 처리

function App() {
  return (
    <Router>
      <Routes>
        {/* 로그인 페이지 */}
        <Route path="/" element={<Login />} />
        {/* 소셜 로그인 후 리디렉션 페이지 */}
        <Route path="/login/oauth2/code/google" element={<OAuthRedirect />} />
      </Routes>
    </Router>
  );
}

export default App;
