import React from 'react'
import Datalist from '../Datalist';

const Trailer = ({match}) => {

 const filterDatalist =Datalist.filter(el=> el.id ==match.params.info)

   
   
    return (
        <div>
           <iframe width="560" height="315" src={filterDatalist[0].trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
        </div>
    )
}

export default Trailer
