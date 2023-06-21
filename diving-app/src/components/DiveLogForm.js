//20191064 정용환 DiveLogForm.js

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles'

const defaultTheme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
const DiveLogForm = ({ onSaveDiveLog }) => {
  console.log(onSaveDiveLog);
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [depth, setDepth] = useState('');
  const [duration, setDuration] = useState('');
  const userid = useSelector((state) => state.user.userinfo.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDiveLog = {
      location,
      date,
      depth,
      duration,
      userid,
    };
    onSaveDiveLog(newDiveLog);
    setLocation('');
    setDate('');
    setDepth('');
    setDuration('');
  };

  return (
  <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="xs">
    <Box component="form" onSubmit={handleSubmit}  sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="장소"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="날짜"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="깊이"
            value={depth}
            onChange={(e) => setDepth(e.target.value)}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="수중 체류 시간"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            로그 기록
          </Button>
        </Grid>
      </Grid>
    </Box>
    </Container>
  </ThemeProvider>
  );
};

export default DiveLogForm;
