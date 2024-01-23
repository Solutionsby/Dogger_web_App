import "./dogDesktop.scss"
import {useSelector,useDispatch } from 'react-redux';
import { toggleState } from "../../../redux/toggleSlice";
import { RootState } from "../../../redux/store";
import {dogs} from "../../../db/dogs.json"
import { useState } from "react";
import { DescryptionDog } from "../backSiede/DescriptionDog";
import {Slider} from "../../slider/Slider"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';


interface Dog {
    id:number;
    age:number;
    gender:string;
    name:string;
    photo:string;
}


export const DogDesktop=()=>{
const dispatch = useDispatch();
const isToggleOn = useSelector((state : RootState) => state.toggle.isToggleOn);
const [dogClickedId, setClickedId] = useState<number | null >(null)

const hendelTurnOverDesktop = (dogID:number)=>{
    if(dogID === dogClickedId){
        setClickedId(null)
    }else{
        setClickedId(dogID)
    }
    dispatch(toggleState(undefined))
}
    return(
        <div className={`dog-desktop-wrapper`}>
            <div className={`dog-desktop-test ${isToggleOn ? 'fadeIn' : 'hidden'} ${dogClickedId !== null ? 'flipped' : ''}`} >
               {isToggleOn && <>
                <div className="dog-photo dog-photo-desktop">
                    <Slider slides={dogs[dogClickedId!].slidesPhoto}/>
                </div>

                <div className="dog-desktop-description">
                <div className='arrow-return-desktop' onClick={() => isToggleOn && dogClickedId !== null && hendelTurnOverDesktop(dogs[dogClickedId]?.id)}><FontAwesomeIcon  className="arrow-return-icon"   icon={{ prefix: 'fas', iconName: 'caret-right' }} /></div>
                    <DescryptionDog desktop={"desktop"} isToggleOn={isToggleOn} dogName={dogs[dogClickedId!].name} dogAge={dogs[dogClickedId!].age} dogGender={dogs[dogClickedId!].gender} dogSize={dogs[dogClickedId!].size} dogDescription={dogs[dogClickedId!].description} dogHair={dogs[dogClickedId!].hair}
                    maxLenght={500}/>
                </div>
                </>} 
            </div>
            {!isToggleOn && dogs.map((dog:Dog)=>(
                <div key={dog.id} className={`dog-photo dog-desktop ${ isToggleOn  && dogClickedId === dog.id ? 'flipped':""}`} style={{backgroundImage:`url("${dog.photo}")`}} onClick={()=>hendelTurnOverDesktop(dog.id)}>
                    <div className="overlay"><h1 className="name-text">{dog.name}</h1></div>
                    <div className="dog-data">
                        <h2 className="dog-name">{dog.name}</h2>
                        <h3 className="dog-age">{dog.age} lat</h3>
                        <h3 className="dog-gender">{dog.gender}</h3>
                    </div>
                </div>
            ))}
        </div>
    )
}
