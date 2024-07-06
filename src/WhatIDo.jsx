import { Work } from "./config/WorkIDo"
import Card from 'react-bootstrap/Card';

function WhatIDo() {
    return (
        <>
            <div className='container py-5'>
                <div className="d-flex flex-column gap-2 justify-content-md-center justify-content-start align-items-md-center mb-5">
                    <p className="site-subtitle-text fw-bold">What i do</p>
                    <h2 className="site-section-title">Innovative Design &amp; Development Services</h2>
                </div>


                <div className='row justify-content-md-start justify-content-center   align-items-center text-center'>

                    {
                        Work.ServicesIcons.map((Data) => (
                            <div data-aos="fade-right" className=' col-sm-6  col-md-4 col-lg-3 my-2 ' key={Data.id} >
                                <Card className='mylang position-relative overflow-hidden '>

                                    <Card.Body className='d-flex flex-column justify-content-center  align-items-center gap-lg-3 gap-1 position-relative '>
                                        <div className="skillimg">
                                            <Data.icons fill="#fff" fontSize={"56px"} loading="lazy" />

                                        </div>


                                        <Card.Text className='mb-0 fw-bold'>{Data.title}</Card.Text>
                                        <p className="mb-0">{Data.para}</p>

                                        <div>

                                        </div>


                                    </Card.Body>
                                </Card>
                            </div>
                        ))
                    }



                </div>
            </div>

        </>
    )
}

export default WhatIDo
