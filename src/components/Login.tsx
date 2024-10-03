import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from './UserContext';
import "../styles/Login.css";

export default function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { users } = useUserContext();
  const { setIsLoggedIn } = useUserContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.id === id && user.password === password
    );
    if (user) {
      const token = Math.random().toString(36).substr(2); // 임의의 토큰 생성
      localStorage.setItem('token', token); // 토큰을 localStorage에 저장
      setMessage(`로그인 성공! 환영합니다, ${user.name}님.`);
      setIsLoggedIn(true); // 로그인 상태 업데이트
      navigate('/'); // 메인 페이지로 리디렉션
    } else {
      setMessage('아이디 또는 비밀번호가 잘못되었습니다.');
    }
  };

  return (
    <div>
  <h2>Login</h2>
  <div className='login-div'>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>아이디</label>
        <input 
          type='text'
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>비밀번호</label>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className='login-btn'>로그인</button>
    </form>
    {message && <p>{message}</p>}
  </div>
</div>
 );
}