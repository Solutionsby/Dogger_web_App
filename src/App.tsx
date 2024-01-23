
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {MainPage} from "./components/mainPage/mainPage"
import { library } from '@fortawesome/fontawesome-svg-core';
import {faVenusMars,faUpRightAndDownLeftFromCenter,faDog,faHeart,faCaretRight} from '@fortawesome/free-solid-svg-icons'
import { Navigation } from './components/navigation/Navigation';
import { AdoptionSteps } from './components/adoptionSteps/adoptionSteps';


function App() {
library.add(faVenusMars,faUpRightAndDownLeftFromCenter,faDog,faHeart,faCaretRight)
return(
 <Router>
  <div className="app-wrapper">
  <Navigation />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/adoption" element={<AdoptionSteps />} />
    </Routes>
  </div>
 </Router>
)
}

export default App
