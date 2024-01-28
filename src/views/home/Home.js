import { Navbar } from '../../components/navbar';
import './Home.css'
import { Dictionaries } from '../../data/Dictionaries';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Info } from '../../components/photo-info/info';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { motion } from 'framer-motion'

export const Home = () => {
  const [pause, setPause] = useState(true)
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [intervalRef, setIntervalRef] = useState()

  const changePhoto = (side) => {
    if (side === 'next' && selectedPhoto < Dictionaries.length - 1) setSelectedPhoto(selectedPhoto + 1)
    if (side === 'prev' && selectedPhoto > 0) setSelectedPhoto(selectedPhoto - 1)
  }

  function carousel() {
    setSelectedPhoto(selectedPhoto => selectedPhoto < Dictionaries.length - 1 ? selectedPhoto + 1 : 0)
  }

  function handleInterval() {
    if (pause) {
      setPause(false)
      setIntervalRef(setInterval(carousel, 4000))
    } else {
      setIntervalRef(null)
      clearInterval(intervalRef)
      setPause(true)
    }
  }

  return (
    <div className="Home">
      <Navbar />
      <div className='home-body'>
        <div id='square'>
          <div id='lazy-image-container'>

            <motion.div
              key={selectedPhoto}
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 1, times: [0, 1], loop: true }}
            >
              <LazyLoadImage
                id={`lazy-image`}
                className={`image`}
                src={Dictionaries[selectedPhoto].img}
                effect='blur'
              />
            </motion.div>
          </div>
          <Info architect={Dictionaries[selectedPhoto]["architect"]} companyPlace={Dictionaries[selectedPhoto]["companyPlace"]} localization={Dictionaries[selectedPhoto]["localization"]} />
          <div id='controllers'>
            <SkipPreviousIcon onClick={() => setSelectedPhoto(0)} sx={{ color: 'whitesmoke' }} />
            <NavigateBeforeIcon onClick={() => changePhoto('prev')} sx={{ color: selectedPhoto === 0 ? 'disable' : 'whitesmoke' }} />
            {pause
              ? <PlayArrowIcon onClick={handleInterval} sx={{ color: 'whitesmoke' }} />
              : <PauseIcon onClick={handleInterval} sx={{ color: 'whitesmoke' }} />
            }
            <NavigateNextIcon onClick={() => changePhoto('next')} sx={{ color: selectedPhoto === 63 ? 'disable' : 'whitesmoke' }} />
            <SkipNextIcon onClick={() => setSelectedPhoto(63)} sx={{ color: 'whitesmoke' }} />

          </div>
        </div>
      </div>
    </div>
  );
}
