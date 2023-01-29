import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import Footer from './Footer';
import Navbar from './Navbar';
import Questioncard from './Questioncard';

const Questions = () => {

    const { cat } = useParams();
    const [question, setQuestion] = useState([]);

    const fetchAllQuestion = async () => {
        const response = await fetch(`http://localhost:5000/api/question/fetchallquestion`);
        const json = await response.json();
        setQuestion(json);
    }

    useEffect(() => {
        fetchAllQuestion();
    }, [])

    return (
        <>
        <Navbar />

        <div className='container'>
            <div className="text-center my-3"><h2>All Questions - {cat}</h2></div>
            <div className="row my-4">
            {question.map((ques) => (
                ques.category === cat ? <Questioncard key={ques._id} ques={ques} /> : ""
            ))}
            </div>
        </div>

        <Footer />
        </>
    )
}

export default Questions
