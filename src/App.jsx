import React from 'react'

import './Style.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Navbar from './Component/Navbar'


import Index from './Pages/Index';
import AddUser from './Pages/AddUser';
import UserList from './Pages/UserList';



const App = () => {
  return (
    <BrowserRouter>

    <Navbar/>

    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/adduser" element={<AddUser/>}/>
      <Route path="/userlist" element={<UserList/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App