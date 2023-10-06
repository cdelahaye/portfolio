import { useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'



const App = () => {
  const [page, setPage] = useState('home')


  return (
    <div>
      <div>
        <button onClick={() => setPage('home')}>home</button>
        <button onClick={() => setPage('about')}>about</button>
        <button onClick={() => setPage('work')}>my work</button>
        <button onClick={() => setPage('contact')}>contact</button>
      </div>

      <Home show={page === 'home'} />
      <About show={page === 'about'}/>
      <Work show={page === 'work'} />
      <Contact show={page === 'contact'}/>


    </div>
  )
}

export default App
