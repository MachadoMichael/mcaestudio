import SwiperCarousel from '../../components/swiper';
import { Navbar } from '../../components/navbar';
import './Home.css'
import { fakeDictionaries } from '../../fake-data/fakeDictionaries';


export const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <div className='home-body'>
        <SwiperCarousel photos={fakeDictionaries} />
      </div>
    </div>
  );
}
