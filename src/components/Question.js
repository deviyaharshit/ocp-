import Editor from '@monaco-editor/react';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import Footer from './Footer';
import Navbar from './Navbar';

const Question = () => {

    const { que } = useParams();
    const [question, setQuestion] = useState([])
    const [code, setCode] = useState("");
    const [ques, setQues] = useState("");
    const [cat, setCat] = useState("");
    const navigate = useNavigate();

    const handleEditorChange = (e, value) => {
        setCode(e);
        setQues(que);
        setCat(question[0].category);
        // console.log(ques, cat)
    }

    const submit = async () => {

        const response = await fetch("http://localhost:5000/api/code/addcode", {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('OCPtoken')
            },
            body: JSON.stringify({ question: ques, usercode: code, category: cat })
        });
        const res = await response.json();
        console.log(res)

        setCode("");
        alert("Code Submitted Successfully")
        navigate(`/questions/${cat}`);
    }

    const fetchAllQuestion = async () => {
        const response = await fetch(`http://localhost:5000/api/question/questiondetail/${que}`);
        const json = await response.json();
        setQuestion(json);
    }
    useEffect(() => {
        fetchAllQuestion();
        // fetchDet();
    }, [])

    return (
        <>

        <Navbar />

        <div className='container'>

            <div className="row">

                <div className="col">
                    <div className="row my-3">
                        {question.map((q) => (
                            q.title === que ? (
                                <div className='col-md-12'>
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title">{q.title}</h5>
                                            <p className="card-text">{q.description}</p>
                                            <p className='card-text'>{q.category}</p>
                                        </div>
                                    </div>
                                </div>
                            ) :
                                ""
                        ))}
                    </div>
                </div>

                {!localStorage.getItem('OCPtoken') ? <div className='col text-center text-danger h2 my-3'>Please, Logged In To Solve This Challenge</div> : <div className="col">

                    <div className="monaco-editor my-3">
                        <Editor
                            height="80vh"
                            theme="vs-dark"
                            onChange={handleEditorChange}
                            defaultValue="// Start Coding Here"
                        />
                    </div>

                    <div className="submit-btn mb-4">
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary" type="button" onClick={() => { submit() }}>Submit Code</button>
                        </div>
                    </div>

                </div>}

            </div>

        </div>

        <Footer />

        </>
    )
}

export default Question
