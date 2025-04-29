import { useParams } from 'react-router-dom';

export default function PostPage() {
  const { userId, postId } = useParams();

  return (
    <div>
      <h1>PostPage</h1>
      <p>User ID: {userId}</p>
      <p>Post ID: {postId}</p>
    </div>
  );
} 