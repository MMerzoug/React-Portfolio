import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'
import References from './pages/Resume'
import Footer from './components/Footer'

function App() {
  const [page, setPage] = useState('about')

  function displayPage(){
    if(page === 'about'){
      return (<About />)
    }
    else if(page === 'work'){
      return(<Work />)
    }
    else if (page === 'contact'){
      return(<Contact />)
    }
    else {
      return (<References />)
    }
  }

  return (
    <>
      <Header page={page} setPage={setPage} />
     {displayPage()}
     <Footer setPage={setPage}  />
    </>
  )
}

export default App
