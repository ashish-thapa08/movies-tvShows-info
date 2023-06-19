import React, { useState, useEffect, useContext } from 'react';
import OwlCarousel from 'react-owl-carousel';
import Loading from './Loading';
import { Link } from "react-router-dom";
import Trending from './Trending/Trending';
import Toprated from './Toprated/Toprated';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Themee } from './Theme';
let Popular = () => {
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=32c2f8b05f0301b51959c90b965a06ba";
    return axios.get(url).then(response => response.data.results)
}
let Movies = () => {
<<<<<<< HEAD
    let [theme, setTheme] = useContext(Themee);
    let { isLoading, data, isError, error } = useQuery('popular-movie', Popular);
    console.log({ isLoading, data });
=======
    let [movie, setMovie] = useState([]);
    let [check, setCheck] = useState(true);
    let Moviedata = async () => {
        try {
            let movieurl = "https://api.themoviedb.org/3/movie/popular?api_key=32c2f8b05f0301b51959c90b965a06ba";
            let moviedata = await fetch(movieurl);
            let moviedataa = await moviedata.json();
            let data = moviedataa.results.map((curval, index) => ({
                title: curval.title,
                value: curval.id,
                overview: curval.overview,
                poster: curval.poster_path,
                key: index
            }));
            setMovie(data);
            setCheck(false);
        }
        catch (err) {
            console.log(err);
        }
    }
>>>>>>> 49368b8b6229a90792dd6d11bc3772b8ff53bb06
    const options = {
        responsiveClass: true,
        nav: true,
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
            },
            400: {
                items: 2,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 5,

            }
        },
    };
    if (isLoading) {
        return (<Loading />)
    }
    if (isError) {
        return (<p className='text-center'>{error.message}</p>)
    }
    return (
        <>
            <div className="container">
                <h3 className="mb-3">Popular Movies</h3>
                <OwlCarousel className='owl-theme'{...options}>
                    {data.map((curval, index) => {
                        return (
                            <>
                                <div className={theme ? `card border-0 popular ml-3 theme` : ` card border-0 popular ml-3 themee`} key={curval.id}>
                                    <img className="img-fluid" src={`https://image.tmdb.org/t/p/original/${curval.poster_path}`} alt='' />
                                    <div className="card-body">
                                        <h5 className="card-title mb-2">{curval.title}</h5><span></span>
                                        <Link exact to={`${curval.title} / ${curval.id}`}><button className={`btn ${theme ? 'btn-outline-light' : 'btn-outline-info'}`}>View Detail</button></Link>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </OwlCarousel>
            </div>
            <Trending />
            <Toprated />
        </>
    )
}
export default Movies;
