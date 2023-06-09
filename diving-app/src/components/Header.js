import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';


export function Header() {
    return (
      <header>
        <div className="logo">
          <Link to="/">디브링</Link>
        </div>
        <nav className="nav-section">
          <Link to="/spot">다이빙 스팟</Link>
          <Link to="/mylog">나의 로그</Link>
          <Link to="/signin">로그인</Link>
          <Link to="/signup">회원가입</Link>
        </nav>
      </header>
    );
  }

  