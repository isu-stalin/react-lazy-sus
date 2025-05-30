import { useStateValue } from "../../context"
import { useNavigate } from "react-router-dom"

const LikePage = () => {
  const [{ wishlist }] = useStateValue()
  const navigate = useNavigate()

  if (wishlist.length === 0) {
    return <div className="text-center py-20 text-gray-500">No items in wishlist.</div>
  }

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-cyan-400">My needs</h1>
      <div className="grid grid-cols-4 gap-8">
        {wishlist.map(product => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="relative bg-gradient-to-br from-[#1F2937] via-[#111827] to-[#374151] 
                      rounded-xl p-6 shadow-lg shadow-pink-500/50
                      border border-pink-600 hover:shadow-pink-400/80
                      transform hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-36 object-contain mb-4 bg-white w-full"
            />
            <h2 className="text-pink-300 font-extrabold text-lg mb-2 text-center">
              {product.title}
            </h2>
            <p className="text-pink-200 font-semibold text-xl">
              ${product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LikePage
