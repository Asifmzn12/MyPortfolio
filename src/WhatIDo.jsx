import { Work } from "./config/WorkIDo"

function WhatIDo() {
    return (
        <>
            <div className='container py-lg-4 py-3'>
                <div className=" d-flex flex-column align-items-center mb-lg-5 mb-3">
                    <h2 className="">What i do</h2>
                    <h4 className=" text-center">Innovative Design &amp; Development Services</h4>
                </div>


                <div className='row'>

                    {
                        Work.ServicesIcons.map((Data) => (
                            <div className=' col-sm-6 col-lg-4 col-xl-3  my-2 d-flex ' key={Data.id} >
                                <div className='mylang d-flex flex-column align-items-start justify-content-start p-4 gap-3 '>

                                    <div className="skillimg align-self-start">
                                        <Data.icons fill="#fff" fontSize={"56px"} loading="lazy" />

                                    </div>


                                    <h3 className='mb-0 fw-bold'>{Data.title}</h3>
                                    <p className="mb-0 text-start opacity-75 ">{Data.para}</p>
                                   </div>
                            </div>
                        ))
                    }



                </div>
            </div>

        </>
    )
}

export default WhatIDo
