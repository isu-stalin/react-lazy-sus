import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'

const Layout = lazy(() => import('../pages/layout/Layout'))
const Products = lazy(() => import('../pages/product/Product'))
const Users = lazy(() => import('../pages/users/Users'))

const MainRoutes = () => {
  return (
    <Suspense fallback={<div className="text-center py-10">Loading route...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Products />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default MainRoutes