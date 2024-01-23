import "./descryptionDog.scss"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import {toggleStateText} from "../../../redux/toggleText"
import  {RootState} from '../../../redux/store'



interface DogData{
    isToggleOn:boolean,
    dogName:string,
    dogAge:number,
    dogGender:string,
    dogSize:string,
    dogHair:string,
    dogDescription:string,
    desktop?:string,
    maxLenght?:number

}


export const DescryptionDog:React.FC<DogData> = ({isToggleOn,dogName,dogAge,dogGender,dogSize,dogHair,dogDescription,desktop,maxLenght}) =>{
    const dispatch = useDispatch();
    const isTextExpanded = useSelector((state : RootState) => state.toggleText.isToggleOnText)

    const expandText = (text:string,maxLenght:number) =>{
        if(text.length<= maxLenght ){
           return text 
        }
        return text.substring(0,maxLenght) + '...';
    }


    const handleClickexpandedText = ()=>{
        dispatch(toggleStateText())
    }
    return <div className={`descriptionDogWrapper ${desktop} ${isToggleOn ? 'flipped' : ""}`}>
        <div className="dog-data-flipped-side">
            <h1 className="dog-name">{dogName}</h1>
            <h1>{dogAge}</h1>
        </div>
        <div className="dog-data-more-flipped-side">
            <div className="data-gender data">
            <FontAwesomeIcon  className="icon"  icon={{ prefix: 'fas', iconName: 'venus-mars' }} />
            <h2>{dogGender}</h2>
            </div>
            <div className="data-size data">
            <FontAwesomeIcon  className="icon"   icon={{ prefix: 'fas', iconName: 'up-right-and-down-left-from-center' }} />
            <h2>{dogSize}</h2>
            </div>
            <div className="data-hair data">
            <FontAwesomeIcon  className="icon"   icon={{ prefix: 'fas', iconName: 'dog' }} />
            <h2>{dogHair}</h2>
            </div>
        </div>
        <div className="dog-form-link">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeecnFYfqQ9Hi7JmCjwnw9XuWjO6qg6iTjWmxNYgwULh1LPZA/viewform?vc=0&c=0&w=1&flr=0&pli=1">Ankieta przedadopcyjna<FontAwesomeIcon  className="icon"   icon={{ prefix: 'fas', iconName: 'heart' }} /></a>
        </div>
        <div className="description-dog-flipped-side">
            <p>{isTextExpanded ? dogDescription : expandText(dogDescription,maxLenght!)}</p>
            {dogDescription.length > maxLenght! && (
            <button onClick={handleClickexpandedText}>
            {isTextExpanded  ? 'Zwiń' : 'Rozwiń'}
        </button>
      )}

        </div>
        <div className="back-up"></div>

        
    </div>
}   

