import React, { useEffect, useRef, useState } from 'react'
import "./TittleCard.css"
// import cards_data from "../../assets/cards/Cards_data"
import { Link } from 'react-router-dom'


const TittleCard = ({tittle,category}) => {

  const [apiData,setApiData]= useState([])
  const cardsRef = useRef()

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmRmMzkwODgxODNiZjQzZGRhYjdlMWRiOTUxZmM5YiIsIm5iZiI6MTc0NDUyNjQ5My45MTIsInN1YiI6IjY3ZmI1YzlkMWJjNjM5NTY2YWRhZTE3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dROP1R1Wk_OMYb__Xh0LojjAVMIiBEu9qvVGn2u3mJs'
    }
  };
  
  

  const handleWheel = (event) => {
    event.preventDefault()
    cardsRef.current.scrollLeft += event.deltaY
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));
    cardsRef.current.addEventListener('wheel', handleWheel)
  }, [])


  return (
    <div className='tittle-card'>
      <h2>{tittle?tittle:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
        </Link>
        })}
      </div>
    </div>
  )
}

export default TittleCard
