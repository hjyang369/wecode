import "./Login.css";

function Login() {
  return (
    <div class="container">
      <h1>westagram</h1>
      <div class="inputandbutton">
        <input id="name" placeholder="전화번호, 사용자 이름 또는 이메일" />
        <input id="password" type="password" placeholder="비밀번호" />
        <button id="button">로그인</button>
      </div>
      <p>비밀번호를 잊으셨나요?</p>
    </div>
  );
}

export default Login;
