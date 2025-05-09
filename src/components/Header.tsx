import { Link, useLocation } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Header() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const pathParts = location.pathname.split('/').filter(Boolean);
  const isUserPage = pathParts.length === 1;
  const isPostPage = pathParts.length === 2;
  const encodedUserId = (isUserPage || isPostPage) ? pathParts[0] : null;
  const userId = encodedUserId ? decodeURIComponent(encodedUserId) : null;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 right-0 h-16 border-b border-gray-200 bg-white/80 backdrop-blur-sm z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-screen-xl mx-auto px-4 h-full flex items-center justify-between">
        <div>
          {userId ? (
            <Link to={`/${encodedUserId}`} className="text-3xl font-semibold italic hover:text-gray-600 transition-colors">
              {userId}
            </Link>
          ) : (
            <Link to="/" className="text-3xl font-semibold italic hover:text-gray-600 transition-colors">
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