import React  , {useState}  from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 

function AddModal({isOpen , closeModal , addMovie}){

  const [name , setName] = useState("")
  const [story , setStory] = useState("")
  const [year , setYear] = useState(null)
  const [image , setImage] = useState("")
  const [rating , setRating] = useState(0)


 
    return (
      <div>
        
        <Modal
        
          isOpen={isOpen}
          
          style={customStyles}
          contentLabel="Example Modal"
        >
          <form onSubmit={(e)=>{
            e.preventDefault();
            addMovie({name , story , image, year,  rating })
          }}>
  <div class="form-group">
    <label for="exampleInputEmail1">Movie title</label>
    <input type="text" class="form-control" onChange={(e)=>setName(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter movie"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Story</label>
    <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e)=>setStory(e.target.value)} aria-describedby="emailHelp" placeholder="Enter story"/>
    
  </div>
   <div class="form-group">
    <label for="exampleInputEmail1">Year</label>
    <input type="number" min="1920" max="2021" class="form-control" id="exampleInputEmail1" onChange={(e)=>setYear(e.target.value)}  aria-describedby="emailHelp" placeholder="Year of movie"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">url img</label>
    <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e)=>setImage(e.target.value)}  aria-describedby="emailHelp" placeholder="img"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Rating</label>
    <input type="number" min='1' max="5" class="form-control" id="exampleInputEmail1" onChange={(e)=>setRating(e.target.value)} aria-describedby="emailHelp" />
    
  </div>
  <button  type="submit" class="btn btn-primary">Submit</button>
    
  
  
</form>
 
          <button onClick={closeModal}>close</button>
          
        </Modal>
      </div>
    );
}

export default AddModal
