import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from '../components/Counter.jsx'
import Toggle from '../components/Toggle.jsx'
import PassHide from '../components/PassHide.jsx'
import CharacterCnt from '../components/CharacterCnt.jsx'
import FormVal from '../components/FormVal.jsx'

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
    
  </StrictMode>,
)
