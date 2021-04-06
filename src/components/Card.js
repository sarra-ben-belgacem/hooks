import React from 'react'

const Card = ({movie}) => {
    return (
        <div >
            <div class="card" style={{width: "18rem" , height: "550px", marginTop:'50px' , marginBottom: '10px'}}>
 
  <div class="card-body" >
       <img src={movie.image} class="card-img-top" alt="..." style={{minHeight:'350px'}}/>
    <h5 class="card-title">{movie.name} ({movie.year})</h5>
    
    <h6 class="card-text">{movie.story}</h6>
    <div>
   {
   [1,2,3,4,5].map (el =>(
       el<= movie.rating ?
       
    <i key={el} style={{color:"yellow"}}class="fas fa-star"></i> : <i key={el} class="fas fa-star"></i>  ))
    
  
    
    } 
    </div>
    
    <a href="#" class="btn btn-primary">More details</a>
  </div>
</div>
        </div>
    )
}

export default Card
