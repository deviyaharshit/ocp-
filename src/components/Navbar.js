import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('OCPtoken');
    navigate("/");
  }
  
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">OCP</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

            {!localStorage.getItem('OCPtoken') ? "" : <li className="nav-item"><Link className="nav-link" to="/profile">My Profile</Link></li>}
            
          </ul>

          {!localStorage.getItem('OCPtoken') ? <div><Link to="/signup" className="btn btn-outline-primary btn-light">Sign Up</Link>
            <Link to="/login" className="btn btn-outline-primary btn-light mx-2">Log In</Link></div>
            : <div className='d-flex'>
              {/* <button className='btn nav-btn'><a href="https://av-text-utils.netlify.app/">TextAnalyzer</a></button> */}
              <button className='btn btn-outline-primary btn-light' onClick={handleLogout}>LogOut</button>
              {/* <Link to="/profile"><div className='profile'><img src={UserImg} alt="" /></div></Link> */}
            </div>
          }

          {/* <Link className='btn btn-outline-primary btn-light' to="/login">Login</Link> */}
          {/* <button className="btn btn-outline-primary btn-light">Login</button> */}
          {/* <Link className="btn btn-outline-primary btn-light mx-2" to="/signup">Sign Up</Link> */}

        </div>
      </div>
    </nav>
  )
}

export default Navbar