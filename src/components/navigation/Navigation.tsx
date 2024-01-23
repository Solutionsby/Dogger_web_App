import './navigation.scss'
import { Link } from 'react-router-dom'


export const Navigation =()=>{
    return(
        <div className="navigation-wrapper">
            <a href="https://www.sejsza.pl/" className='logo-link'><div className="logo"></div></a>
            <Link to="/adoption">Adopcja</Link>
            <Link to="/">Nasi Podobpieczni</Link>
        </div>
    )
}