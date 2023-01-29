import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Adminnavbar from './Adminnavbar';

const Adminhome = () => {

    let navigate = useNavigate();

    const [question, setQuestion] = useState({
        title: "", description: "", category: ""
    });

    let name, value;
    const handleInputs = (e) => {
        // console.log(e);
        name = e.target.name;
        value = e.target.value;

        setQuestion({ ...question, [name]: value });
    }

    const checkAdmin = () => {
        if (localStorage.getItem('OCPadmin') !== "true")
            navigate("/admin/login");
    }

    const PostData = async (e) => {
        e.preventDefault();
    
        const { title , description, category } = question;
    
        const response = await fetch(`http://localhost:5000/api/question/addquestion` , {
          // mode: "no-cors",
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, description, category })
        });
        const res = await response.json(); 
        // console.log(res)
    
        setQuestion({title: "", description: "", category: ""});
        alert("Question Added Successfully");
      }

    useEffect(() => {
        checkAdmin();
    }, []);

    return (
        <>
            <Adminnavbar />

            <div className='container'>
                <h3 className='my-3 text-center'>Add Question</h3>

                <form method='POST' className='add-thread-form my-5' onSubmit={PostData}>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                        <input type="text" onChange={handleInputs} name="title" value={question.title} className="form-control border-primary" id="title" aria-describedby="emailHelp" minLength={3} required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                        <input type="text" onChange={handleInputs} name="description" value={question.description} className="form-control border-primary" id="description" minLength={5} required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Category</label>
                        <input type="text" onChange={handleInputs} name="category" value={question.category} className="form-control border-primary" id="category" aria-describedby="emailHelp" minLength={1} required />
                    </div>

                    <button type="submit" className="btn btn-primary thread-btn">Submit</button>
                    {/* <input type="submit" onClick={PostData} className="btn btn-primary" value="Submit" /> */}
                </form>
            </div>

        </>
    )
}

export default Adminhome
