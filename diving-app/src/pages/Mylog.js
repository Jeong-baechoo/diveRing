import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Header } from '../components/Header';
import DiveLogList from '../components/DiveLogList';
import DiveLogForm from '../components/DiveLogForm';

const DiveLog = () => {
  const [diveLogs, setDiveLogs] = useState([]);
  
  useEffect(() => {
    fetchDiveLogs();
  }, []);

  const fetchDiveLogs = async () => {
    try {
      const response = await axios.get('http://localhost:4000/dive-logs');
      setDiveLogs(response.data);
    } catch (error) {
      console.error('Error fetching dive logs:', error);
    }
  };

  const handleSaveDiveLog = async (newDiveLog) => {
    try {
      const response = await axios.post('http://localhost:4000/dive-logs', newDiveLog);
      if (response.status === 201) {
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
      <TransitionsModal />
      <DiveLogList diveLogs={diveLogs} />
      <div className="dive-log-form">
        <h2>다이빙 로그 작성</h2>
        <DiveLogForm onSaveDiveLog={handleSaveDiveLog} />
      </div>
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

function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>다이빙 기록</Button>
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
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}