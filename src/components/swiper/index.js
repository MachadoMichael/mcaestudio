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
import { useEffect, useState } from "react";

const loadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = resolve;
    img.onerror = reject;
  });
};

const SwiperCarousel = ({ photos }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    Promise.all(photos.map((photo) => loadImage(photo.img))).then(() =>
      setIsLoaded(true)
    );
  }, [photos]);

  if (!isLoaded) {
    return <h2 style={{color:"#fff"}}>Carregando...</h2>;
  }

  return (
    <div className="container-swiper">
      <Swiper
        modules={[Autoplay, EffectFade]}
        pagination={{ clickable: true }}
        effect="fade"
        spaceBetween={50}
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => {
          console.log(swiper);
        }}
        autoplay={{
          delay: 4000,
          pauseOnMouseEnter: true,
          waitForTransition: true,
        }}
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
