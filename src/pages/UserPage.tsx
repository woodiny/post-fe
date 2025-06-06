import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import UserProfile from "../components/UserProfile";
import PostList from "../components/PostList";
import { useEffect, useState } from "react";
import { UserType } from "../types/user";
import { PostType } from "../types/post";
import { mockPost } from "../mocks/post";
import { mockUser } from "../mocks/user";

export default function UserPage() {
  const { userId } = useParams();
  const [user, setUser] = useState<UserType | null>(null);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual API calls
    const fetchUserData = async () => {
      try {
        // Simulated API call
        setUser(mockUser);
        setPosts([mockPost, mockPost]);
      } catch (error) {
        console.error("Error fetching user data:", error);
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
          <PostList posts={posts} userId={userId || ""} />
        </div>
      </div>
    </Layout>
  );
}
