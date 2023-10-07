import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'


const App = () => {


  return (
    <div>
      <Router> 
      <NavBar /> 
      <Routes> 
        <Route path="/portfolio" element={<Home />} />
        <Route path='/about' element={<About/>} /> 
        <Route path='/work' element={<Work />} /> 
        <Route path='/contact' element={<Contact />} /> 
      </Routes> 
    </Router> 


    </div>
  )
}

export default App
