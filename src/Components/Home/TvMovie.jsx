import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovie } from '../redux/movieSlice'
import { fetchTv } from '../redux/TvSlice'
import { Link } from 'react-router-dom'

export default function TvMovie() {

  const dispatch = useDispatch()
  const {tv} =useSelector((state)=> state.tv)

  useEffect(() => {
    Promise.all([
      dispatch(fetchTv()),
    ]);
  }, [])
  return (
    <>
    <div className='col-md-4   d-flex  align-items-center '>
      <div className=''>
    <div className='border w-25 mb-3'></div>
    <h2 className='h1'>Trending <br/>Tv <br/>To Watch Now</h2>
    <p className='text-muted'>Most Watched Tv By Week</p>
   <div className='border w-100 mt-3'></div>
    </div>
    </div>
  {tv.slice(0,10).map((item)=>
  <>
    <div className='col-md-2 mt-5 '>
    <Link className='text-decoration-none text-white' to={`/moviedetails/${item.id}/${item.media_type}`}>

<div className='position-relative'>
{  item.poster_path?  <img src={`https://image.tmdb.org/t/p/w500`+item.poster_path} className='w-100' alt=""/>
  :<img src={`https://image.tmdb.org/t/p/w500`+item.profile_path} className='w-100' alt=""/> }
    <h3 className='h5  '>{item?.title} {item?.name}</h3>
    {item.vote_average? <div className='vote top-0 end-0 position-absolute p-1 '>
        {item.vote_average.toFixed(1)}
      </div>:''}
</div>
    </Link>
    
  </div>
  </>
  )}



    </>
  )
}



