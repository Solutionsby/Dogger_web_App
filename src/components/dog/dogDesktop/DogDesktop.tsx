import "./dogDesktop.scss"
import {dogs} from "../../../db/dogs.json"

interface Dog {
    id:number;
    age:number;
    gender:string;
    name:string;
    photo:string;
}

export const DogDesktop =()=>{
    return(
        <div className="dog-desktop-wrapper">
            {dogs.map((dog:Dog)=>(
                <div key={dog.id} className="dog-photo dog-desktop" style={{backgroundImage:`url("${dog.photo}")`}}>
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
