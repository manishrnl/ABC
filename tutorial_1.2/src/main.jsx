import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Functions from './Functions.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Functions />
  </StrictMode>,
)
