import React, { Suspense } from 'react'
import Reff from './components/Reff'
import Refff from './components/Refff'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
// import Dashboard from './components/Dashboard'
const Dashboard = React.lazy( ()=> import('./components/Dashboard') )

// import Profile from './components/Profile'
const Profile = React.lazy( ()=>import('./components/Profile') )


function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/dashboard' element={ <Suspense fallback="loading1..."> <Dashboard/> </Suspense> } />
          <Route path='/profile' element={ <Suspense fallback="loading2..."> <Profile/> </Suspense> } />
        </Routes>
        <div>
          <Link to='/dashboard'>Dashboard</Link>
          <Link to='/profile'>Profile</Link>
          {/* <Reff /> */}
          {/* <Refff /> */}
        </div>
    </>
  )
}

export default App