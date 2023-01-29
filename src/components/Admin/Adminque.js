import React, { useEffect, useState } from 'react'
import Adminnavbar from './Adminnavbar'

const Adminque = () => {

    const [questions, setQuestions] = useState([])
    let num = 1;

    const getAllQuestions = async () => {
        //API Call
        const response = await fetch(`http://localhost:5000/api/question/fetchallquestion`);
        const json = await response.json();
        // console.log(json);
        setQuestions(json);
    }

    const deleteQuestion = async (id) => {
        // API Call
        const response = await fetch(`http://localhost:5000/api/question/deletequestion/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // const json = await response.json();
        // console.log(json);

        const newQue = questions.filter((q) => { return q._id !== id })
        setQuestions(newQue);
        alert("Question Deleted")
    }

    useEffect(() => {
        getAllQuestions()
    }, [])

    return (
        <>
            <Adminnavbar />

            <div className="container">
                <h2 className="text-center my-3">All Questions</h2>

                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Category</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {questions.map((ques) => (
                            <tr>
                                <th scope="row">{num++}</th>
                                <td>{ques.title}</td>
                                <td>{ques.description}</td>
                                <td>{ques.category}</td>
                                <td><button className="btn btn-sm btn-danger" onClick={() => { deleteQuestion(ques._id); }}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Adminque
