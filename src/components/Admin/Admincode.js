import React, { useEffect, useState } from 'react'
import Adminnavbar from './Adminnavbar';

const Admincode = () => {
    const [codes, setCodes] = useState([])
    let num = 1;

    const getAllCodes = async () => {
        //API Call
        const response = await fetch(`http://localhost:5000/api/code/allcodes`);
        const json = await response.json();
        // console.log(json);
        setCodes(json);
    }

    const deleteCode = async (id) => {
        // API Call
        const response = await fetch(`http://localhost:5000/api/code/deletecodebyadmin/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // const json = await response.json();
        // console.log(json);

        const newCode = codes.filter((c) => { return c._id !== id })
        setCodes(newCode);
        alert("Code Deleted")
    }

    useEffect(() => {
        getAllCodes()
    }, [])

    return (
        <>
            <Adminnavbar />

            <div className="container">
                <h2 className="text-center my-3">All Codes</h2>

                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User</th>
                            <th scope="col">Question</th>
                            <th scope="col">Code</th>
                            <th scope="col">Category</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {codes.map((c) => (
                        <tr>
                            <th scope="row">{num++}</th>
                            <td>{c.userid}</td>
                            <td>{c.question}</td>
                            <td>{c.usercode}</td>
                            <td>{c.category}</td>
                            <td><button className="btn btn-sm btn-danger" onClick={() => { deleteCode(c._id); }}>Delete</button></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Admincode
