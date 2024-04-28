import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Dashboard from './dashboard/Dashboard'
import Loading from '../components/loading/Loading'
const Main = lazy(() => import('./main/Main'));
const Group = lazy(() => import('./groups/Groups'));
const Room = lazy(() => import('./room/Room'));
const Subject = lazy(() => import('./subject/Subject'));
const Accaunt = lazy(() => import('./user/Accaunt'));
const Time = lazy(() => import('./time/Time'));
const Users = lazy(() => import('./users/Users'));

const RouteController = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Suspense fallback={<Loading/>}>
          <Main/>
        </Suspense>} />
        <Route path="/guruhlar" element={<Suspense fallback={<Loading/>}>
          <Group/>
        </Suspense>} />
        <Route path='/xonalar' element={<Suspense fallback={<Loading/>}>
          <Room/>
        </Suspense>} />
        <Route path='/fanlar' element={<Suspense fallback={<Loading/>}>
          <Subject/>
        </Suspense>} />
        <Route path='/accaunt' element={<Suspense fallback={<Loading/>}>
          <Accaunt/>
        </Suspense>} />
        <Route path='/vaqt' element={<Suspense fallback={<Loading/>}>
          <Time/>
        </Suspense>} />
        <Route path='/talabalar' element={<Suspense fallback={<Loading/>}>
          <Users/>
        </Suspense>} />
      </Route>

    </Routes>
  )
}

export default RouteController