import useFetch from '../../hooks/useFetch'

const Users = () => {
  const { data, loading, error } = useFetch('/users')

  if (loading) return <p className="text-center py-20 text-gray-300">Loading users...</p>
  if (error) return <p className="text-center py-20 text-red-400">Error loading users</p>

  return (
    <div className="min-h-screen py-12 px-6 text-white">
      <h1 className="text-4xl font-bold mb-10 text-center text-cyan-400 drop-shadow">Users</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {data.map((user) => (
          <li
            key={user.id}
            className="p-6 bg-gradient-to-br from-[#101624] to-[#1e2d45] border border-cyan-500/20 rounded-2xl shadow-md hover:shadow-cyan-500/30 transition-all duration-300"
          >
            <p className="font-semibold text-xl text-cyan-300 mb-2">{user.username}</p>
            <p className="text-gray-300 mb-1">{user.email}</p>
            <p className="text-sm italic text-gray-500">Password: {user.password}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Users
