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
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useState } from 'react';
import { width } from '@mui/system';


const SwiperCarousel = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  // let swiperInstance = null;

  const nextPhoto = () => {
    if (selectedPhoto < photos.length) {

      setSelectedPhoto(selectedPhoto + 1)
      console.warn(selectedPhoto)
    }
  }
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
        onSwiper={(swiper) => {
          nextPhoto()
          console.log(swiper)
          // swiperInstance = swiper
        }}
        autoplay={{ delay: 4500, pauseOnMouseEnter: true }}
        speed={1300}
      >
        <SwiperSlide >
          <div className='img-box'>
            <LazyLoadImage
              className='photo-img'
              src={photos[selectedPhoto].img}
              alt={photos[selectedPhoto].alt}
              effect='blur'
              width={500}
              height={500}
            // onLoad={(e) => {
            //   e.target.style.opacity = '1';
            //   if (selectedPhoto === 0 && swiperInstance) {
            //     swiperInstance.autoplay.start();
            //   }
            // }}
            />
            <Info client={photos[selectedPhoto].architect} company={photos[selectedPhoto].company} localization={photos[selectedPhoto].place} />
            <button title='btn-test' style={{ width: '300px', height: '400px' }} onClick={nextPhoto}> aakaka </button>
          </div>
          <div className='info-box'>
          </div>
        </SwiperSlide>


      </Swiper>

    </div>
  );
};

export default SwiperCarousel;
