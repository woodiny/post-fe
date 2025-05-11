import { Post } from '../types/user';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

interface PostListProps {
  posts: Post[];
  userId: string;
}

export default function PostList({ posts, userId }: PostListProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Posts</h2>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.id} className="border-b border-gray-200 pb-8">
            <Link
              to={`/${userId}/${post.id}`}
              className="block hover:opacity-80 transition-opacity"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
            </Link>
            <div className="flex items-center text-sm text-gray-500">
              <time dateTime={post.createdAt}>
                {new Date(post.createdAt).toLocaleDateString()}
              </time>
              <span className="mx-2">·</span>
              <span>{post.readTime} min read</span>
              <span className="mx-2">·</span>
              <div className="flex items-center gap-1">
                <FaHeart className="w-4 h-4" />
                <span>{post.likes}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
} 