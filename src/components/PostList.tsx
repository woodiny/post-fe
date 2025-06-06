import { PostListType } from "../types/post";
import { Link } from "react-router-dom";
import PostMeta from "./PostMeta";

export default function PostList({ posts, userId }: PostListType) {
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
            <PostMeta
              createdAt={post.createdAt}
              likes={post.likes}
              commentCount={post.commentCount}
            />
          </article>
        ))}
      </div>
    </div>
  );
}
