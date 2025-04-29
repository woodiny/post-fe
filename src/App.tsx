import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostPage from './pages/PostPage';
import MainPage from './pages/MainPage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:userId" element={<UserPage />} />
        <Route path="/:userId/:postId" element={<PostPage />} />
      </Routes>
    </Router>
  );
}

export default App;
