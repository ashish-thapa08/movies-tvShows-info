import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import Loading from '../Loading';
let Trendd = () => {
    let [check, setCheck] = useState(true);
    let [moviedata, setMoviedata] = useState({});
    let [similar, showSimilar] = useState([]);
    let history = useHistory();
    const location = useLocation();
    let id = location.state;
    let Moviedata = async () => {
        try {
            let url = `https://api.themoviedb.org/3/movie/${id}?api_key=32c2f8b05f0301b51959c90b965a06ba`;
            let moviedata = await fetch(url);
            let dataa = await moviedata.json();
            setMoviedata(dataa);
            //console.log(dataa);
            setCheck(false);
            window.scrollTo(0, 0);
        }
        catch (err) {
            alert(`Something Wrong!!! Refresh`)
            history.push('/');
        }
    }
    let Similarmovie = async () => {
        try {
            console.log(id);
            let url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=32c2f8b05f0301b51959c90b965a06ba&language=en-US&page=1}`
            let moviedata = await fetch(url);
            let dataa = await moviedata.json();
            //console.log(dataa.results);
            let data = dataa.results.map((curval, index) => ({
                title: curval.title,
                value: curval.id,
                poster: curval.poster_path
            }));
            showSimilar(data);
            setCheck(false);
        }
        catch (err) {
            //console.log(err)
            alert(`Page Not Found!!! Refresh it ^_^`)
            history.push('/');
        }
    }
    useEffect(() => {
        Moviedata();
    }, [id]);
    useEffect(() => {
        Similarmovie();
    }, [id]);
    if (check) {
        return <Loading />
    }
    return (
        <>
            <div className="container">
                {id ? (
                    <>
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-12">
                                <img className="imgg" alt="movieimage" src={`https://image.tmdb.org/t/p/original/${moviedata.poster_path}`} />
                            </div>
                            <div className="col-md-6 col-lg-6 col-12">
                                <h3>Movie Title: <span>{moviedata.title}</span></h3>
                                <p id="s3"><span className="overview">Overview: </span>{moviedata.overview}</p>
                                <p><span className="vote">Release Date: </span>{moviedata.release_date}</p>
                                <p><span className="vote">Status: </span>{moviedata.status}</p>
                                <p><span className="vote">Vote: </span>{moviedata.vote_average}</p>
                            </div>
                        </div>
                        <h3 className="mb-3">Similar Movies</h3>
                        <div className="row">
                            {
                                similar.length === 0 ? (<p className="ml-3">Similar Movies not available!!!</p>) :
                                    similar.map((curval) => {
                                        return (
                                            <>
                                                <div className="col-lg-3 col-md-3 col-6">
                                                    <div className="card border-0 popular ml-3" key={curval.value}>
                                                        <img className="img-fluid" src={`https://image.tmdb.org/t/p/original/${curval.poster}`} />
                                                        <div className="card-body">
                                                            <h5 className="card-title mb-2">{curval.title}</h5><span></span>
                                                            <Link exact to={{ pathname: `/${curval.title}/${curval.value}`, state: curval.value }}><button className="btn btn-outline-light">View Detail</button></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })}
                        </div>
                    </>) : (<p>Page Not Found!!!</p>)}

            </div>
        </>
    )
}
export default Trendd;