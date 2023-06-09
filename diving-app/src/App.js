import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Mylog from './pages/Mylog';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Spot from './pages/Spot';
import './App.css';
import Dashboard from './pages/Dashboard';


const App = () => {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spot" element={<Spot />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/mylog" element={<Mylog />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    </div>
  );
};

export default App;
