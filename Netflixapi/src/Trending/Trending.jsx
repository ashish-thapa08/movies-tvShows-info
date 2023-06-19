import React, { useState, useEffect, useContext } from 'react';
import Loading from '../Loading';
import OwlCarousel from 'react-owl-carousel';
import { Themee } from '../Theme';
import { Link } from "react-router-dom";
import axios from 'axios'
import { useQuery } from 'react-query';
let Trendingg = () => {
    let url = "https://api.themoviedb.org/3/trending/all/day?api_key=32c2f8b05f0301b51959c90b965a06ba";
    return axios.get(url).then(response => response.data.results)
}
let Trending = (props) => {
    let [theme, setTheme] = useContext(Themee);
    let { isLoading, data } = useQuery('trending', Trendingg);
    if (isLoading) {
        return (<Loading />)
    }
    console.log(data);
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
    return (
        <>
            <div className="container">
                <h3 className="mb-3">Trending Movies</h3>
                <OwlCarousel className='owl-theme'{...options}>
                    {data.map((curval) => {
                        return (
                            <>
                                <div className={theme ? `card border-0 popular ml-3 theme` : ` card border-0 popular ml-3 themee`} key={curval.id}>
                                    <img className="img-fluid" src={`https://image.tmdb.org/t/p/original/${curval.poster_path}`} />
                                    <div className="card-body">
                                        <h5 className="card-title mb-2">{curval.title}</h5><span></span>
                                        <Link exact to={{ pathname: `${curval.title}/${curval.id}`, state: curval.id }}><button className={`btn ${theme ? 'btn-outline-light' : 'btn-outline-info'}`}>View Detail</button></Link>
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