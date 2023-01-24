import React from 'react'
import { Link } from 'react-router-dom'

const Categorycard = (props) => {

    const { questions } = props
    // const [cat, setCat] = useState([])
    let cat = []
    questions.forEach(element => {
      cat.push(element.category)
    });

    let newCat = [...new Set(cat)]
    // console.log(newCat)

    return (
        <div className='row'>
            {newCat.map((c) => (
                <div className='col-md-4'>
                <div className="card mb-3" style={{ "width": "24rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{c}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to={`/questions/${c}`} className="btn btn-primary">Continue Preparation</Link>
                </div>
              </div>
              </div>
              // cat.concat(c.category)
            ))}
        </div>
    )
}

export default Categorycard
