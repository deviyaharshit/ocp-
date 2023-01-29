import React, { useEffect, useState } from 'react'
import Adminnavbar from './Adminnavbar';

const Adminuser = () => {
    const [users, setUsers] = useState([])
    let num = 1;

    const getAllUsers = async () => {
        //API Call
        const response = await fetch(`http://localhost:5000/api/auth/fetchalluser`);
        const json = await response.json();
        // console.log(json);
        setUsers(json);
    }

    const deleteUser = async (id) => {
        // API Call
        const response = await fetch(`http://localhost:5000/api/auth/deleteuser/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // const json = await response.json();
        // console.log(json);

        const newUser = users.filter((u) => { return u._id !== id })
        setUsers(newUser);
        alert("User Deleted")
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    return (
        <>
            <Adminnavbar />

            <div className="container">
                <h2 className="text-center my-3">All Users</h2>

                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users.map((u) => (
                        <tr>
                            <th scope="row">{num++}</th>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td><button className="btn btn-sm btn-danger" onClick={() => { deleteUser(u._id); }}>Delete</button></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Adminuser
