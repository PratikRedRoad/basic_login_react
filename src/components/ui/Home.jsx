import React from 'react'
import { useEffect } from 'react';
import Title from './Title'
import {useNavigate} from 'react-router-dom';

function Home() {
  const navigate = useNavigate()
  

  useEffect(() => {
    const sessionId = document.cookie.split('; ').find(row => row.startsWith('session_id='));
    console.log(sessionId);
    if (!sessionId) {
      navigate('/login');
    }
  }, []);
  return (
    <div>
        <Title/>
    </div>
  )
}

export default Home