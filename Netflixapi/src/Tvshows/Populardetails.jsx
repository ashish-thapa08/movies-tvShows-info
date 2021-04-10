import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import Loading from '../Loading';
let Populartvdetail = () => {
    let [populartvdetail, setPopulartvdetail] = useState({});
    let history = useHistory();
    const location = useLocation();
    let id = location.state;
    let [loading, setLoading] = useState(true);
    let [similar, setSimilar] = useState([]);
    let Populardetail = async () => {
        try {
            let url = `https://api.themoviedb.org/3/tv/${id}?api_key=32c2f8b05f0301b51959c90b965a06ba&language=en-US}`;
            let detail = await fetch(url);
            let dataa = await detail.json();
            //console.log(dataa);
            setPopulartvdetail(dataa);
            setLoading(false);
        }
        catch (err) {
            if (err) throw err;
            alert(`Many Traffic!!! Refresh it ^_^`)
            history.push('/');
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
                setSimilar(data);
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
    useEffect(() => {
        Populardetail();
        Similartvshows();
    }, [id]);
    if (loading) {
        return <Loading />
    }
    return (
        <>
            <div className="container">
                {id ? (
                    <>
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-12">
                                <img className="imgg" alt="movieimage" src={`https://image.tmdb.org/t/p/original/${populartvdetail.poster_path}`} />
                            </div>
                            <div className="col-md-6 col-lg-6 col-12">
                                <h3>TV Show Title:</h3>
                                <h5>{populartvdetail.name}</h5><span>Tagline: {populartvdetail.tagline}</span>
                                <p><span className="overview">Total Number of Season: </span>{populartvdetail.number_of_seasons} || <span>Total Number of Episodes:</span>{populartvdetail.number_of_episodes}</p>
                                <p id="s3"><span className="overview">Overview: </span>{populartvdetail.overview}</p>
                                <p><span className="vote">Release Date: </span>{populartvdetail.first_air_date}</p>
                                <p><span className="vote">Status: </span>{populartvdetail.status}</p>
                                <p><span className="vote">Vote: </span>{populartvdetail.vote_average}</p>
                                <Link to={{ pathname: `/TvShows/${populartvdetail.name}/${populartvdetail.id}/seasons`, state: populartvdetail.id }}>View all seasons</Link>
                            </div>
                        </div>
                        <h3 className="mb-3 mt-3">Similar TV Shows</h3>
                        <div className="row">
                            {similar.length === 0 ? (<p className="ml-3">Similar TvShows not available!!!</p>) :
                                similar.map((curval) => {
                                    return (
                                        <>
                                            <div className="col-md-3 col-lg-3 col-6">
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
                ) : (<p>Page Not Found</p>)}

            </div>
        </>
    )
}
export default Populartvdetail;
