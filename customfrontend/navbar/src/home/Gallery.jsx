import React, { useState, useEffect } from 'react'
import { SRLWrapper } from "simple-react-lightbox";
import Song from './Song';
import AOS from 'aos';
import "aos/dist/aos.css";
import FadeIn from 'react-fade-in';
export default function Gallery() {
    let [gallery, setGallery] = useState(true);
    let [song, setSong] = useState(false);
    let Gallery = () => {
        setGallery(true)
        setSong(false);
    }
    let Songs = () => {
        setGallery(false)
        setSong(true);
    }
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <>
            <section data-aos="fade-zoom-in" className="about profilee mt-3">
                <div className="container">
                    <h2 className="pt-5 text-center">Profile</h2>
                    <hr className="mx-auto w-25" />
                    <div className="btn-group grp d-flex justify-content-between mb-3 w-50" role="group" aria-label="Basic outlined example">
                        <button type="button" onClick={Gallery} className={`btn btn-outline-dark ${gallery ? 'active' : ''}`}>Gallery</button>
                        <button type="button" onClick={Songs} className={`btn btn-outline-dark ${song ? 'active' : ''}`}>Music</button>
                    </div>
                    {gallery ? (
                        <>
                            <FadeIn>
                                <SRLWrapper>
                                    <div className="row">
                                        <div className="col-md-3 mb-3 col-lg-3 col-6">
                                            <img src="./Bravegirl/yuna.jpg" className="img-fluid preety " alt="..." />
                                        </div>
                                        <div className="col-md-3 mb-3 col-lg-3 col-6">
                                            <img src="./Bravegirl/eunji.jpg" className="img-fluid preety" alt="..." />
                                        </div>
                                        <div className="col-md-3 mb-3 col-lg-3 col-6">
                                            <img src="./Bravegirl/minyoung.jpeg" className="img-fluid preety" alt="..." />
                                        </div>
                                        <div className="col-md-3 mb-3 col-lg-3 col-6">
                                            <img src="./Bravegirl/yujeonglove.jpeg" className="img-fluid preety" alt="..." />
                                        </div>
                                        <div className="col-md-3 mb-3 col-lg-3 col-6">
                                            <img src="./Bravegirl/minyoung.jpeg" className="img-fluid preety" alt="..." />
                                        </div>
                                        <div className="col-md-3 mb-3 col-lg-3 col-6">
                                            <img src="./Bravegirl/yujeonglove.jpeg" className="img-fluid preety" alt="..." />
                                        </div>
                                        <div className="col-md-3 mb-3 col-lg-3 col-6">
                                            <img src="./Bravegirl/yuna.jpg" className="img-fluid preety" alt="..." />
                                        </div>
                                        <div className="col-md-3 mb-3 col-lg-3 col-6">
                                            <img src="./Bravegirl/eunji.jpg" className="img-fluid preety" alt="..." />
                                        </div>
                                    </div>
                                </SRLWrapper>
                            </FadeIn>
                        </>
                    ) : null}
                    {song ? (<><FadeIn><Song /></FadeIn></>) : null}
                </div>
            </section>
        </>
    )
}
