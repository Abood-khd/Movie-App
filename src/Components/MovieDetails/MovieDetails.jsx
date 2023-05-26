import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import axios from 'axios';

export default function MovieDetails() {
    let {id,mediaType}= useParams()

const [details, setDEtails] = useState({}) 
async function fetchDetails() {
  const {data} = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=7342ce493de6912d24d892673dd3d323`);
  setDEtails(data)
  console.log(data);
}

    useEffect(() => {
      fetchDetails(id,mediaType)

 
      
    },[]);
  return (
    <>
   {details? <div className='row'>
      <div className='col-md-3'>
      {  details.poster_path?  <img src={`https://image.tmdb.org/t/p/w500`+details.poster_path} className='w-100' alt=""/>
  :<img src={`https://image.tmdb.org/t/p/w500`+details.profile_path} className='w-100 img-fluid ' alt=""/> }

      </div>
      <div className='col-md-6 d-flex align-items-center'>
      <div className=''>
      <h2 className=''>{details.title} {details.name} </h2>
        <p className='text-muted my-3'>{details.overview} {details.biography}</p>
        {details.vote_average? <h4 >vote average : {details.vote_average?.toFixed(1)}</h4>:''}
        {details.vote_count? <h4>vote count : {details.vote_count}</h4>:''}
      </div>
      </div>
    </div>:<div className='d-flex align-items-center justify-content-center vh-100 bg-danger'>
      <li className=' fas fa-spinner fa-spin fa-8x text-danger  bg-danger'></li>
    </div>}
    </>
  )
}
