import { Outlet } from 'react-router-dom'
import Container from '../../components/container/Container'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const Layout = () => {
  return (
    <>
      <Header />
      <main className="py-10 bg-gray-50 min-h-[calc(100vh-128px)]">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default Layout