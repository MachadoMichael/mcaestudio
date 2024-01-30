// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay, EffectFade } from "swiper/modules";
import { Info } from "../photo-info/info";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "swiper/css/effect-fade";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useState } from "react";

const SwiperCarousel = ({ photos }) => {
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);
  return (
    <div className="container-swiper">
      <Swiper
        modules={[Autoplay, EffectFade]}
        pagination={{ clickable: true }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => {
          console.log(swiper);
        }}
        autoplay={
          firstImageLoaded ? { delay: 4000, pauseOnMouseEnter: true } : false
        }
        speed={1300}
      >
        {photos.map((photo) => (
          <div>
            <SwiperSlide>
              <div className="img-box">
                <LazyLoadImage
                  id="photo-img"
                  src={photo.img}
                  alt={photo.alt}
                  effect="blur"
                  onLoad={() => setFirstImageLoaded(true)}
                />
                <Info
                  architect={photo.architect}
                  companyPlace={photo.companyPlace}
                  localization={photo.localization}
                />
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
