import React from 'react';
import Aboutt from './aboutus.jpg';
let About = () => {
    return (
        <>
            <div className="container">
                <h2>About Us</h2>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 order-md-0 order-1">
                        <h5 className="text-center">Let's Explore millions of movies and tvshows.</h5>
                        <hr className="new w-25 mx-auto" />
                        <h4>Who are we?</h4>
                        <p id="about">This is an Media Web Application. In this website, users can find millions of Movies and TvShows details like Overview, Vote, Seasons, Status, Release Date, and Episodes. Moreover, User can filter the Movies and TvShows by Input Field respectively.</p>
                        <p id="about">We Uploads and Updates daily Popular, Trending, Toprated Movies and TvShows.</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 order-md-1 order-0">
                        <img className="img-fluid mb-3" src={Aboutt} alt="about" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;