/* eslint-disable react/no-unescaped-entities */
// import { AiOutlineSend } from 'react-icons/ai'
// import Typewriter from 'typewriter-effect';
// import { Button } from "react-bootstrap";
import About from "./About";
import MySwiper from "./Components/HeroSwiper";
import WhatIDo from "./WhatIDo";
function Introduction() {


    return (
        <>
            <section>
                <div className="container hero-section py-lg-5 py-3">
                    <div className="row gy-4 justify-content-center align-items-center">
                        <div className="col-md-6  col-12 order-0 order-md-1">
                            <div className="content d-flex flex-column gap-3 align-items-lg-start">
                                <div className="">
                                    <h4 className="hello">Web Developer and Designer</h4>
                                    <h1>Hey! I'm <span className="name">Asif Ali</span>, I create innovative frontend solutions for future-ready enterprises.</h1>
                                </div>


                                <div className="social d-flex align-items-center gap-3">
                                    <span>Follow me : </span>
                                    <div className="social-icons d-flex gap-3 justify-content-center justify-content-md-start">
                                        <a href="#">
                                            <i className="fa-brands fa-whatsapp " title="Whatsapp"></i>

                                        </a>
                                        <a href="#">
                                            <i className="fa-regular fa-envelope" title="Mail"></i>
                                        </a>

                                        <a href="#">
                                            <i className="fa-brands fa-linkedin-in" title="LinkedIn"></i>
                                        </a>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="col-md-6 col-12 order-0 order-md-1">

                            <MySwiper />

                        </div>
                    </div>
                </div>



            </section>
            <About />
            <WhatIDo />
        </>

    )
}

export default Introduction
