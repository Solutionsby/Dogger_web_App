import {dogs} from '../../db/dogs.json'
import { DogDesktop } from './dogDesktop/DogDesktop';
import { useDispatch, useSelector } from 'react-redux';
import { toggleState } from '../../redux/toggleSlice';
import { updateIndex } from '../../redux/sliderSlice';
import { setDesktop,setMobile } from '../../redux/screenSlice';
import  {RootState} from '../../redux/store'
import { DescryptionDog } from './backSiede/DescriptionDog';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './dog.scss'
import { useState,useRef, useEffect } from 'react';

interface Dog {
    id:number;
    name:string;
    age:number;
    gender:string;
    photo:string;
  }


export const Dog = ()=>{
    const dispatch = useDispatch();
    const isToggleOn = useSelector((state : RootState) => state.toggle.isToggleOn);

    const currentIndex = useSelector((state: RootState) => state.dogs.currentIndex);
    const isDesktop = useSelector((state: RootState) => state.screen.isDesktop)
   
    const [startX, setStartX] = useState(0);
    const swipeRef = useRef<number | null>(null);
  
    const handleTouchStart = (e: React.TouchEvent) => {
      setStartX(e.touches[0].clientX);
    };
  
    const handleTouchMove = (e: React.TouchEvent) => {
      const currentX = e.touches[0].clientX;
  
      if (startX - currentX > 50) {
        if (!swipeRef.current) {
          swipeRef.current = currentIndex;
          dispatch(toggleState(false))
        }
      } else if (currentX - startX > 50) {
        if (!swipeRef.current) {
          swipeRef.current = currentIndex;
          dispatch(toggleState(false))
        }
      }
    };
  
    const handleTouchEnd = () => {
      if (swipeRef.current !== null) {
        if (startX - swipeRef.current > 50) {
          dispatch(updateIndex(currentIndex < dogs.length - 1 ? currentIndex + 1 : 0));
        } else if (swipeRef.current - startX > 50) {
          dispatch(updateIndex(currentIndex > 0 ? currentIndex - 1 : dogs.length - 1));
        }
        swipeRef.current = null;
      }
    };


    const handleTurnOver = () =>{
      dispatch(toggleState(undefined));
     }
     const currentDog = dogs[currentIndex]

     const handleWindowResize = () =>{
      if(window.innerWidth > 768){
        dispatch(setDesktop())
      }else{
        dispatch(setMobile())
      }
     }
     useEffect(()=>{
      window.addEventListener('resize', handleWindowResize);
      return () =>{
        window.removeEventListener('resize',handleWindowResize)
      }
     },[dispatch]);

     console.log(isToggleOn)
    return(
    <>
      {!isDesktop && <div className={`dog-wrapper ${ isToggleOn ? 'flipped' : ""}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}>
        <div className="dog-photo" style={{backgroundImage:`url("${currentDog.photo}")`}} onClick={handleTurnOver}>
          {isToggleOn && <div className='arrow-return'><FontAwesomeIcon  className="arrow-return-icon"   icon={{ prefix: 'fas', iconName: 'caret-right' }} /></div>}
        {!isToggleOn && <div className="dog-data">
         <h1 className="dog-name">{currentDog.name}</h1>
         <h2 className="dog-age">{currentDog.age} lat</h2>
        <h2 className="dog-gender">{currentDog.gender}</h2>
        </div>}
        </div>
        <DescryptionDog isToggleOn = {isToggleOn}
        dogName = {currentDog.name}
        dogAge = {currentDog.age}
        dogGender={currentDog.gender}
        dogSize={currentDog.size}
        dogHair ={currentDog.hair}
        dogDescription ={currentDog.description}/>
      </div>}
      {isDesktop && <DogDesktop />}
      </>
    )
    
}

