import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Sidebar from './components/Sidebar.jsx'
import Employees from './components/Employees.jsx'
import Departments from './components/Departments.jsx'
import Addresses from './components/Addresses.jsx'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('employees')

  const renderPage = () => {
    switch (activePage) {
      case 'employees':
        return <Employees />
      case 'departments':
        return <Departments />
      case 'addresses':
        return <Addresses />
      default:
        return <Employees />
    }
  }

  return (
    <div className="layout">
      <Header />
      <div className="main">
        <Sidebar setActivePage={setActivePage} />
        <div className="content">
          {renderPage()}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App