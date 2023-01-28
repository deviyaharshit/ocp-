import Editor from '@monaco-editor/react';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'

const Question = () => {

    const { que } = useParams();
    const [question, setQuestion] = useState([])

    const fetchAllQuestion = async () => {
        const response = await fetch(`http://localhost:5000/api/question/fetchallquestion`);
        const json = await response.json();
        setQuestion(json);
    }

    useEffect(() => {
        fetchAllQuestion();
    }, [])

    return (
        <div className='container'>

            <div class="row">

                <div class="col">
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

                {!localStorage.getItem('OCPtoken') ? <div className='col text-center text-danger h2 my-3'>Please, Logged In To Solve This Challenge</div> : <div class="col">
                    <div className="monaco-editor my-3">
                        <Editor
                            height="80vh"
                            theme="vs-dark"
                            defaultValue="// some comment"
                        />
                    </div>

                    <div className="submit-btn mb-4">
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary" type="button">Submit Code</button>
                        </div>
                    </div>

                </div>}

            </div>

        </div>
    )
}

export default Question
