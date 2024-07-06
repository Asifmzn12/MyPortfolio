/* eslint-disable react/no-unescaped-entities */
// import { AiOutlineSend } from 'react-icons/ai'
// import Typewriter from 'typewriter-effect';
// import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MySwiper from "./Components/HeroSwiper";
import WhatIDo from "./WhatIDo";
function Introduction() {


    return (
        <>
        <section>
            <div className="container py-lg-5 py-3">
                <div className="row gy-4 justify-content-center align-items-center">
                    <div className="col-md-6  col-12 order-1 order-md-0">
                    <div className="content">
                    <p className="header-small-title">Modern,Intractive, Minimal, Responsive</p>
                    <h1>Innovative Frontend Solutions for Future-Ready Enterprises</h1>
                    <Link to="/contact" className="site-btn-outline">Contact Me</Link>
                    </div>
                    </div>
                    <div className="col-md-6 col-12 order-0 order-md-1">

                        <MySwiper />

                    </div>
                </div>
            </div>



        </section>
        <WhatIDo/>
        </>

    )
}

export default Introduction
