import React, { useState, useEffect } from 'react';
import { useLocation, useHistory, Link } from "react-router-dom";
import Loading from '../Loading';
let Multisearch = () => {
    let location = useLocation();
    let history = useHistory();
    let [tvShow, settvShow] = useState({});
    let [movies, setMovies] = useState({});
    let [similar, showSimilar] = useState([]);
    let [similarr, setSimilarr] = useState([]);
    let [check, setCheck] = useState(true);
    let id = location.state.id;
    // location.state.id === 'undefined' ? history.push('/') : id = location.state.id;
    let mediaType = location.state.media;
    useEffect(() => {
        if(mediaType==='person'){
            alert('Data Not Exist!!!');
            history.push('/');
        }
        if (mediaType === 'tv') {
            let Tvshow = async () => {
                try {
                    let url = `https://api.themoviedb.org/3/tv/${id}?api_key=32c2f8b05f0301b51959c90b965a06ba&language=en-US}`;
                    let detail = await fetch(url);
                    let dataa = await detail.json();
                    settvShow(dataa);
                    setCheck(false);
                    //console.log(dataa);
                }
                catch (err) {
                    alert('Something Wrong!!! Refresh it:)');
                    history.push('/');
                    console.log(err);
                }
            }
            let Similartvshows = async () => {
                try {
                    if (id) {
                        let url = `https://api.themoviedb.org/3/tv/${id}/similar?api_key=32c2f8b05f0301b51959c90b965a06ba&language=en-US&page=1}`;
                        let similar = await fetch(url);
                        let dataa = await similar.json();
                        let data = dataa.results.map((curval) => ({
                            tvid: curval.id,
                            name: curval.original_name,
                            poster: curval.poster_path
                        }));
                        setSimilarr(data);
                        window.scrollTo(0, 0);
                    }
                    else {
                        alert('Something Wrong!!! Page Not Found');
                    }
                }
                catch (err) {
                    if (err) throw err;
                    alert(`Many Traffic!!! Refresh it ^_^`)
                    history.push('/');
                }
            }
            Tvshow();
            Similartvshows();
            return;
        }
        if (mediaType === 'movie') {
            let Movie = async () => {
                try {
                    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=32c2f8b05f0301b51959c90b965a06ba`;
                    let moviedata = await fetch(url);
                    let dataa = await moviedata.json();
                    setMovies(dataa);
                    setCheck(false);
                    //console.log(dataa);
                }
                catch (err) {
                    alert('Something Wrong!!! Refresh it:)');
                    history.push('/');
                    console.log(err);
                }
            }
            let Similarmovie = async () => {
                try {
                    //console.log(id);
                    let url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=32c2f8b05f0301b51959c90b965a06ba&language=en-US&page=1}`
                    let moviedata = await fetch(url);
                    let dataa = await moviedata.json();
                    console.log(dataa.results);
                    let data = dataa.results.map((curval, index) => ({
                        title: curval.title,
                        value: curval.id,
                        poster: curval.poster_path
                    }));
                    showSimilar(data);
                    setCheck(false);
                }
                catch (err) {
                    console.log(err)
                    alert(`Page Not Found!!! Refresh it ^_^`)
                    history.push('/');
                }
            }
            Movie();
            Similarmovie();
            return;
        }
    }, [id]);
    if (check) {
        return (<Loading />)
    }
    return (
        <>
            <div className="container">
                {mediaType === 'movie' ? (
                    <>
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-12">
                            <img className="imgg" alt="movieimage" src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`} />
                        </div>
                        <div className="col-md-3 col-lg-3 col-12">
                            <h3>Movie Title: <span>{movies.title}</span></h3>
                            <p id="s3"><span className="overview">Overview: </span>{movies.overview}</p>
                            <p><span className="vote">Release Date: </span>{movies.release_date}</p>
                            <p><span className="vote">Status: </span>{movies.status}</p>
                            <p><span className="vote">Vote: </span>{movies.vote_average}</p>
                        </div>
                    </div>
                    <h3 className="mb-3">Similar Movies</h3>
                <div className="row">
                    {
                        similar.length===0?(<p className="ml-3">Similar Movies doesn't exists!!!</p>):
                        similar.map((curval) => {
                        return (
                            <>
                                <div className="col-lg-3 col-md-3 col-6">
                                    <div className="card border-0 popular ml-3" key={curval.value}>
                                        <img className="img-fluid" src={`https://image.tmdb.org/t/p/original/${curval.poster}`} />
                                        <div className="card-body">
                                            <h5 className="mb-2">{curval.title}</h5>
                                            <Link exact to={{ pathname: `/${curval.title}/${curval.value}`, state: curval.value }}><button className="btn btn-outline-light">View Detail</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
                    </>
                ) : (
                    <>
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-12">
                            <img className="imgg" alt="movieimage" src={`https://image.tmdb.org/t/p/original/${tvShow.poster_path}`} />
                        </div>
                        <div className="col-md-6 col-lg-6 col-12">
                            <h3>TV Show Title:</h3>
                            <h5>{tvShow.name}</h5><span>Tagline: {tvShow.tagline}</span>
                            <p><span className="overview">Total Number of Season: </span>{tvShow.number_of_seasons} || <span>Total Number of Episodes:</span>{tvShow.number_of_episodes}</p>
                            <p id="s3"><span className="overview">Overview: </span>{tvShow.overview}</p>
                            <p><span className="vote">Release Date: </span>{tvShow.first_air_date}</p>
                            <p><span className="vote">Status: </span>{tvShow.status}</p>
                            <p><span className="vote">Vote: </span>{tvShow.vote_average}</p>
                            <Link to={{ pathname: `/TvShows/${tvShow.name}/${tvShow.id}/seasons`, state: tvShow.id }}>View all seasons</Link>
                        </div>
                    </div>
                    <h3 className="mb-3">Similar TV Shows</h3>
                        <div className="row">
                            {similarr.length === 0 ? (<p className="ml-3">Similar TvShows doesnot exists!!!</p>) :
                                similarr.map((curval) => {
                                    return (
                                        <>
                                            <div className="col-md-4 col-lg-4 col-6">
                                                <div className="card border-0 popular ml-3" key={curval.tvid}>
                                                    <img className="img-fluid" src={`https://image.tmdb.org/t/p/original/${curval.poster}`} />
                                                    <div className="card-body">
                                                        <h5 className="card-title mb-2">{curval.name}</h5><span></span>
                                                        <Link exact to={{ pathname: `/${curval.name}/${curval.tvid}/TvShows`, state: curval.tvid }}><button className="btn btn-outline-light">View Detail</button></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                        </div>
                        </>
                )}
            </div>
        </>
    )
}
export default Multisearch;
