import React from 'react'

const Categorycard = (props) => {

    const { category } = props

    return (
        <div className='row'>
            {category.map((c) => (
                <div className='col-md-4'>
                <div className="card mb-3" style={{ "width": "24rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{c.category}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              </div>
            ))}
        </div>
    )
}

export default Categorycard
