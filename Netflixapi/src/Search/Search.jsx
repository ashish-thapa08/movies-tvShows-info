import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
let Search = () => {
    let [moviedata, setMoviedata] = useState({});
    const location = useLocation();
    let id = location.state.detail;
    let Searchh = async () => {
        let url = `https://api.themoviedb.org/3/movie/${id}?api_key=32c2f8b05f0301b51959c90b965a06ba`;
        let moviedata = await fetch(url);
        let dataa = await moviedata.json();
        setMoviedata(dataa);
    }
    useEffect(() => {
        Searchh()
    }, [id])
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-12">
                        <img className="imgg" src={`https://image.tmdb.org/t/p/original/${moviedata.poster_path}`} />
                    </div>
                    <div className="col-md-6 col-lg-6 col-12">
                        <h4>Movie Title:</h4>
                        <h3>{moviedata.title}</h3>
                        <p><span className="overview">Overview: </span>{moviedata.overview}</p>
                        <p><span className="vote">Vote: </span>{moviedata.vote_average}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Search;