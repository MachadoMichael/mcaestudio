// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar'
import { Autoplay, Scrollbar } from 'swiper/modules'

const SwiperCarousel = ({ photos }) => {
  return (
    <div className='container'>
      <Swiper
        modules={[Scrollbar, Autoplay]}
        scrollbar={{ draggable: true }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
      >
        {
          photos.map((photo, i) => <SwiperSlide key={i}>
            <div className='img-box'>
              <img className='photo-img' src={photo} alt={'photoname' + i} />
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;