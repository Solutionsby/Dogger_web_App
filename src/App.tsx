
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {MainPage} from "./components/mainPage/mainPage"


function App() {
return(
 <Router>
  <div className="app-wrapper">
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  </div>
 </Router>
)
}

export default App
