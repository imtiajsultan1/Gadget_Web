
import { Outlet } from "react-router-dom"
import Header from '../Navbar/Navbar'
import FooterComponent from '../Footer/Footer'
import { ShopProvider } from '../../Context/ShopContext'

function Layout() {
  return (
    <ShopProvider>
      <Header/>
      <Outlet/>
      <FooterComponent/>
    </ShopProvider>
  )
}

export default Layout
