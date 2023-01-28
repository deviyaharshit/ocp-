import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    
    const [login, setLogin] = useState({
        email: "",password: ""
    });

    let name, value;
    const handleInputs = (e) => {
        // console.log(e);
        name = e.target.name;
        value = e.target.value;

        setLogin({ ...login, [name]: value });
    }
    const PostData = async (e) => {
        e.preventDefault();

        const { email, password } = login;

        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            // mode: "no-cors",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjNmY4NGRmZGFhYjEwZDFmMWFmZDVlIn0sImlhdCI6MTY1ODE0NjM3M30.8ntK3bNSi9hvj7bXP6fZyDbTfmB6GKzfxbKufifBnyY'
                // 'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ email, password })
        });
        const res = await response.json();
        console.log(res)

        // getAllThread();
        setLogin({ email: "", password: "" });

        if (res.success) {
            // localStorage.setItem("token", json.authToken);
            // navigate("/");
            // props.showAlert("Account Created Successfully","success");
            localStorage.setItem("OCPtoken", res.authToken);
            // alert("Successfully Login");
            navigate("/");
          }else {
            // props.showAlert("Invalid Details","danger");
            // if(res.errors[0].msg!='')
            //     alert(res.errors[0].msg);
            alert("Error Occured");
          }
    }

    return (
        <div>
            <section className="vh-100" style={{ backgroundColor: "rgb(152, 217, 241)" }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px", boxShadow: "0px 0px 10px 1px black" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login Form</p>

                                            <form className="mx-1 mx-md-4" method='POST' onSubmit={PostData}>

                                                

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email" onChange={handleInputs} name="email" value={login.email} id="form3Example3c" className="form-control border-primary" minLength={5} required />
                                                        <label className="form-label">Your Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" onChange={handleInputs} name="password" value={login.password} id="form3Example4c" className="form-control border-primary" minLength={6} required />
                                                        <label className="form-label">Password</label>
                                                    </div>
                                                </div>

                                                

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" className="btn btn-primary btn-lg">Login</button>
                                                </div>

                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="Sample" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
