
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './layout/footer'
import Header from './layout/header'
import AddProduct from './pages/add-part'
import Detail from './pages/detail'
import HomePage from './pages/home-page'


function App() {


  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/home-page' element={<AddProduct/>}/>
      <Route path='/home-page/:_id' element={<Detail/>}/>
     
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
