import React from 'react'
import AddUser from './components/adduser/AddUser'
import UserList from './components/userlist/UserList';
import './App.css'

const App = () => {
  return (
    <div className='app_container'>
      <AddUser />
      <UserList />
    </div>
  )
}

export default App
