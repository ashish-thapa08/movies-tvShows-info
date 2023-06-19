import axios from 'axios';
import React, { useEffect, useContext } from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from "react-router-dom";
import Loading from '../Loading';
import Pagenotfound from '../Page Not Found/pagenotfound';
import { Themee } from '../Theme';
let Populartvdetail = () => {
    let [theme, setTheme] = useContext(Themee);
    let { showsname, showsid } = useParams();
    let Populardetail = () => {
        let url = `https://api.themoviedb.org/3/tv/${showsid}?api_key=32c2f8b05f0301b51959c90b965a06ba&language=en-US}`;
        return axios.get(url).then(response => response.data)
    }
    let Similartvshows = () => {
        let url = `https://api.themoviedb.org/3/tv/${showsid}/similar?api_key=32c2f8b05f0301b51959c90b965a06ba&language=en-US&page=1}`;
        return axios.get(url).then(response => response.data.results)
    }
    let showDetail = useQuery('shows-details', Populardetail)
    let showSimilar = useQuery('shows-similar', Similartvshows)
    console.log({ showDetail, showSimilar });
    useEffect(() => {
        showDetail.refetch();
        showSimilar.refetch();
        window.scrollTo({ top: 0, right: 0, behavior: 'smooth' });
    }, [showsid])
    if (showDetail.isLoading || showSimilar.isLoading) {
        return <Loading />
    }
    if (showDetail.isError || showSimilar.isError) {
        return <Pagenotfound />
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-12">
                        <img className="imgg" alt="seriesimage" src={`https://image.tmdb.org/t/p/original/${showDetail.data.poster_path}`} />
                    </div>
                    <div className="col-md-6 col-lg-6 col-12">
                        <h3>TV Show Title:</h3>
                        <h5>{showDetail.data.original_name}</h5><span>Tagline: {showDetail.data.tagline}</span>
                        <p><span className="overview">Total Number of Season: </span>{showDetail.data.number_of_seasons} || <span>Total Number of Episodes:</span>{showDetail.data.number_of_episodes}</p>
                        <p id="s3"><span className="overview">Overview: </span>{showDetail.data.overview}</p>
                        <p><span className="vote">Release Date: </span>{showDetail.data.first_air_date}</p>
                        <p><span className="vote">Status: </span>{showDetail.data.status}</p>
                        <p><span className="vote">Vote: </span>{showDetail.data.vote_average}</p>
                        <Link to={{ pathname: `/${showDetail.data.original_name}/${showDetail.data.id}/seasons` }}>View all seasons</Link>
                    </div>
                </div>
                <h3 className="mb-3 mt-3">Similar TV Shows</h3>
                <div className="row">
                    {
                        showSimilar.data.map((curval) => {
                            return (
                                <>
                                    <div className="col-md-3 col-lg-3 col-6">
                                        <div className={theme ? `card border-0 popular ml-3 theme` : `card border-0 popular ml-3 themee`} key={curval.id}>
                                            <img className="img-fluid" alt='seriesimage' src={`https://image.tmdb.org/t/p/original/${curval.poster_path}`} />
                                            <div className="card-body">
                                                <h5 className="card-title mb-2">{curval.original_name}</h5><span></span>
                                                <Link exact to={{ pathname: `/${curval.original_name}/${curval.id}/TvShows`, state: curval.id }}><button className={`btn ${theme ? 'btn-outline-light' : 'btn-outline-info'}`}>View Detail</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Populartvdetail;
