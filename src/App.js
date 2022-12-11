import {motion} from 'framer-motion'
import {useRef,useState, useEffect} from 'react';
import './App.css'
import images from './assets'
function App() {
  const [width,setWidth] = useState(0)
  const carousel = useRef()
  useEffect(()=>{ 
setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth)
  },[])
  return (
    <div className="App">
   <motion.div className="courosel">
    <motion.div drag='x' 
    dragConstraints={{right:0,left:-width}} 
    whileTap={{cursor:'grabbing'}} 
    className="inner-carousel" ref={carousel} >
      {images.map(image=>{
        return(
          <motion.div className="item">
            <img src={image} alt="" />
          </motion.div>
        )
      })}
    </motion.div>
   </motion.div>
    </div>
  );
}

export default App;
