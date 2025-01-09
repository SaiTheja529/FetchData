import React from 'react' 
import '../bootstrap-5.3.3-dist/css/bootstrap.css'
const Card=({props})=>{
    
    return(

        <>
          <div className="card" style={{width:"18rem"}}>

            <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary">Go SomeWhere</a>
            </div>
          </div>
        
        </>
    )



}

export default Card