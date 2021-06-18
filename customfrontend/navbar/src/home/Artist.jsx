import React, { useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
export default function About() {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <>
            <section data-aos="fade-up" className="about artist">
                <div className="container">
                    <h2 className="text-center pt-3">Biography</h2>
                    <hr className="mx-auto w-25 hortz" />
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="card mt-3 prof">
                                <img src="./Bravegirl/eunji.jpg" className="card-img-top img-fluid" alt="..." />
                                <div className="card-body">
                                    <h5>Full Name: <span className="fw-light name">Hong Eun Ji</span></h5>
                                    <h5>Birthday: <span className="fw-light name">July 19, 1992</span></h5>
                                    <h5>Position: <span className="fw-light name">Main Rapper, Main Dancer, Vocalist, Center</span></h5>
                                    <h5>Height: <span className="fw-light name">168 cm (5’6″)</span></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="card mt-3 prof">
                                <img src="./Bravegirl/minyoung.jpeg" className="card-img-top img-fluid" alt="..." />
                                <div className="card-body">
                                    <h5>Full Name: <span className="fw-light name">Kim Min Young</span></h5>
                                    <h5>Birthday: <span className="fw-light name">Sep 12, 1990</span></h5>
                                    <h5>Position: <span className="fw-light name">Main Vocalist, Lead Dancer</span></h5>
                                    <h5>Height: <span className="fw-light name">168 cm (5’6″)</span></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="card mt-3 prof">
                                <img src="./Bravegirl/yuna.jpg" className="card-img-top img-fluid" alt="..." />
                                <div className="card-body">
                                    <h5>Full Name: <span className="fw-light name">Lee Yu Na</span></h5>
                                    <h5>Birthday: <span className="fw-light name">April 6, 1993</span></h5>
                                    <h5>Position: <span className="fw-light name">Lead Vocalist, Lead Dancer, Rapper, Maknae</span></h5>
                                    <h5>Height: <span className="fw-light name">165 cm (5’5″)</span></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12 love">
                            <div className="card prof mt-3">
                                <img src="./Bravegirl/yujeonglove.jpeg" className="card-img-top img-fluid" alt="..." />
                                <div className="card-body">
                                    <h5>Full Name: <span className="fw-light name">Nam Yu Jeong</span></h5>
                                    <h5>Birthday: <span className="fw-light name">May 2, 1991</span></h5>
                                    <h5>Position: <span className="fw-light name">Vocalist, Visual</span></h5>
                                    <h5>Height: <span className="fw-light name">163 cm (5’4″)</span></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
