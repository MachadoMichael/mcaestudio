// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar'
import { Autoplay, EffectFade } from 'swiper/modules'
import { Info } from '../photo-info/info';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'swiper/css/effect-fade'


const SwiperCarousel = ({ photos }) => {

  let swiperInstance = null;
  return (
    <div className='container-swiper'>
      <Swiper
        modules={[Autoplay, EffectFade]}
        pagination={{ clickable: true }}
        effect='fade'
        fadeEffect={{ crossFade: true }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => swiperInstance = swiper}
        autoplay={{ delay: 4500, pauseOnMouseEnter: true }}
        speed={1300}
      >
        {
          photos.map((photo, i) => <SwiperSlide key={i}>
            <div className='img-box'>
              <LazyLoadImage
                className='photo-img'
                src={photo.img}
                alt={photo.alt}
                onLoad={(e) => {
                  e.target.style.opacity = '1';
                  if (i === 0 && swiperInstance) {
                    swiperInstance.autoplay.start();
                  }
                }}
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
