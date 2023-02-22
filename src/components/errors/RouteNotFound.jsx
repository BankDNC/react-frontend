import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function RouteNotFound() {

  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("token") === null) {
      navigate("/auth/login");
    } else {
      navigate("/dashboard");
    }
  
    
  }, [])
  

  return (
    <div>RouterHandler</div>
  )
}
