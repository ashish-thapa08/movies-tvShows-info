import axios from 'axios';
import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { Link } from "react-router-dom";
import Loading from '../Loading';
import { Themee } from '../Theme';
let Toprated = () => {
    let [theme, setTheme] = useContext(Themee);
    let Tvrated = () => {
        let url = "https://api.themoviedb.org/3/tv/top_rated?api_key=32c2f8b05f0301b51959c90b965a06ba&language=en-US&page=1";
        return axios.get(url).then(response => response.data.results);
    }
    let { data, isLoading, isError, error } = useQuery('top-rated', Tvrated);
    console.log(data);
    if (isLoading) {
        return <Loading />
    }
    if (isError) {
        return <p>{error.message}</p>
    }
    return (
        <>
            <div className="container">
                <h3 className="mb-3">Top Rated Tv Shows</h3>
                <div className="row">
                    {data.map((curval) => {
                        return (
                            <>
                                <div className="col-md-3 col-lg-3 col-6">
                                    <div className={theme ? `card border-0 popular ml-3 theme` : `card border-0 popular ml-3 themee`} key={curval.id}>
                                        <img className="img-fluid" alt='tvimage' src={`https://image.tmdb.org/t/p/original/${curval.poster_path}`} />
                                        <div className="card-body">
                                            <h5 className="card-title mb-2">{curval.original_name}</h5><span></span>
                                            <Link exact to={{ pathname: `${curval.original_name}/${curval.id}/TvShows`, state: curval.tvid }}><button className={`btn ${theme ? 'btn-outline-light' : 'btn-outline-info'}`}>View Detail</button></Link>
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
export default Toprated;