import React from 'react'
import { Routes, Route, useNavigate , Navigate} from 'react-router-dom'
import Login from './components/login/Login'
import './index.css'
import Admin from './components/admin/Admin'
import Doctor from './components/doctor/Doctor'
import AddUser from './components/admin/users/AddUser'
import HeaderAdmin from './components/admin/layout/Header'
import HeaderDoctor from './components/doctor/Header'
import User from './components/admin/users/User'
import Pay from './components/admin/Pay'
import SendUser from './components/admin/users/SendUser'
import ShopUser from './components/admin/users/ShopUser'
import Phamacy from './components/admin/phamacy/Phamacy'
import AddPhamacy from './components/admin/phamacy/AddPhamacy'
import EditPhamacy from './components/admin/phamacy/EditPhamacy'
import Chrck from './components/doctor/Chrck'


const App = () => {
  // const token = localStorage.getItem('accessToken');
  const statusLogin = localStorage.getItem('statusLogin');
  const login = localStorage.getItem('login');

  // if(!token) {
  //   return <Login />
  // }

  return (
    <div >
      {statusLogin == 1 && <HeaderAdmin />}
      {statusLogin == 2  && <HeaderDoctor/> }
      {login == 1 ? <Login/> : (

<div className='ml-4 mr-4 mt-20 mb-4  p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
<Routes>
    <Route path='/admin' element={<Admin/>} />  
    <Route path='/login' element={<Login/>} />
    <Route path='/' element={<Navigate to="/login"/>}/>
    <Route path='/addUser' element={<AddUser/>} />
    <Route path='/user' element={<User/>} />
    <Route path='/pay' element={<Pay/>} />
    <Route path='/sendUser' element={<SendUser/>} />
    <Route path='/shopUser' element={<ShopUser/>}/>
    <Route path='/phamacy' element={<Phamacy/>}/>
    <Route path='/addPhamacy' element={<AddPhamacy/>}/>
    <Route path='/editPhamacy' element={<EditPhamacy/>}/>


    <Route path='/doctor' element={<Doctor/>} />
    <Route path='/check' element={<Chrck/>}/>


</Routes>
</div>

      )  }

 
    </div>
  )
}

export default App