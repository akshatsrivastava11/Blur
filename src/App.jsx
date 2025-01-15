import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './components/Login'
import CreateAccountPage from './components/CreateAcc'
import CreatePost from './components/CreatePost'
import Post from './components/Post'
import { Page } from './components/Page'
import { Router } from 'react-router'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route   path='/' element={<Page/>} / >
    <Route path='login' element= {<LoginPage/>} />
      <Route path='Signup' element= {<CreateAccountPage/>} />
      <Route path='Add-post' element= {<CreatePost/>} />
      
   </Routes>
   </BrowserRouter>
  )
}

export default App
