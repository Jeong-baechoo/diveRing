// 20191064 정용환 Header.js
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
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
  <Grid container spacing={2}>
    <Grid item>
      <Button component={Link} to="/spot" variant="contained">다이빙 스팟</Button>
    </Grid>
    {auth ? ( //로그인된 상태에서 보이는 화면
      <Grid item>
        <div>
          <Button component={Link} to="/mylog" variant="contained">나의 로그</Button>
          <Button onClick={handleLogout} variant="contained" color="secondary">로그아웃</Button>
        </div>
      </Grid>
    ) : ( // 로그인 안된 상태의 화면
      <Grid item>
        <div>
          <Button component={Link} to="/signin" variant="contained" color="primary">로그인</Button>
          <Button component={Link} to="/signup" variant="outlined" color="primary">회원가입</Button>
        </div>
      </Grid>
    )}
  </Grid>
</nav>
    </header>
  );
}
