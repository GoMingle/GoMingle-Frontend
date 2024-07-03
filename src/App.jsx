import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import CreateEvents from './pages/createEvents'
import Events from './pages/events'
import Profile from './pages/profile'
import AboutUs from './pages/aboutUs'

import RootLayout from './layouts/rootLayout'
import Landing from './pages/landing'


const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, children: [
      { index: true, element:<Landing/> },
      { path: '/aboutus', element: < AboutUs /> },
      { path: '/events', element: < Events /> },
      { path: '/createevents', element: <CreateEvents /> },
      { path: '/profile', element: < Profile /> }
    ]
  },

])

function App() {


  return (

    <RouterProvider router={router} />

  )
}

export default App
