import React , {useState} from 'react';
import Cards from './Card';
import Data from '../Datalist';
import AddModal from './AddModal'

const Mouvieslists = () => {
    const [mouvies , setMouvies]= useState(Data)
    const [isOpen , setIsOpen]= useState(false)
    const [inputFilter , setInputFilter]= useState("")
    const [ratingFilter , setRating]= useState(0)

    const closeModal = () => setIsOpen(false)
    const addMovie = (newMovie)=>setMouvies( [...mouvies , newMovie])
    const filtredList = mouvies.filter(el=> ratingFilter !==0 ? el.name.toLowerCase().includes(inputFilter.toLowerCase())&& el.rating == ratingFilter :el.name.toLowerCase().includes(inputFilter.toLowerCase()))

    return (
        <div>
            <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">

    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" onChange={(e)=>setInputFilter(e.target.value)} aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    <div>
    {
        [1,2,3,4,5].map(el=>

    
    <i key={el} class="fas fa-star"  onClick={()=> ratingFilter ===el ? setRating(el-1): setRating(el)} style={{color:el<= ratingFilter ? "yellow" : "black" , cursor:'pointer'}}  > </i>)
    }
    </div>
  </div>
</nav>

        





            <button onClick={()=> setIsOpen(true)}>Add Mouvie</button>
            <AddModal isOpen={isOpen} closeModal={closeModal} addMovie={addMovie}/>
        <div style= {{display:"flex" , justifyContent:"space-around" , flexWrap:"wrap" }}>
            {
                filtredList.map((el,i)=>(
                    <Cards key={i} movie={el}/>
                )
                )
            }
        </div>
        </div>
    )
}

export default Mouvieslists
