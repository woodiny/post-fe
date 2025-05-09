import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';

export default function PostPage() {
  const { postId } = useParams();

  return (
    <Layout>
      <h1>Post ID: {postId}</h1>
    </Layout>
  );
}
