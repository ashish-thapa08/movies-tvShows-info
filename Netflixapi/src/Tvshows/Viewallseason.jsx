import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Loading from '../Loading';
let Seasons = () => {
    let location = useLocation();
    let [season, setSeason] = useState([]);
    let [loading, setLoading] = useState(true);
    let id = location.state;
    let Tvseason = async () => {
        try {
            let url = `https://api.themoviedb.org/3/tv/${id}?api_key=32c2f8b05f0301b51959c90b965a06ba&language=en-US}`
            let tvseason = await fetch(url);
            let dataa = await tvseason.json();
            let data = dataa.seasons.map((curval) => ({
                season: curval.name,
                episodes: curval.episode_count,
                date: curval.air_date,
                overview: curval.overview,
                poster: curval.poster_path
            }));
            setSeason(data);
            setLoading(false);
            // console.log(dataa.seasons);
            // console.log(data);
        }
        catch (err) {
            alert('Page Not Found!!!');
        }
    }
    useEffect(() => {
        Tvseason();
    })
    if (loading) {
        return (<Loading />)
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    {id ? season.map((curval) => {
                        return (
                            <>
                                <div className="col-lg-4 col-md-4 col-4 mb-5">
                                    <img alt="movieimage" className="img-fluid" src={`https://image.tmdb.org/t/p/original/${curval.poster}`} />
                                </div>
                                <div className="col-lg-8 col-md-8 col-8 mb-5">
                                    <h5 id="s1">Season: {curval.season} <span>({curval.date})</span></h5>
                                    <h6 id="s2">Nunber of Episodes: <span>{curval.episodes}</span></h6>
                                    <p id="s3"><span className="text-uppercase font-weight-bold">Overview:</span> {curval.overview === "" ? `No overview!!!:(` : curval.overview}</p>
                                </div>
                                <hr className="text-white" />
                            </>
                        )
                    }) : (<p>Page Not Found!!!</p>)}
                </div>

            </div>
        </>
    )
}
export default Seasons;