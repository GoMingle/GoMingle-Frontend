import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Events from './pages/Events'
import AdminFeatures from './pages/AdminFeatures'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/events', element: <Events /> },
  { path: '/adminfeatures', element: <AdminFeatures /> }
])

function App() {


  return (

    <RouterProvider router={router} />

  )
}

export default App
