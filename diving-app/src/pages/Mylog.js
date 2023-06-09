import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
      <h2>다이빙 로그</h2>
      <DiveLogList diveLogs={diveLogs} />
      <div className="dive-log-form">
        <h2>다이빙 로그 작성</h2>
        <DiveLogForm onSaveDiveLog={handleSaveDiveLog} />
      </div>
    </div>
  );
};

export default DiveLog;
