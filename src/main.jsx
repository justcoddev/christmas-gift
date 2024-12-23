import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ChristmasGift from './components/ChristmasGift'
import Card from './components/card/Card'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ChristmasGift /> */}
    <Card />
  </StrictMode>,
)
