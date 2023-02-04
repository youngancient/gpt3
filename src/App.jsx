import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import { useInView } from "react-intersection-observer";


function App() {
  const [isClicked, setClick] = useState(false);
  const { ref: mainRef, inView: mainInView } = useInView();
  return (
    <div className="App">
      <Header isClicked={isClicked} setClick={setClick} inView={mainInView}/>
      <div className="" ref={mainRef}>
        <Main />
      </div>
      <Footer />
    </div>
  )
}

export default App
