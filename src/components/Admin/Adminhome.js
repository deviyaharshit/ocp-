import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Adminnavbar from './Adminnavbar';

const Adminhome = () => {

    let navigate = useNavigate();

  const checkAdmin = () => {
    if(localStorage.getItem('OCPadmin')!=="true")
      navigate("/admin/login");
  }

  useEffect(() => {
    checkAdmin();
  }, []);

  return (
    <>
    <Adminnavbar />

    <div className='container'>
      Dashboard
    </div>

    </>
  )
}

export default Adminhome
