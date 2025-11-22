import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from '../components/Counter.jsx'
import Toggle from '../components/Toggle.jsx'
import PassHide from '../components/PassHide.jsx'
import CharacterCnt from '../components/CharacterCnt.jsx'
import FormVal from '../components/FormVal.jsx'
import Planet from '../components/Planet.jsx'
import Timer from '../components/Timer.jsx'
import Accordian from '../components/Accordian.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <div className='Main'>
      <Counter />
    </div>
    <Toggle />
    <PassHide />
    <CharacterCnt />
    <FormVal />
    <Timer/>
    <Accordian/>
    <Planet/>
    
    
  </StrictMode>,
)
