// App.jsx

import React, { useContext } from 'react'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Footer from './Footer'
import Miss from './Miss'
import NavBar from './Nav'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Edit from './Edit'
import DataContext, { DataProvider } from '../context/DataContext'
import ContactUs from './ContactUs'
import Login from '../component/Login'
import Register from '../component/Register'


const App = () => {


  return (
    <div style={{ backgroundColor: "rgb(250, 250, 250)" }}  >
      <DataProvider>
        <NavBar className='nav' />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/regester' element={<Register />} />

          <Route path='/' element={<Home />} />
          <Route path='post'>
            <Route index element={<NewPost />} />
            <Route path=':id' element={<PostPage />} />
          </Route>
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<ContactUs />} />
          <Route path='*' element={<Miss />} />
        </Routes>

      </DataProvider>


    </div>
  )
}

export default App