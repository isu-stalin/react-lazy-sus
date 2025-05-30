import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import DetailPage from './detailpage/DetailPage'

const Layout = lazy(() => import('../pages/layout/Layout'))
const Products = lazy(() => import('../pages/product/Product'))
const Users = lazy(() => import('../pages/users/Users'))
const LikePage = lazy(() => import('../pages/likePage/LikePage'))

const MainRoutes = () => {
  return (
    <Suspense fallback={<div className="text-center py-10">Loading route...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Products />} />
          <Route path="users" element={<Users />} />
          <Route path="/product/:id" element={<DetailPage/>}/>
          <Route path='likepage' element={<LikePage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default MainRoutes