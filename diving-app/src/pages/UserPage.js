import React from 'react'
import { Header } from '../components/Header'
import { useLocation } from 'react-router-dom'

const UserPage = () => {
  const location = useLocation();
  return (
    <div>
      <Header></Header>
      <p1> 유저페이지</p1>
    </div>
    
  )
}

export default UserPage