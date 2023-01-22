import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Categorycard from './Categorycard'

const Home = () => {

  const [category, setCategory] = useState([])

  const getAllCategory = async () => {
    //API Call
    const response = await fetch(`http://localhost:5000/api/question/fetchallquestion`);
    const json = await response.json();
    // console.log(json);
    setCategory(json);
  }

  useEffect(() => {
    getAllCategory()
  }, [])

  return (
    <div className='container'>
      <div className="my-3">
        <h2 className='my-3'>Categories</h2>
        <Categorycard category={category} />
      </div>
    </div>
  )
}

export default Home