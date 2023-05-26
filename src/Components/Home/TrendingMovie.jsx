import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie } from "../redux/movieSlice";
import { Link } from "react-router-dom";
export default function TrendingMovie() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(fetchMovie())
    
  },
     []);

  return <>
      <div className="col-md-4  d-flex  align-items-center">
        <div className="">
          <div className="border w-25 mb-3"></div>
          <h2 className="h1">
            Trending <br />
            Movies <br />
            To Watch Now
          </h2>
          <p className="text-muted">Most Watched Movis By Week</p>
          <div className="border w-100 mt-3"></div>
        </div>
      </div>
      {data.slice(0, 10).map((item) => (

          <div className="col-md-2 ">
<Link  className="text-decoration-none text-white" to={`/moviedetails/${item.id}/${item.media_type}`}>
            <div className="position-relative">
              {item.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500` + item.poster_path}
                  className="w-100"
                  alt=""
                />
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/w500` + item.profile_path}
                  className="w-100"
                  alt=""
                />
              )}{" "}
              <h3 className="h5 ">
                {item.title} {item.name}
              </h3>
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
      ))}
    </>
  
}
