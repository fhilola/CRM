import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'
import Groups from './groups/Groups'
import Room from './room/Room'
import Subject from './subject/Subject'
import Time from './time/Time'
import Main from './main/Main'
import Accaunt from './user/Accaunt'
import Users from './users/Users'

const RouteController = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Main />} />
        <Route path="/guruhlar" element={<Groups />} />
        <Route path='/xonalar' element={<Room />} />
        <Route path='/fanlar' element={<Subject />} />
        <Route path='/accaunt' element={<Accaunt />} />
        <Route path='/vaqt' element={<Time />} />
        <Route path='/talabalar' element={<Users />} />
      </Route>

    </Routes>
  )
}

export default RouteController