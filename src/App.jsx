import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// function App() {
//   const [page, setPage] = useState('about')

//   function displayPage(){
//     if(page === 'about'){
//       return (<About />)
//     }
//     else if(page === 'work'){
//       return(<Work />)
//     }
//     else if (page === 'contact'){
//       return(<Contact />)
//     }
//     else {
//       return (<References />)
//     }
//   }

//   return (
//     <>
//       <Header page={page} setPage={setPage} />
//      {displayPage()}
//      <Footer setPage={setPage}  />
//     </>
//   )
// }

function App() {
  return(
  <Router>
    <Header />
    <Routes>
      < Route
        path="/"
        element={<About />}
      />
      <Route
        path="/Work"
        element={<Work />}
      />
      <Route
        path="/Contact"
        element={<Contact />}
      />
      <Route
        path="/Resume"
        element={<Resume />}
      />
      <Route
        path="*"
        element={<About />}
      />
    </Routes>
    <Footer/>
  </Router>
  );
}


export default App
