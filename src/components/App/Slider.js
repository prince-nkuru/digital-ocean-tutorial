import React, {useState, useEffect} from "react";
import './Slider.css'

const Slider = () => {

  const photos = ['prince', 'alice', 'sami', 'shema'];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout( () => {handleNext()}, 5000);

    return () => {
      clearTimeout(timer)
    }
  }, [activeIndex])

  const handleNext = () => {
    if (activeIndex < photos.length -1){
      setActiveIndex(activeIndex => activeIndex + 1)
    }else {
      setActiveIndex(activeIndex => activeIndex - (photos.length -1) )
    }
  
  }
  const handlePrev = () => {
    if (activeIndex > 0){
      setActiveIndex(activeIndex => activeIndex - 1)
    } else {
      setActiveIndex(activeIndex => photos.length - 1)
    }

    
    
  }
  return ( 
    <div className="slider">
      <button className="previous" onClick={handlePrev}>Previous</button>
      <div className="content">{photos[activeIndex]}</div>
      <button className="next" onClick={handleNext}>Next</button>
    </div>
   );
}
 
export default Slider;