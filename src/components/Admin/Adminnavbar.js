import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Adminnavbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('OCPadmin');
        navigate("/");
    }

    return (
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/admin">Dashboard</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/allquestion">All Questions</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/allcode">All Codes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/alluser">All Users</Link>
                        </li>

                    </ul>

                    <button className='btn btn-outline-primary btn-light' onClick={handleLogout}>LogOut</button>

                </div>
            </div>
        </nav>
    )
}

export default Adminnavbar