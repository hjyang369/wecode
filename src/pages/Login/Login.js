import React from "react";
//import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

function Login() {
  const navigate = useNavigate();

  function goToMain() {
    navigate("/main");
  }

  return (
    <div className="login">
      <div className="container">
        <h1>westagram</h1>
        <div className="inputandbutton">
          <input id="name" placeholder="전화번호, 사용자 이름 또는 이메일" />
          <input id="password" type="password" placeholder="비밀번호" />
          <button id="button" onClick={goToMain}>
            로그인
          </button>
          {/* 링크로 페이지 라우팅
        <button id="button">
          <Link to="/Main">로그인</Link>
        </button> */}
        </div>
        <p>비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
}

export default Login;
