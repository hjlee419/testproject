import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Machine365SVG from '../Machine365.svg'; // Assuming you have this file
import LoginSVG from '../login.svg';
import ViewComSVG from '../3view.com.svg';
import LogoSVG from '../connection.svg'

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('로그인 시도:', username, password);
  };

  // Set the styles for the login form and the machine logo
  const loginFormStyle = {
    position: 'absolute',
    left: '50%',
    top: '272px',
    transform: 'translateX(-50%)',
    maxWidth: '480px', // Max width set to 480px
    width: '100%', // Width is now responsive, set to 100% of its parent's width
    height: '630px', // Height remains constant
    backgroundColor: '#fff',
    border: '1px solid #0024A6',
    padding: '20px',
    boxSizing: 'border-box',
  };
  const logosContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: '178px',
    left: '50%',
    transform: 'translateX(-50%)',
    gap: '8px', // Gap between logos
  };

  const logoStyle = {
    width: '50px',
    height: '50px',
  };

  const machineLogoStyle = {
    position: 'absolute',
    left: '50%',
    top: '228px', // 272px (top of form) - 44px (gap)
    transform: 'translate(-50%, -100%)', // This centers it above the form
  };

  const inputButtonStyle = {
    width: 'calc(100% - 160px)', // Subtract left and right margins from the total width
    height: '48px',
    margin: '10px 80px', // Maintain the 80px margin on both sides
  };

  const logoImageStyle = {
    height: '38px',
    position: 'absolute',
    top: '50px',
    left: '204px',
    right: '204px',
  };

  const labelStyle = {
    alignSelf: 'flex-start', // Aligns the label to the left
    margin: '10px 80px'
  };

  // Styles for the dropdown and 3view.com logo container
  const bottomContainerStyle = {
    display: 'flex',
    position: 'absolute',
    top: '524px',
    left: '80px', // Left margin of 80px
    right: '80px', // Right margin of 80px
    alignItems: 'center',
    justifyContent: 'space-between', // This ensures that the dropdown and logo are pushed to the sides
    width: 'calc(100% - 160px)' // Adjust width for left and right margins
  };


  // Styles for the dropdown
  const dropdownStyle = {
    width: '154px',
    height: '36px',
    marginRight: '18px' // Gap between dropdown and logo
  };

  // Styles for the 3view.com logo
  const viewComStyle = {
    width: '88px',
    height: '22px',
  };


  // Note: You might need to adjust 'top' based on the actual height of your logo

  return (
    <>
      <style>
        {`
    /* Existing styles */
    @media (max-width: 768px) {
      .card {
        padding: 2rem;
      }
      /* Add more responsive styles here */
    }

    /* Adjusting the top position on smaller screens if needed */
    @media (max-width: 576px) {
      .login-form {
        top: 200px; /* Example adjustment for smaller screens */
      }
      /* Other adjustments for smaller screens */
    }
  `}
      </style>
      <div style={{ position: 'relative', height: '100vh', backgroundColor: '#f3f3f3' }}>
        <div style={machineLogoStyle}>
          <img src={LogoSVG} alt="Logo" style={logoStyle} />
          <img src={Machine365SVG} alt="Machine 365" />
        </div>
        <div style={loginFormStyle} className="login-form">
          {/* 로그인 text */}
          <div style={logoImageStyle}>
            <img src={LoginSVG} alt="Login" />
          </div>
          {/* 로그인 form inputs and buttons */}

          <div style={{ marginTop: '68px', width: '100%' }}> {/* Use 100% width for the container */}
            <div style={{ marginBottom: '24px' }}>
              {/* ... */}
              <div style={labelStyle}>
                <label htmlFor="username">아이디</label>
              </div>
              <input
                id="username"
                type="text"
                style={inputButtonStyle}
                placeholder="아이디를 입력해주세요"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: '24px' }}>
              {/* ... */}
              <div style={labelStyle}>
                <label htmlFor="password">비밀번호</label>
              </div>
              <input
                id="password"
                type="password"
                style={inputButtonStyle}
                placeholder="비밀번호를 입력해주세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit} style={{ ...inputButtonStyle, height: '50px', backgroundColor: '#0024A6', color: 'white', border: 'none', marginBottom: '24px' }}>
              로그인
            </button>
            <button style={{ ...inputButtonStyle, height: '50px', backgroundColor: 'white', color: '#0024A6', border: '1px solid #0024A6' }}>
              회원가입
            </button>
          </div>

          {/* Bottom container for the dropdown and 3view.com logo */}
          <div style={bottomContainerStyle}>
            {/* Language Dropdown */}
            <div style={dropdownStyle}>
              <select name="languages" className="form-select">
                <option value="korean">한국어</option>
                <option value="english">영어</option>
              </select>
            </div>

            {/* View.com Icon */}
            <img src={ViewComSVG} alt="3view.com" style={viewComStyle} />
          </div>
        </div>
      </div >
    </>
  );
};

export default LoginForm;
