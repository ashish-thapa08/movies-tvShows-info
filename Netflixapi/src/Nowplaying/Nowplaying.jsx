import React, { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import Loading from '../Loading';
import { useHistory } from "react-router-dom";
let Nowplaying = () => {
    let [nowplaying, setNowplaying] = useState([]);
    let history = useHistory();
    let [check, setCheck] = useState(true);
    let Nowplayingg = async () => {
        let url = "https://api.themoviedb.org/3/movie/now_playing?api_key=32c2f8b05f0301b51959c90b965a06ba&language=en-US&page=1"
        let moviedata = await fetch(url);
        let moviedataa = await moviedata.json();
        let data = moviedataa.results.map((curval, index) => ({
            title: curval.title,
            value: curval.id,
            poster: curval.poster_path,
            key: index
        }));
        console.log(data.title);
        setCheck(false);
        setNowplaying(data);
    }
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
    useEffect(() => {
        Nowplayingg();
    }, [])
    let Noww = (id) => {
        history.push({
            pathname: `movies`,
            state: { detail: id }
        });
    }
    if (check) {
        return <Loading />
    }
    return (
        <>
            <div className="container">
                <h3 className="mb-2">Now_Playing Movies</h3>
                <OwlCarousel className='owl-theme'{...options}>
                    {nowplaying.map((curval, index) => {
                        return (
                            <>
                                <div className="card border-0 popular ml-3" key={curval.value}>
                                    <img className="img-fluid" src={`https://image.tmdb.org/t/p/original/${curval.poster}`} />
                                    <div className="card-body">
                                        <h5 className="card-title mb-2">{curval.title}</h5><span></span>
                                        <button className="btn btn-outline-light" onClick={() => { Noww(curval.value) }}>View Detail</button>
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
export default Nowplaying;
