import { Link } from 'react-router-dom';
import { useAuth } from '../../context/GlobalContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Büroease</h1>
        <nav className="space-x-4 flex items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
            Home
          </Link>
          
          {user ? (
            <>
              <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 font-medium">
                Dashboard
              </Link>
              <button 
                onClick={logout}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Logout
              </button>
              <span className="ml-2 text-sm text-gray-500">
                Welcome, {user.name || user.email}
              </span>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 hover:text-blue-600 font-medium">
                Login
              </Link>
              <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-medium">
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;