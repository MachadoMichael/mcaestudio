// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css'

// Import Swiper styles
import 'swiper/css';

const SwiperCarousel = ({ photos }) => {
  return (
    <div className='container'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          photos.map((photo, i) => <SwiperSlide key={i}>
            <div className='img-box'>
              <img className='photo-img' src={photo} />
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
