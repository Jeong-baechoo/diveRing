// 20191064 정용환 Singin.js
import * as React from 'react';
import { useState, useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Header } from '../components/Header';
import { useDispatch, useSelector } from "react-redux";
import { Logined} from '../features/Auth/authSlice';
import { userInfo } from '../features/User/userSlice';

function SignIn() {
  const dispatch = useDispatch(); 
  const auth = useSelector((state) => state.auth.islogin); //리덕스 스토어에서 state를 불러옴
  const userid = useSelector((state) => state.user.userID);
  const navigate = useNavigate();
  const [email, setEmail] = useState(''); // useState 훅을 통해서 state를 초기화
  const [password, setPassword] = useState(''); 
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    if(auth){
      navigate("/"); //auth의 상태가 ture로 바뀔경우 로그인에 성공한 것으로 간주하여 메인페이지로 리다이렉션
    }
  }, [auth])
  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
   
    const formData = { email, password };
    
    axios.post('http://localhost:4000/signin', formData) //유저의 로그인 데이터를 서버로 post
      .then(response => {
        console.log(response.data); // 서버로부터 받은 응답 데이터 출력
        axios.get('http://localhost:4000/user') 
        .then(response => { //인증에 성공한 경우
          dispatch(userInfo(response.data)); //리덕스의 디스패치를 이용하여 유저의 데이터를 전역에서 관리
          dispatch(Logined());
        })
      })
      .catch(error => {
        console.error(error);
      });
  };
  
  return (
    <ThemeProvider theme={createTheme()}>
      <Header/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSignIn} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={handleEmailChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default SignIn;
