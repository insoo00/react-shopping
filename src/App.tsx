// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './components/UserContext';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Register from './components/Register';
import Login from './components/Login';
import Cart from "./components/Cart";
import './App.css';
// 기타 필요한 컴포넌트 임포트

const App: React.FC = () => {
  return (
    <UserProvider>
      <Router>
        <Header />
        {/* 라우트 설정 */}
        <Routes>
          <Route path='/' element={<MainContent />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
};

export default App;
