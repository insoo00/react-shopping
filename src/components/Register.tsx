import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from './UserContext';
import "../styles/Register.css";

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');
  const { addUser } = useUserContext();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && password && id) {
      addUser({ id, password, name, email });
      setMessage('등록 성공!');
      navigate('/login'); // 로그인 페이지로 리디렉션
    } else {
      setMessage('모든 필드를 입력해주세요.');
    }
  };

  return (
    <div>
  <h2>Register</h2>
  <div className='register-div'>
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
        <label>이름</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>이메일</label>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      <button className='register-btn'>가입하기</button>
    </form>
  </div>

  {message && <p>{message}</p>}
</div>

  );
}