import React, { useState, useEffect } from 'react';
import Loading from '../Loading';
import { Link } from "react-router-dom";
let Popular = () => {
    let [populartv, setPopulartv] = useState([]);
    let [loading, setLoading] = useState(true);
    let Tvpopular = async () => {
        try {
            let url = "https://api.themoviedb.org/3/tv/popular?api_key=32c2f8b05f0301b51959c90b965a06ba&language=en-US&page=1";
            let tvshow = await fetch(url);
            let dataa = await tvshow.json();
            let data = dataa.results.map((curval) => ({
                tvid: curval.id,
                name: curval.original_name,
                poster: curval.poster_path
            }));
            setLoading(false);
            //console.log(data);
            setPopulartv(data);
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        Tvpopular();
    }, []);
    if (loading) {
        return <Loading />
    }
    return (
        <>
            <div className="container">
                <h3 className="mb-3">Popular Tv Shows</h3>
                <div className="row">
                    {populartv.map((curval) => {
                        return (
                            <>
                                <div className="col-md-3 col-lg-3 col-6">
                                    <div className="card border-0 popular ml-3" key={curval.tvid}>
                                        <img className="img-fluid" src={`https://image.tmdb.org/t/p/original/${curval.poster}`} />
                                        <div className="card-body">
                                            <h5 className="card-title mb-2">{curval.name}</h5><span></span>
                                            <Link exact to={{ pathname: `${curval.name}/${curval.tvid}/TvShows`, state: curval.tvid }}><button className="btn btn-outline-light">View Detail</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Popular;