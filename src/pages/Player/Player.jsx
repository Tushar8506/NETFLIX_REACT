import React, { useEffect, useState } from 'react'
import "./Player.css"
import Back_arrow from "../../assets/Back_arrow.png"
import { useNavigate, useParams } from 'react-router-dom'
const Player = () => {

  const navigate =useNavigate()
  const {id}= useParams()
  const[apiData,setApiData]= useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmRmMzkwODgxODNiZjQzZGRhYjdlMWRiOTUxZmM5YiIsIm5iZiI6MTc0NDUyNjQ5My45MTIsInN1YiI6IjY3ZmI1YzlkMWJjNjM5NTY2YWRhZTE3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dROP1R1Wk_OMYb__Xh0LojjAVMIiBEu9qvVGn2u3mJs'
    }
  };
  
  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0]))
      .catch(err => console.error(err));
  },[])


  return (
    <div className='player'>
      <img src={Back_arrow} alt="" onClick={()=>navigate(-2)}/>
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} height='90%' width='90%' tittle="trailer" frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.typeof}</p>
      </div>
    </div>
  )
}

export default Player
