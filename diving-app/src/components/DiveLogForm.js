import React, { useState } from 'react';

const DiveLogForm = ({ onSaveDiveLog }) => {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [depth, setDepth] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDiveLog = {
      location,
      date,
      depth,
      duration,
    };
    onSaveDiveLog(newDiveLog);
    setLocation('');
    setDate('');
    setDepth('');
    setDuration('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="location">장소:</label>
        <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="date">날짜:</label>
        <input type="text" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="depth">깊이:</label>
        <input type="text" id="depth" value={depth} onChange={(e) => setDepth(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="duration">수중 체류 시간:</label>
        <input type="text" id="duration" value={duration} onChange={(e) => setDuration(e.target.value)} />
      </div>
      <button type="submit">로그 기록</button>
    </form>
  );
};

export default DiveLogForm;
