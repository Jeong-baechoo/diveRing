// 201910

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
    location: 'Great Barrier Reef, Australia',
    date: '2023-06-01',
    depth: '15',
    duration: '40',
    userid: 1,
  },
  {
    id: 2,
    location: 'Blue Hole, Belize',
    date: '2023-06-02',
    depth: '20',
    duration: '50',
    userid: 1,
  },
  {
    id: 3,
    location: 'Barracuda Point, Sipadan Island',
    date: '2023-06-03',
    depth: '25',
    duration: '45',
    userid: 1,
  },
  {
    id: 4,
    location: 'Shark Alley, South Africa',
    date: '2023-06-04',
    depth: '18',
    duration: '55',
    userid: 1,
  },
  {
    id: 5,
    location: 'Blue Corner, Palau',
    date: '2023-06-05',
    depth: '22',
    duration: '60',
    userid: 1,
  },
  {
    id: 6,
    location: 'Tubbataha Reefs Natural Park, Philippines',
    date: '2023-06-06',
    depth: '30',
    duration: '75',
    userid: 1,
  },
  {
    id: 7,
    location: 'The Great Blue Hole, Belize',
    date: '2023-06-07',
    depth: '24',
    duration: '55',
    userid: 1,
  },
  {
    id: 8,
    location: 'SS Thistlegorm, Red Sea, Egypt',
    date: '2023-06-08',
    depth: '28',
    duration: '70',
    userid: 1,
  },
];


// GET /dive-logs 요청 처리
app.get('/dive-logs', (req, res) => {
  const { userId } = req.query;
  console.log(diveLogs[0].userid);
  // 클라이언트의 아이디와 일치하는 기록 필터링
  const userLogs = diveLogs.filter((log) => log.userid === parseInt(userId));
  res.json(userLogs); // 필터링된 기록을 응답으로 보냄
});


// POST /dive-logs 요청 처리
app.post('/dive-logs', (req, res) => {
  const { location, date, depth, duration, userid} = req.body;
  // 새로운 다이빙 로그 생성
  const newDiveLog = {
    id: diveLogs.length + 1,
    location,
    date,
    depth,
    duration,
    userid
  };

  // 다이빙 로그 추가
  diveLogs.push(newDiveLog);

  res.status(201).json(newDiveLog);
});
// 회원가입 API
app.post('/signup', (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  users.map((user) => {
    console.log(req.body);
  });
  
  // 중복된 이메일 체크
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    // 중복된 이메일이 있는 경우
    return res.status(409).json({ error: 'Email already exists' });
  }

  // 새로운 사용자 생성
  const newUser = {
    id: users.length + 1,
    ...req.body,
  };
  users.push(newUser);
  users.map(user => {
    console.log(user);
  })
  // 회원가입 성공
  return res.status(201).json(newUser);
});

const users = [
  { id: 1, name: "sara",email: '1', password: '1' },
  { id: 2, name: "james",email: 'user2@example.com', password: 'password2' },
  { id: 3, name: "ami",email: 'user3@example.com', password: 'password3' },
];

// 인증된 사용자를 저장할 변수
let authenticatedUser = null;

// 로그인 API
app.post('/signin', (req, res) => {
  const { email, password } = req.body;
  // 실제로는 사용자 데이터베이스에서 인증 정보를 확인하는 로직이 여기에 들어가야 합니다.
  const user = users.find((user) => user.email === email && user.password === password); // 유저 객체 생성 속성으로는 이메일과 페스워드를 가지고있음
  if (user) {
    authenticatedUser = user;
    res.json(authenticatedUser);
    return res.sendStatus(200);
  } else {
    return res.sendStatus(401);
  }
});

// 인증된 사용자를 반환하는 API
app.get('/user', (req, res) => {
  if (authenticatedUser) {
    res.status(200).json(authenticatedUser);
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

