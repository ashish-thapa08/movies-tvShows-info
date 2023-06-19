import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams } from "react-router-dom";
import Loading from '../Loading';
import Pagenotfound from '../Page Not Found/pagenotfound';
let Seasons = () => {
    let { seasonsid } = useParams();
    let Tvseason = () => {
        let url = `https://api.themoviedb.org/3/tv/${seasonsid}?api_key=32c2f8b05f0301b51959c90b965a06ba&language=en-US}`
        return axios.get(url).then(response => response.data)

    }
    let { isLoading, data, isError } = useQuery('seasons', Tvseason);
    if (isLoading) {
        return <Loading />
    }
    if (isError) {
        return <Pagenotfound />
    }
    console.log({ seasonsid, data });
    return (
        <>
            <div className="container">
                <div className="row">
                    {data.seasons.map((curval) => {
                        return (
                            <>
                                <div className="col-lg-4 col-md-4 col-4 mb-5">
                                    <img alt="tvseriesimage" className="img-fluid" src={`https://image.tmdb.org/t/p/original/${curval.poster_path}`} />
                                </div>
                                <div className="col-lg-8 col-md-8 col-8 mb-5">
                                    <h5 id="s1">Season: {curval.season_number} <span>({curval.air_date})</span></h5>
                                    <h6 id="s2">Number of Episodes: <span>{curval.episode_count}</span></h6>
                                    <p id="s3"><span className="text-uppercase font-weight-bold">Overview:</span> {curval.overview === "" ? `No overview!!!:(` : curval.overview}</p>
                                </div>
                                <hr className="text-white" />
                            </>
                        )
                    })}
                </div>

            </div>
        </>
    )
}
export default Seasons;