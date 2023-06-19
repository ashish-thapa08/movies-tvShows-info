import React, { useEffect, useContext } from 'react';
import { Link, useParams } from "react-router-dom";
import Loading from '../Loading';
import { Themee } from '../Theme';
import Pagenotfound from '../Page Not Found/pagenotfound'
import { useQuery } from 'react-query';
import axios from 'axios';
let Trendd = () => {
    let [theme, setTheme] = useContext(Themee);
    let { movieId } = useParams();
    let Moviedata = () => {
        let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=32c2f8b05f0301b51959c90b965a06ba`;
        return axios.get(url).then(response => response.data)
    }
    let Similarmovie = () => {
        let url = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=32c2f8b05f0301b51959c90b965a06ba&language=en-US&page=1}`
        return axios.get(url).then(response => response.data.results)
    }
    let movieActual = useQuery('trend-id', Moviedata)
    let similar = useQuery('similar', Similarmovie);
    useEffect(() => {
        movieActual.refetch();
        similar.refetch();
        window.scrollTo({ top: 0, right: 0, behavior: 'smooth' });
    }, [movieId])
    if (movieActual.isLoading || movieActual.isFetching || similar.isLoading || similar.isFetching) {
        return <Loading />
    }
    if (movieActual.isError || similar.isError) {
        return <Pagenotfound />
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-12">
                        <img className="imgg" alt="movieimage" src={`https://image.tmdb.org/t/p/original/${movieActual.data.poster_path}`} />
                    </div>
                    <div className="col-md-6 col-lg-6 col-12">
                        <h3>Movie Title: <span>{movieActual.data.title}</span></h3>
                        <p id="s3"><span className="overview">Overview: </span>{movieActual.data.overview}</p>
                        <p><span className="vote">Release Date: </span>{movieActual.data.release_date}</p>
                        <p><span className="vote">Status: </span>{movieActual.data.status}</p>
                        <p><span className="vote">Vote: </span>{movieActual.data.vote_average}</p>
                    </div>
                </div>
                <h3 className="mb-3">Similar Movies</h3>
                <div className="row">
                    {
                        similar.data.map((curval) => {
                            return (
                                <>
                                    <div className="col-lg-3 col-md-3 col-6">
                                        <div className={theme ? `card border-0 popular ml-3 theme` : `card border-0 popular ml-3 themee`} key={curval.id}>
                                            <img alt='imageposter' className="img-fluid" src={`https://image.tmdb.org/t/p/original/${curval.poster_path}`} />
                                            <div className="card-body">
                                                <h5 className="card-title mb-2">{curval.title}</h5><span></span>
                                                <Link exact to={{ pathname: `/${curval.title}/${curval.id}` }}><button className={`btn ${theme ? 'btn-outline-light' : 'btn-outline-info'}`}>View Detail</button></Link>
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
export default Trendd;
