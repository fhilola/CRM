import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'
import Groups from './groups/Groups'
import Room from './room/Room'
import Subject from './subject/Subject'
import User from './user/User'
import Time from './time/Time'
import Main from './main/Main'

const RouteController = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Main />} />
        <Route path="/guruhlar" element={<Groups />} />
        <Route path='/xonalar' element={<Room />} />
        <Route path='/fanlar' element={<Subject />} />
        <Route path='/foydalanuvchilar' element={<User />} />
        <Route path='/vaqt' element={<Time />} />
      </Route>

    </Routes>
  )
}

export default RouteController