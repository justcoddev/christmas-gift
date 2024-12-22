import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ChristmasGift from './components/ChristmasGift'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChristmasGift />
  </StrictMode>,
)
