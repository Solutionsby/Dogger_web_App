import "./dogDesktop.scss"
import {useSelector,useDispatch } from 'react-redux';
import { toggleState } from "../../../redux/toggleSlice";
import { RootState } from "../../../redux/store";
import {dogs} from "../../../db/dogs.json"
import { useState } from "react";


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

console.log(dogClickedId)
console.log(isToggleOn)
console.log(dogs[0].id)
    return(
        <div className={`dog-desktop-wrapper`}>
            {!isToggleOn && dogs.map((dog:Dog)=>(
                <div key={dog.id} className={`dog-photo dog-desktop ${ isToggleOn  && dogClickedId === dog.id ? 'flipped':""}`} style={{backgroundImage:`url("${dog.photo}")`}} onClick={()=>hendelTurnOverDesktop(dog.id)}>
                    <div className="dog-data">
                        <h2 className="dog-name">{dog.name}</h2>
                        <h3 className="dog-age">{dog.age} lat</h3>
                        <h3 className="dog-gender">{dog.gender}</h3>
                    </div>
                </div>
            ))}
            {isToggleOn && <div className="dog-desktop-flipped" onClick={()=> dogClickedId !== null && hendelTurnOverDesktop(dogs[dogClickedId]?.id)}>
                <div className="dog-photo dog-photo-desktop" style={{ backgroundImage: dogClickedId !== null ? `url("${dogs[dogClickedId]?.photo}")` : 'none' }}></div>
                </div>}
        </div>
    )
}
