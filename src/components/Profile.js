import React, { useState } from 'react'
import { useEffect } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Profile = () => {

    const [codes, setCodes] = useState([]);

    const fetchAllCodes = async () => {
        const response = await fetch(`http://localhost:5000/api/code/fetchusercodes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('OCPtoken')
            },
        });
        const json = await response.json();
        setCodes(json);
    };

    useEffect(() => {
        fetchAllCodes();
    }, [])
    return (
        <>
        <Navbar />

        <div className='container'>
            <h4 className='text-center my-3'>All Codes Submitted By Me</h4>

            {codes.length === 0 && 'Nothing Here To Display...'}

            <div className="row my-4">
                {codes.map((c) => (
                    <div className="col-md-12 my-2">
                        <div className="card">
                            <div className="card-body"> 
                                <h5 className="card-title">Title : {c.question}</h5>
                                <p className="card-text">Code : {c.usercode}</p>
                                <p className="card-text">Category : {c.category}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <Footer />
        </>
    )
}

export default Profile
