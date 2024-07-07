import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, EffectFade } from 'swiper/modules';
import  { Card} from 'react-bootstrap';
import {education} from './config/educationcustomapi'
const Education = () => {
  return (
    <div className='container py-lg-4 py-3'>
    <h2 className="site-section-title text-center mb-lg-5 mb-3 ">Education</h2>
    <Swiper
    slidesPerView={1}
    
    breakpoints={{
    992: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    }}
      spaceBetween={30}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
    
      navigation={false}
      pagination={false}
      modules={[Autoplay, EffectFade]}
      className="mySwiper"
    >
    {education.map((data, index) => (
      <SwiperSlide key={index} className=''>
       
              <Card className="">
                <Card.Body className='education-card py-3 d-flex flex-column'>
                <Card.Title className='education-title'>{data.Course}</Card.Title>
                  <Card.Text className='subheading'>{`${data.CollegeName}`}</Card.Text>
                  <Card.Text className='subheading'>{data.Board}</Card.Text>
                  <Card.Text className='subheading'>{` Percentage:  ${ data.Percentage} `}</Card.Text>
                </Card.Body>
              </Card>
     
      </SwiperSlide>
    ))}
    
     
     
    </Swiper>
    </div>


  );
};

export default Education;
