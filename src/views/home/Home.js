import { useEffect, useState } from 'react';
import { getAllFileUrls } from '../../firebase/storage';
import SwiperCarousel from '../../components/swiper';
import { Navbar } from '../../components/navbar';
import { Info } from '../../components/photo-info/info';
import './Home.css'


export const Home = () => {
  const [fileUrls, setFileUrls] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const folderPath = 'path/to/your/files'; // Change this to the actual path in your storage
        const urls = await getAllFileUrls(folderPath);
        setFileUrls(urls);
      } catch (error) {
        console.error('Error getting file URLs:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Home">
      <Navbar />
      <div className='home-body'>
        <SwiperCarousel photos={fileUrls} />
        <div className='info-box'>
          <Info client={'Michael Machado'} company={'M.ax Company'} localization={'Rio de Janeiro'} />
        </div>
      </div>
    </div>
  );
}
