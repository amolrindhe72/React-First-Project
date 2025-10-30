import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Sidebar from './components/Sidebar.jsx'
import Policies from './components/Policies.jsx'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('policies')

  const renderPage = () => {
    switch (activePage) {
      case 'policies':
        return <Policies />
      default:
        return <Policies />
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