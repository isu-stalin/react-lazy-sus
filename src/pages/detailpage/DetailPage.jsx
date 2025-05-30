import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import LikeButton from "../likeButton/LikeButton"

const DetailPage = () => {
  const { id } = useParams()
  const { data: product, loading, error } = useFetch(`/products/${id}`)

  if (loading) return <div className="text-center py-20 text-gray-500">Loading...</div>
  if (error) return <div className="text-center py-20 text-red-500">Error: {error.message}</div>

  return (
    <div className="min-h-screen p-10 flex justify-center">
      <div className="max-w-3xl bg-gray-900 text-white p-8 rounded-lg shadow-lg">
      <LikeButton product={product} />
        <img src={product.image} alt={product.title} className="h-72 object-contain bg-white mb-6 w-full" />
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-xl text-cyan-300 mb-2">${product.price}</p>
        <p className="text-gray-300">{product.description}</p>
      </div>
    </div>
  )
}

export default DetailPage
