import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import A from './components/exam/A.jsx'
import B from './components/exam/B.jsx'

createRoot(document.getElementById('root')).render(
  <App />
)
