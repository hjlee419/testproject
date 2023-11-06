import React, { useState } from 'react';
import '../LoginForm.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기에 로그인 로직을 구현합니다.
    console.log('로그인 시도:', username, password);
  };

  return (
    <div className="container">
    <div className="row justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="col-md-6 col-lg-4">
        <div className="card">
          <h2 className="card-header text-center"><img src='logo.svg' style={{ marginRight: '10px', width:"40px", height:"40px" }} />Machine 365</h2>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="userId" className="form-label">아이디</label>
                <input type="email" className="form-control" id="userId" placeholder="아이디를 입력하세요" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">비밀번호</label>
                <input type="password" className="form-control" id="password" placeholder="비밀번호를 입력하세요" />
              </div>
              <button type="submit" className="btn btn-primary w-100 mb-2">로그인</button>
              <button type="button" className="btn btn-secondary w-100">회원가입</button>
            </form>
            <footer className="footer mt-auto py-3 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col d-flex align-items-center">
                            {/* 언어 선택 콤보 박스 */}
                            <select className="form-select form-select-sm me-2" style={{ width: 'auto' }}>
                                <option value="English">English</option>
                                <option value="Korean">한국어</option>
                                {/* 추가 언어 옵션 */}
                            </select>
                        </div>
                        <div className="col d-flex justify-content-end align-items-center">
                            {/* 저작권 텍스트 */}
                            <span className="text-muted">© 2023 Machine 365</span>
                        </div>
                    </div>
                </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default LoginForm;
