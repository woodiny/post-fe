import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';

export default function UserPage() {
  const { userId } = useParams();

  return (
    <Layout>
      <h1>User ID: {userId}</h1>
    </Layout>
  );
}
