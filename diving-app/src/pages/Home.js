import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';

const Home = () => {
  return (
    <div className="main-section">
      <Header />
      <div className="image-container">
        <img src="img/ac094be295eac.jpg" alt="바다 사진" className="ocean-image" />
        <h1>전 세계 버디와 함께 바다 속으로 떠나보세요</h1>
      </div>
    </div>
    
  );
};

export default Home;
