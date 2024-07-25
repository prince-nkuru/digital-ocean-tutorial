import React, {useState, useEffect} from "react";
import './Slider.css'

const Slider = () => {

  const photos = [
    'https://up.yimg.com/ib/th?id=OIP.YwR66UZXxs79opETjFrXbAHaGl&pid=Api&rs=1&c=1&qlt=95&w=124&h=110',
    'https://up.yimg.com/ib/th?id=OIP.BfXQ9JprR7C0Ao-hbklhawEsEA&pid=Api&rs=1&c=1&qlt=95&w=126&h=108', 
    'https://up.yimg.com/ib/th?id=OIP.tZq4FbHI-2VuBSGkHjfyfAHaHa&pid=Api&rs=1&c=1&qlt=95&w=108&h=108', 
    'https://up.yimg.com/ib/th?id=OIP.G-OJ62sOhr5UuQP5sJkX0gHaF7&pid=Api&rs=1&c=1&qlt=95&w=135&h=108',
    'https://up.yimg.com/ib/th?id=OIP.8GTGPsTibIdvVTlbvs-vUwHaFj&pid=Api&rs=1&c=1&qlt=95&w=144&h=108',
    'https://up.yimg.com/ib/th?id=OIP.RGlqtc5PUWkELfoDzc8dLQHaHQ&pid=Api&rs=1&c=1&qlt=95&w=110&h=108'
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout( () => {handleNext()}, 3000);

    return () => {
      clearTimeout(timer)
    }
  }, [activeIndex])

  // const handleNext = () => {
  //   if (activeIndex < photos.length -1){
  //     setActiveIndex(activeIndex => activeIndex + 1)
  //   }else {
  //     setActiveIndex(activeIndex => activeIndex - (photos.length -1) )
  //   }

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex < photos.length - 1 ? prevIndex + 1 : 0));
  };
  
  
  // const handlePrev = () => {
  //   if (activeIndex > 0){
  //     setActiveIndex(activeIndex => activeIndex - 1)
  //   } else {
  //     setActiveIndex(activeIndex => photos.length - 1)
  //   }

    
    
  // }

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : photos.length - 1));
  };
  return ( 
    <div className="slider">
      <button className="previous" onClick={handlePrev}>Previous</button>
      <div className="content">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Slide ${index}`}
            className={index === activeIndex ? 'active' : ''}    // this logic is the key point
          />
        ))}
      </div>
      <button className="next" onClick={handleNext}>Next</button>
    </div>
   );
}
 
export default Slider;