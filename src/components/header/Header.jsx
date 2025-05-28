import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[#121212] shadow-lg border-b border-cyan-700">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-cyan-400 font-extrabold text-xl tracking-wider">
          INeedLogo
        </div>
        <div className="flex gap-8">
          <Link
            to="/"
            className="text-cyan-300 hover:text-cyan-500 transition-colors duration-300 font-semibold"
          >
            Products
          </Link>
          <Link
            to="/users"
            className="text-cyan-300 hover:text-cyan-500 transition-colors duration-300 font-semibold"
          >
            Users
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
