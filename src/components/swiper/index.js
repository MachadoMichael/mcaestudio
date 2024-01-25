// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Info } from '../photo-info/info';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'swiper/css/effect-fade'

const SwiperCarousel = ({ photos }) => {
  return (
    <div className='container-swiper'>
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
        effect='fade'
        fadeEffect={{ crossFade: true }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 4500, pauseOnMouseEnter: true }}
      >
        {
          photos.map((photo, i) => <SwiperSlide key={i}>
            <div className='img-box'>
              <LazyLoadImage
                className='photo-img'
                src={photo.img}
                alt={photo.alt}
              />
              <Info client={photo.architect} company={photo.company} localization={photo.place} />
            </div>
            <div className='info-box'>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
