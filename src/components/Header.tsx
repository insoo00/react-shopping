// src/components/Header.tsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

interface HeaderProps {
  onCategoryChange: (category: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onCategoryChange }) => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__logo">
          <Link to="/">29CM</Link>
        </div>

        <div className="header__search">
          <input type="text" placeholder="검색어를 입력하세요" />
          <button type="submit">검색</button>
        </div>

        <div className="header__user-menu">
          <Link to="/login">로그인</Link>
          <Link to="/register">회원가입</Link>
          <Link to="/cart">장바구니</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
