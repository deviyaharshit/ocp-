import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Adminlogin = () => {

    let navigate = useNavigate();

    const checkUser = () => {
        if (localStorage.getItem('OCPadmin')) {
            navigate("/admin");
        }
    }
    const checkAdmin = () => {
        let name = document.getElementById('name');
        let password = document.getElementById('password')

        if (name.value === 'admin' && password.value === 'admin') {
            localStorage.setItem("OCPadmin", "true");
            alert("Login Successful..");
            navigate("/admin");
        }
        else
            alert("Login Failed...")
    }

    useEffect(() => {
        checkUser();
    }, []);

    return (
        <>
            <div className='container'>
                <form onSubmit={checkAdmin} className="mt-3">
                    <h3 className='text-center my-3'>Admin Login</h3>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" name="name" className="form-control border-primary" id="name" aria-describedby="emailHelp" minLength={5} required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name="password" className="form-control border-primary" id="password" minLength={5} required />
                    </div>

                    <div className="text-center">
                    <button type="submit" className="btn btn-primary thread-btn">Login</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Adminlogin
