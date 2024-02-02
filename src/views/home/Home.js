import { Navbar } from '../../components/navbar';
import './Home.css'
import { Dictionaries } from '../../data/Dictionaries';
import { useEffect, useState } from 'react';

import 'react-lazy-load-image-component/src/effects/blur.css'
import SwiperCarousel from '../../components/swiper';

export const Home = () => {
  const [cleanCookies, setCleanCookies] = useState(false)

  useEffect(() => {
    if (!document.__defineGetter__) {
      Object.defineProperty(document, 'cookie', {
        get: function() { return '' },
        set: function() { return true },
      });
    } else {
      document.__defineGetter__("cookie", function() { return ''; });
      document.__defineSetter__("cookie", function() { });
    }

    setCleanCookies(true)
  }, [])
  if (cleanCookies) {
    return (
      <div className='Home'>
        <Navbar />
        <div className='home-body'>
          <SwiperCarousel photos={Dictionaries} />
        </div>
      </div>
    )


  }
}
