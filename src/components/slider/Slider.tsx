import './slider.scss';
import { useState, useEffect,useRef } from 'react';

interface Slide {
  photoUrl: string;
  index: number;
}

interface SliderProps {
  slides: Slide[];
}

export const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => {
      if(intervalRef.current !== null){
        clearInterval(intervalRef.current);
      }
    };
  }, [slides.length,currentIndex]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
    if(intervalRef.current !== null){
      clearInterval(intervalRef.current);
    }
  };


  return (
    <>
      <div className="slider" style={{ backgroundImage: `url(${slides[currentIndex].photoUrl})` }}>
        <div className='slide-dots'>
          {slides.map((slide, slideindex) => (
            <div
              key={slideindex}
              className={slideindex === currentIndex ? 'active' : ''}
              onClick={() => goToSlide(slideindex)}
            >
              ●
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

