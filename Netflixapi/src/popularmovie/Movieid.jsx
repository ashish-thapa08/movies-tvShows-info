import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Loading from '../Loading';
let Modal = () => {
    let [check, setCheck] = useState(true);
    const location = useLocation();
    let id = location.state.detail;
    console.log(id);
    let [moviedata, setMoviedata] = useState({});
    let Moviedata = async () => {
        let url = `https://api.themoviedb.org/3/movie/${id}?api_key=32c2f8b05f0301b51959c90b965a06ba`;
        let moviedata = await fetch(url);
        let dataa = await moviedata.json();
        setMoviedata(dataa);
        console.log(dataa);
        setCheck(false);
    }
    useEffect(() => {
        Moviedata()
    }, [id])
    if (check) {
        return <Loading />
    }
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
                        <p><span className="vote">Release Date: </span>{moviedata.release_date}</p>
                        <p><span className="vote">Status: </span>{moviedata.status}</p>
                        <p><span className="vote">Vote: </span>{moviedata.vote_average}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Modal;