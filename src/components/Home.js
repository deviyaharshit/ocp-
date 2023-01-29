import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Categorycard from './Categorycard'
import Navbar from './Navbar'
import Footer from './Footer'

const Home = () => {

  const [questions, setQuestions] = useState([])

  const getAllCategory = async () => {
    //API Call
    const response = await fetch(`http://localhost:5000/api/question/fetchallquestion`);
    const json = await response.json();
    // console.log(json);
    setQuestions(json);
  }

  useEffect(() => {
    getAllCategory()
  }, [])

  return (
    <>
    <Navbar />

    <div className='container'>
      <div className="my-3">
        <h2 className='my-3'>Categories</h2>
        <Categorycard questions={questions} />
      </div>
    </div>

    <Footer />
    </>
  )
}

export default Home