//학번 20191064 이름 정용환 Mylog.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { Header } from '../components/Header';
import DiveLogList from '../components/DiveLogList';
import DiveLogForm from '../components/DiveLogForm';
import { useDispatch, useSelector } from 'react-redux';
import { getlogs } from '../features/User/userSlice';

const DiveLog = () => {
  const [diveLogs, setDiveLogs] = useState([]);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userinfo.id);
  const divelog = useSelector((state) => state.user.divelog);
  useEffect(() => {
    fetchDiveLogs();
  }, []);

  const fetchDiveLogs = async () => {
    try {
      const response = await axios.get('http://localhost:4000/dive-logs', { // 다이빙 로그 요청
  params: {
    userId: userId
  }
});
      dispatch(getlogs(response.data)); // 서버에서 다이브로그 가져와서 상태에 저장
      setDiveLogs(response.data);
    } catch (error) {
      console.error('Error fetching dive logs:', error);
    }
  };

  const handleSaveDiveLog = async (newDiveLog) => { // 새로운 다이빙 로그를 저장하는 함수
    try {
      const response = await axios.post('http://localhost:4000/dive-logs', newDiveLog); 
      if (response.status === 201) {
        dispatch(getlogs(response.data));
        setDiveLogs([...diveLogs, response.data]);
      } else {
        console.error('Error saving dive log:', response.data);
      }
    } catch (error) {
      console.error('Error saving dive log:', error);
    }
  };

  return (
    <div>
      <Header />
      {/* 모달 창에 입력받는 폼을 작성하기 위한 컴포넌트 */}
      <TransitionsModal onSaveDiveLog={handleSaveDiveLog}/> 
      {/* react의 장점을 활용하기 위해서 다이빙 리스트는 컴포넌트로 만들어 props로 다이빙 기록을 전달 */}
      <DiveLogList props={diveLogs} /> 
    </div>
  );
};

export default DiveLog;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function TransitionsModal({ onSaveDiveLog }) {
  console.log(onSaveDiveLog);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" size="large">다이빙 기록</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {/* 모달 창안에 다이빙 기록을 위한 form 컴포넌트를 만듬 */}
            <DiveLogForm onSaveDiveLog={onSaveDiveLog} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}