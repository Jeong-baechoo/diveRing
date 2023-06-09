import React from 'react';

const DiveLogList = ({ diveLogs }) => {
  return (
    <div className="dive-log-list">
      {diveLogs.length > 0 ? (
        <ul>
          {diveLogs.map((diveLog) => (
            <li key={diveLog.id}>
              <div>장소: {diveLog.location}</div>
              <div>날짜: {diveLog.date}</div>
              <div>깊이: {diveLog.depth}</div>
              <div>수중 체류 시간: {diveLog.duration}</div>
            </li>
          ))}
        </ul>
      ) : (
        <p>다이빙 기록이 없습니다.</p>
      )}
    </div>
  );
};

export default DiveLogList;
