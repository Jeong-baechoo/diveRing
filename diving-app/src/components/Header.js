import { duration } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {Logouted} from '../features/Auth/authSlice';
import { initinfo } from '../features/User/userSlice';
export function Header() {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth.islogin);

  const handleLogout = () => {
    dispath(Logouted());
    dispath(initinfo());
    navigate("/");
  };
  return (
    <header>
      <div className="logo">
        <Link to="/">디브링</Link>
      </div>
      <nav className="nav-section">
        <Link to="/spot">다이빙 스팟</Link>
        {auth  ? (
          <div>
            <Link to="/mylog">나의 로그</Link>
            <button onClick={handleLogout}>로그아웃</button>
          </div>
        ) : (
          <div>
            <Link to="/signin">로그인</Link>
            <Link to="/signup">회원가입</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
