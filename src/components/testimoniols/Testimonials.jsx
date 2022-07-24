import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


const data = [
  {
    avatar:AVTR1,
    name:'Sinem Polat',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut doloremque ipsum dicta id soluta recusandae voluptate praesentium eum temporibus ipsa!'

  },
  {
    avatar:AVTR2,
    name:'Sinem Polat',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut doloremque ipsum dicta id soluta recusandae voluptate praesentium eum temporibus ipsa!'

  },
  {
    avatar:AVTR3,
    name:'Sinem Polat',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut doloremque ipsum dicta id soluta recusandae voluptate praesentium eum temporibus ipsa!'

  },
  {
    avatar:AVTR4,
    name:'Sinem Polat',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut doloremque ipsum dicta id soluta recusandae voluptate praesentium eum temporibus ipsa!'

  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        /** navigation={true} */ 
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        >
       {
        data.map(({avatar, name, review}, index) => {
          return(
            <SwiperSlide key={index} className='testimonial'>
            <div className="client__avatar">
              <img src={avatar} alt="avatar one" />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className="client__review">
                {review}
              </small>
            
          </SwiperSlide>
          )
        })
       }
        </Swiper>
     
      </div>
    </section>
  )
}

export default Testimonials;