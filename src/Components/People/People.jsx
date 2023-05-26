import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Pagenition from '../Pagenition/Pagenition';

export default function People() {
  const [person, setPerson] = useState([]);
  let mediaType = 'person'
    async function PersonList(page) {
      const { data } = await axios.get(`      https://api.themoviedb.org/3/person/popular?api_key=7342ce493de6912d24d892673dd3d323&language=en-US&page=${page}
      `);


      setPerson(data.results);
    }
  
    useEffect(() => {
      PersonList(1);
    }, []);
  
  return (
    <>
<div className="row g-3 mt-4">
          {person.map((item,i) => {
            return (
        <div className="col-md-3">
              <Link key={i}
                className="text-decoration-none text-white"
                to={`/moviedetails/${item.id}/${mediaType}`}
              >
                <div className="position-relative">
                  <img
                    src={`https://image.tmdb.org/t/p/w500` + item.profile_path}
                    className="w-100"
                    alt=""
                  />
                  <h3 className="h5 "> {item.title} {item.name} </h3>
                  {item.vote_average ? (
                <div className="vote top-0 end-0 position-absolute p-1 ">
                  {item.vote_average.toFixed(1)}
                </div>
              ) : (
                ""
              )}                 
                </div>
              </Link>
        </div>
            );
          })}
    </div>
    <Pagenition MovieList={PersonList} />

    </>
  )
}
