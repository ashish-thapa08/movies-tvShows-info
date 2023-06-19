import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Pagenotfound from '../Page Not Found/pagenotfound';
import { Themee } from '../Theme'
let Multisearch = () => {
    const { id, title, media } = useParams();
    let [movie, setMovie] = useState({});
    let [similarmovie, setSimilarmovie] = useState([])
    let [tv, setTv] = useState({});
    let [similartv, setSimilartv] = useState([])
    let [theme, setTheme] = useContext(Themee);
    let Filterdata = () => {
        if (media === 'tv') {
            let Tv = () => {
                try {
                    let url = `https://api.themoviedb.org/3/tv/${id}?api_key=32c2f8b05f0301b51959c90b965a06ba&language=en-US}`;
                    return axios.get(url).then(response => setTv(response.data))
                }
                catch (err) {
                    return (<Pagenotfound />)
                }
            }
            let similarTv = () => {
                try {
                    let url = `https://api.themoviedb.org/3/tv/${id}/similar?api_key=32c2f8b05f0301b51959c90b965a06ba&language=en-US&page=1}`;
                    return axios.get(url).then(response => setSimilartv(response.data.results))
                }
                catch (err) {
                    return (<Pagenotfound />)
                }
            }
            Tv()
            similarTv();
            return;
        }
        else if (media === 'movie') {
            let Movie = () => {
                try {
                    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=32c2f8b05f0301b51959c90b965a06ba`;
                    return axios.get(url).then(response => setMovie(response.data))
                }
                catch (err) {
                    alert(err)
                    return (<Pagenotfound />)
                }
            }
            let similarMovie = () => {
                try {
                    let url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=32c2f8b05f0301b51959c90b965a06ba&language=en-US&page=1}`
                    axios.get(url).then(response => setSimilarmovie(response.data.results))
                }
                catch (err) {
                    return (<Pagenotfound />)
                }
            }
            Movie();
            similarMovie();
            return;
        }
    }
    //console.log(movie.poster_path);
    useEffect(() => {
        Filterdata()
    }, [media, id])
    if (media === 'person') {
        return (<Pagenotfound />)
    }
    return (
        <>
            <div className='container'>
                {
                    media === 'movie' ? (<>
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-12">
                                <img className="imgg" alt="movieimage" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                            </div>
                            <div className="col-md-6 col-lg-6 col-12">
                                <h3>Movie Title: <span>{movie.title}</span></h3>
                                <p id="s3"><span className="overview">Overview: </span>{movie.overview}</p>
                                <p><span className="vote">Release Date: </span>{movie.release_date}</p>
                                <p><span className="vote">Status: </span>{movie.status}</p>
                                <p><span className="vote">Vote: </span>{movie.vote_average}</p>
                            </div>
                        </div>
                        <h3 className="mb-3">Similar Movies</h3>
                        <div className="row">
                            {
                                similarmovie.length === 0 ? (<p className="ml-3">Similar Movies doesn't exists!!!</p>) :
                                    similarmovie.map((curval) => {
                                        return (
                                            <>
                                                <div className="col-lg-3 col-md-3 col-6">
                                                    <div className={theme ? `card border-0 popular ml-3 theme` : `card border-0 popular ml-3 themee`} key={curval.id}>
                                                        <img alt='movieimage' className="img-fluid" src={`https://image.tmdb.org/t/p/original/${curval.poster_path}`} />
                                                        <div className="card-body">
                                                            <h5 className="mb-2">{curval.title}</h5>
                                                            <Link exact to={{ pathname: `/${curval.title}/${curval.id}` }}><button className={`btn ${theme ? 'btn-outline-light' : 'btn-outline-info'}`}>View Detail</button></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })}
                        </div>
                    </>) : (<>
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-12">
                                <img className="imgg" alt="movieimage" src={`https://image.tmdb.org/t/p/original/${tv.poster_path}`} />
                            </div>
                            <div className="col-md-6 col-lg-6 col-12">
                                <h3>TV Show Title:</h3>
                                <h5>{tv.name}</h5><span>Tagline: {tv.tagline}</span>
                                <p><span className="overview">Total Number of Season: </span>{tv.number_of_seasons} || <span>Total Number of Episodes:</span>{tv.number_of_episodes}</p>
                                <p id="s3"><span className="overview">Overview: </span>{tv.overview}</p>
                                <p><span className="vote">Release Date: </span>{tv.first_air_date}</p>
                                <p><span className="vote">Status: </span>{tv.status}</p>
                                <p><span className="vote">Vote: </span>{tv.vote_average}</p>
                                <Link to={{ pathname: `/${tv.name}/${tv.id}/seasons` }}>View all seasons</Link>
                            </div>
                        </div>
                        <h3 className="mb-3">Similar TV Shows</h3>
                        <div className="row">
                            {similartv.length === 0 ? (<p className="ml-3">Similar TvShows doesnot exists!!!</p>) :
                                similartv.map((curval) => {
                                    return (
                                        <>
                                            <div className="col-md-3 col-lg-3 col-xl-3 col-6">
                                                <div className={theme ? `card border-0 popular ml-3 theme` : `card border-0 popular ml-3 themee`} key={curval.id}>
                                                    <img className="img-fluid" src={`https://image.tmdb.org/t/p/original/${curval.poster_path}`} />
                                                    <div className="card-body">
                                                        <h5 className="card-title mb-2">{curval.title}</h5><span></span>
                                                        <Link exact to={{ pathname: `/${curval.title}/${curval.id}/TvShows` }}><button className={`btn ${theme ? 'btn-outline-light' : 'btn-outline-info'}`}>View Detail</button></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                        </div>
                    </>)
                }
            </div>
        </>
    )

}
export default Multisearch;
