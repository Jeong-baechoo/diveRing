// server.js (Node.js with Express.js)

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 예시 다이빙 로그 데이터
const diveLogs = [
  {
    id: 1,
    location: '다이빙 장소 1',
    date: '2023-06-01',
    depth: 15,
    duration: 40,
  },
  {
    id: 2,
    location: '다이빙 장소 2',
    date: '2023-06-02',
    depth: 20,
    duration: 50,
  },
];

// GET /dive-logs 요청 처리
app.get('/dive-logs', (req, res) => {
  res.json(diveLogs);
});

// POST /dive-logs 요청 처리
app.post('/dive-logs', (req, res) => {
  const { location, date, depth, duration } = req.body;

  // 새로운 다이빙 로그 생성
  const newDiveLog = {
    id: diveLogs.length + 1,
    location,
    date,
    depth,
    duration,
  };

  // 다이빙 로그 추가
  diveLogs.push(newDiveLog);

  res.status(201).json(newDiveLog);
});
// 회원가입 API
app.post('/signup',(req, res) => {

})
const users = [
  { id: 1, email: '1', password: '1' },
  { id: 2, email: 'user2@example.com', password: 'password2' },
  { id: 3, email: 'user3@example.com', password: 'password3' },
];

// 인증된 사용자를 저장할 변수
let authenticatedUser = null;

// 로그인 API
app.post('/signin', (req, res) => {
  const { email, password } = req.body;
  // 실제로는 사용자 데이터베이스에서 인증 정보를 확인하는 로직이 여기에 들어가야 합니다.
  const user = users.find((user) => user.email === email && user.password === password); // 유저 객체 생성 속성으로는 이메일과 페스워드를 가지고있음
  if (user) {
    // res.redirect('http://localhost:3000/dashboard');
    authenticatedUser = user;
    res.json({Email: user.email});
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
});

// 인증된 사용자를 반환하는 API
app.get('/user', (req, res) => {
  if (authenticatedUser) {
    res.status(200).json({ email: authenticatedUser.email });
  } else {
    res.sendStatus(401);
  }
});

// 로그아웃 API
app.post('/logout', (req, res) => {
  authenticatedUser = null;
  res.sendStatus(200);
});

// 서버 시작
app.listen(4000, () => {
  console.log('서버가 4000번 포트에서 실행 중입니다.');
});

