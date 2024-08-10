import { useState } from 'react'
import './App.css'
import { motion, AnimatePresence } from "framer-motion"
import Quote from './components/Quote'
import TimeAndPlace from './components/TimeAndPlace'
import Detail from './components/Detail'
import { useTime } from './hooks/useTime'
import { TimeAPIProvider } from './context/TimeAPIContext'

function App() {
  const [showDetail, setShowDetail] = useState(false);

  const time = useTime();
    
  const hour = time.getHours();
  const min = time.getMinutes();
  
  if (hour >= 5 && hour < 18) {
      document.body.className = 'day'
  } else {
      document.body.className = 'night'
  }

  const toggleShowDetail = () => {
    setShowDetail(state => !state);
  }

  const timeAndPlaceProps = {
    showDetail,
    toggleShowDetail,
    hour,
    min
  }

  return (
    <>
    
      <AnimatePresence>
        { !showDetail && (
          <motion.div
            initial={{ y: -500, opacity: 0.5 }}
            animate={{ y: 0, opacity: 1}}
            exit={{ y: -500, opacity: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <Quote />
          </motion.div>
        )}
      </AnimatePresence>

      <TimeAPIProvider>

        <motion.div layout transition={{ duration: 0.2 }}>
          <TimeAndPlace {...timeAndPlaceProps} />
        </motion.div>
  
        <AnimatePresence>
          { showDetail && (
            <motion.div
              initial={{ y: 500, opacity: 0.5 }}
              animate={{ y: 0, opacity: 1}}
              exit={{ y: 500, opacity: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <Detail />
            </motion.div>
          )}
        </AnimatePresence>

      </TimeAPIProvider>

    </>
  )
}

export default App
