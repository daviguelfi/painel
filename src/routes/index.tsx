import React from 'react'
import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom'

import Home from '../pages/'
import PatientDetails from '../pages/checklist/[uuid]'

const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/checklist/:uuid' element={<PatientDetails />} />
    </Routes>
  )
}

export default MainRoutes
