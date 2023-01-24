import React from 'react'
import { Link } from 'react-router-dom';

const Questioncard = (props) => {

    const { ques } = props;

    return (
        <div className='col-md-12'>
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">{ques.title}</h5>
                    <p className="card-text">{ques.description}</p>
                    <p className='card-text'>{ques.category}</p>
                    <Link to={`/question/${ques.title}`} className="btn btn-primary">Solve Challenge</Link>
                </div>
            </div>
        </div>
    )
}

export default Questioncard
