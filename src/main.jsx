import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import GetEmployees from './EmployeeDetails.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <hr></hr>
    <GetEmployees />
  </StrictMode>,
)
