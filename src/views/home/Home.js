import SwiperCarousel from '../../components/swiper';
import { Navbar } from '../../components/navbar';
import './Home.css'
import { Dictionaries } from '../../data/Dictionaries';


export const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <div className='home-body'>
        <SwiperCarousel photos={Dictionaries} />
      </div>
    </div>
  );
}
