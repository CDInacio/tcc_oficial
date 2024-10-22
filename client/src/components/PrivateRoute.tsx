import Navbar from './drawer/navbar/Navbar'
import Drawer from './drawer/Drawer'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  // const user = localStorage.getItem('user')
  // const token = localStorage.getItem('userToken')
  const isAuth = false

  return (
    <>
      {isAuth ? (
        <>
          <header>
            <Navbar />
          </header>
          <Drawer />
          <Outlet />
        </>
      ) : (
        <Navigate to="/signin" />
      )}
    </>
  )
}

export default PrivateRoute