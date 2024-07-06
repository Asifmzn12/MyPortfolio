import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, EffectFade } from 'swiper/modules';
import  { Card, Container,  } from 'react-bootstrap';
import {education} from './config/educationcustomapi'
const Education = () => {
  return (
    <Container className='hero-right-image'>
    <Swiper
    slidesPerView={2}
    
    
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
                <Card.Body className='bg-black py-3'>
                <Card.Title className='education-title'>{data.Course}</Card.Title>
                  <Card.Text className='subheading'>{`${data.CollegeName}`}</Card.Text>
                  <Card.Text className='subheading'>{data.Board}</Card.Text>
                  <Card.Text className='subheading'>{` Percentage:  ${ data.Percentage} `}</Card.Text>
                </Card.Body>
              </Card>
     
      </SwiperSlide>
    ))}
    
     
     
    </Swiper>
    </Container>


  );
};

export default Education;
