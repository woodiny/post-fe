import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import UserProfile from '../components/UserProfile';
import PostList from '../components/PostList';
import { useEffect, useState } from 'react';
import { User, Post } from '../types/user';

export default function UserPage() {
  const { userId } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual API calls
    const fetchUserData = async () => {
      try {
        // Simulated API call
        const mockUser: User = {
          id: userId || '',
          name: 'Woodiny',
          imageUrl: 'https://avatars.githubusercontent.com/u/115877028?v=4',
          bio: 'Software engineer passionate about web development and open source, a passionate individual with a diverse background and a love for learning, creating, and connecting with others.',
          socialLinks: {
            github: 'https://github.com/woodiny',
            twitter: 'https://twitter.com/woodiny',
            linkedin: 'https://linkedin.com/in/woodiny',
          },
        };

        const mockPosts: Post[] = [
          {
            id: '1',
            title: 'Getting Started with React',
            excerpt: 'Learn the basics of React and how to build your first application...',
            createdAt: '2024-03-15T10:00:00Z',
            readTime: 5,
            likes: 42,
          },
          {
            id: '2',
            title: 'Advanced TypeScript Patterns',
            excerpt: 'Explore advanced TypeScript patterns and best practices for better type safety...',
            createdAt: '2024-03-10T15:30:00Z',
            readTime: 8,
            likes: 28,
          },
        ];

        setUser(mockUser);
        setPosts(mockPosts);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  if (isLoading) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      </Layout>
    );
  }

  if (!user) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900">User not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-8">
        <UserProfile user={user} />
        <div className="mt-12">
          <PostList posts={posts} userId={userId || ''} />
        </div>
      </div>
    </Layout>
  );
}
