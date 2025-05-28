import useFetch from "../../hooks/useFetch"

const Products = () => {
  const { data, loading, error } = useFetch('/products')

  if (loading) return <div className="text-center py-20 text-gray-500">Loading...</div>
  if (error) return <div className="text-center py-20 text-red-500">Error: {error.message}</div>

  return (
    <div className="min-h-screen p-10">
  <div className="grid grid-cols-4 gap-8">
    {data.map(product => (
      <div
        key={product.id}
        className="bg-gradient-to-br from-[#1F2937] via-[#111827] to-[#374151] 
                   rounded-xl p-6 shadow-lg shadow-cyan-500/50
                   border border-cyan-600 hover:shadow-cyan-400/80
                   transform hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col items-center"
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-36 object-contain mb-4 bg-white w-full"
        />
        <h2 className="text-cyan-400 font-extrabold text-lg mb-2 text-center">
          {product.title}
        </h2>
        <p className="text-cyan-300 font-semibold text-xl">
          ${product.price}
        </p>
      </div>
    ))}
  </div>
</div>

  )
}

export default Products