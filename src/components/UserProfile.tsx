import { UserType } from '../types/user';
import { FaGithub, FaTwitter, FaLinkedin, FaGlobe } from 'react-icons/fa';

interface UserProfileProps {
  user: UserType;
}

export default function UserProfile({ user }: UserProfileProps) {
  // Extract social IDs from URLs
  const getSocialId = (url: string) => {
    try {
      const urlObj = new URL(url);
      return urlObj.pathname.split('/').pop() || '';
    } catch {
      return '';
    }
  };

  return (
    <div className="max-w-2xl mx-auto pb-8 border-b border-gray-200">
      {/* Profile Header */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between mb-4">
          <h1 className="flex items-end text-3xl font-bold">{user.name}</h1>
          <img
            src={user.imageUrl}
            alt={user.name}
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
        <p className="text-gray-600 mb-4">{user.bio}</p>
        
        {/* Social Links */}
        <div className="flex flex-col gap-4">
          {user.socialLinks.github && (
            <a
              href={user.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FaGithub className="w-5 h-5" />
              <span className="text-sm">{getSocialId(user.socialLinks.github)}</span>
            </a>
          )}
          {user.socialLinks.twitter && (
            <a
              href={user.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FaTwitter className="w-5 h-5" />
              <span className="text-sm">{getSocialId(user.socialLinks.twitter)}</span>
            </a>
          )}
          {user.socialLinks.linkedin && (
            <a
              href={user.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
              <span className="text-sm">{getSocialId(user.socialLinks.linkedin)}</span>
            </a>
          )}
          {user.socialLinks.website && (
            <a
              href={user.socialLinks.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FaGlobe className="w-5 h-5" />
              <span className="text-sm">{new URL(user.socialLinks.website).hostname}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
} 