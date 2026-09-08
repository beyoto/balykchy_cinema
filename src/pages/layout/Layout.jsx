import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import SchedulePage from '../schedulepage/Schedulepage'
import MoviesSchedulePage from '../moviesschedulepage/Moviesschedulepage'
import ContactsPage from '../contactspage/Contactspage'

const Layout = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/schedule' element={<SchedulePage />} />
        <Route path='/schedule/movies' element={<MoviesSchedulePage />} />
        <Route path='/contacts' element={<ContactsPage />} />
      </Routes>

    </div>
  )
}

export default Layout
