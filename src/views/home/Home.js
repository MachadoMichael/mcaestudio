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
  let timer;

  const changePhoto = (side) => {
    if (side === 'next' && selectedPhoto < Dictionaries.length - 1) setSelectedPhoto(selectedPhoto + 1)
    if (side === 'prev' && selectedPhoto > 0) setSelectedPhoto(selectedPhoto - 1)
  }

  function handleInterval() {
    if (pause && selectedPhoto < Dictionaries.length - 1) {
      setPause(false)
      setTimeout(() => setSelectedPhoto(selectedPhoto => selectedPhoto + 1))
    } else {
      setPause(true)
      clearTimeout(timer)
    }
  }

  function smoothTransition() {
    if (!pause && selectedPhoto < Dictionaries.length - 1) timer = setTimeout(() => setSelectedPhoto(selectedPhoto => selectedPhoto + 1), 4000)
    if (pause) clearTimeout(timer)
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
                onLoad={smoothTransition}
              />
            </motion.div>
          </div>
          <Info architect={Dictionaries[selectedPhoto]["architect"]} companyPlace={Dictionaries[selectedPhoto]["companyPlace"]} localization={Dictionaries[selectedPhoto]["localization"]} />
          <div id='controllers'>
            <SkipPreviousIcon className='button' onClick={() => setSelectedPhoto(0)} sx={{ color: 'whitesmoke' }} />
            <NavigateBeforeIcon className='button' onClick={() => changePhoto('prev')} sx={{ color: selectedPhoto === 0 ? 'disable' : 'whitesmoke' }} />
            {pause
              ? <PlayArrowIcon className='button' onClick={handleInterval} sx={{ color: 'whitesmoke' }} />
              : <PauseIcon className='button' onClick={handleInterval} sx={{ color: 'whitesmoke' }} />
            }
            <NavigateNextIcon className='button' onClick={() => changePhoto('next')} sx={{ color: selectedPhoto === 63 ? 'disable' : 'whitesmoke' }} />
            <SkipNextIcon className='button' onClick={() => setSelectedPhoto(63)} sx={{ color: 'whitesmoke' }} />

          </div>
        </div>
      </div>
    </div>
  );
}
