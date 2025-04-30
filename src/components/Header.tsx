import { Link, useLocation } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

export default function Header() {
  const location = useLocation();
  
  const pathParts = location.pathname.split('/').filter(Boolean);
  const isUserPage = pathParts.length === 1;
  const isPostPage = pathParts.length === 2;
  const userId = (isUserPage || isPostPage) ? pathParts[0] : null;

  return (
    <header className="fixed top-0 left-0 right-0 h-16 border-b border-gray-200 bg-white/80 backdrop-blur-sm z-50">
      <div className="max-w-screen-xl mx-auto px-4 h-full flex items-center justify-between">
        <div>
          {userId ? (
            <Link to={`/${userId}`} className="text-xl font-semibold hover:text-gray-600 transition-colors">
              {userId}
            </Link>
          ) : (
            <Link to="/" className="text-xl font-semibold hover:text-gray-600 transition-colors">
              Woodiny Post
            </Link>
          )}
        </div>
        <div>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <FaUser className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
} 