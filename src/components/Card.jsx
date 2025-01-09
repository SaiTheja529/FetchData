import React from 'react'
import '../bootstrap-5.3.3-dist/css/bootstrap.css'
const Card = ({ post}) => {

    return (

        <>
            <div className="d-flex justify-content-center align-items-center">
                <div className="row d-md-flex  d-sm-flex justify-content-md-center  justify-content-sm-center align-items-md-center align-items-sm-center">

                    {posts.map((post) => (
                        <div className="col-md-4 m-4 col-sm-12 " >

                            <div className="card h-100  text-bg-warning border-dark">
                                <div className="card-body">
                                    <h5 className="card-title text-primary">{post.title}</h5>
                                    <p className="card-text text-success">{post.body}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )



}

export default Card