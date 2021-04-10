import React, { useState, useEffect } from 'react';
import Loading from '../Loading';
import OwlCarousel from 'react-owl-carousel';
import { Link } from "react-router-dom";
let Trending = () => {
    let [trending, setTrending] = useState([]);
    let [check, setCheck] = useState(true);
    let Movietrending = async () => {
        try {
            let movieurl = "https://api.themoviedb.org/3/trending/all/day?api_key=32c2f8b05f0301b51959c90b965a06ba";
            let moviedata = await fetch(movieurl);
            let moviedataa = await moviedata.json();
            //console.log(moviedataa.results);
            let data = moviedataa.results.map((curval, index) => ({
                title: curval.title,
                value: curval.id,
                poster: curval.poster_path,
                key: index
            }));
            setTrending(data);
            setCheck(false);
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        Movietrending();
    }, []);
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
    if (check) {
        return <Loading />
    }
    return (
        <>
            <div className="container">
                <h3 className="mb-3">Trending Movies</h3>
                <OwlCarousel className='owl-theme'{...options}>
                    {trending.map((curval) => {
                        return (
                            <>
                                <div className="card border-0 popular ml-3" key={curval.value}>
                                    <img className="img-fluid" src={`https://image.tmdb.org/t/p/original/${curval.poster}`} />
                                    <div className="card-body">
                                        <h5 className="card-title mb-2">{curval.title}</h5><span></span>
                                        <Link exact to={{ pathname: `${curval.title}/${curval.value}`, state: curval.value }}><button className="btn btn-outline-light">View Detail</button></Link>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </OwlCarousel>
            </div>
        </>
    )
}
export default Trending;