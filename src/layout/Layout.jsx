import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <h1>Desde Layour.jsx</h1>
        <Outlet/>
    </div>
  )
}

export default Layout