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

const SwiperCarousel = ({ photos }) => {
  return (
    <div className="container-swiper">
      <Swiper
        modules={[Autoplay, EffectFade]}
        pagination={{ clickable: true }}
        effect="fade"
        spaceBetween={50}
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        autoplay={{ delay: 4500, pauseOnMouseEnter: true, LazyLoadImage: true }}
      >
        {photos.map((photo, i) => (
          <SwiperSlide key={i}>
            <div className="img-box">
              <LazyLoadImage
                id="photo-img"
                src={photo.img}
                alt={photo.alt}
                effect="blur"
              />
              <Info
                architect={photo.architect}
                companyPlace={photo.companyPlace}
                localization={photo.localization}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
