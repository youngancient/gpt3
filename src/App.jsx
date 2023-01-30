import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'

function App() {
  const [isClicked, setClick] = useState(false);

  return (
    <div className="App">
      <Header isClicked={isClicked} setClick={setClick} />
      <Main />
      <Footer />
    </div>
  )
}

export default App
