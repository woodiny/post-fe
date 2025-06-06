import Layout from "../components/Layout";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect } from "react";
import PostMeta from "../components/PostMeta";
import { mockPost } from "../mocks/post";

export default function PostPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // TODO: Replace with actual data fetching
  const post = mockPost;

  return (
    <Layout>
      <article className="max-w-2xl mx-auto py-12">
        {/* Header */}
        <header className="mb-8 gap-4">
          <h1 className="text-6xl font-bold mb-8">{post.title}</h1>

          {/* Author and Meta Info */}
          <div className="flex items-center gap-4 mb-6 pb-8 border-b border-gray-200">
            <img
              src={post.author.imageUrl}
              alt={post.author.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium">{post.author.name}</p>
              <PostMeta
                createdAt={post.createdAt}
                likes={post.likes}
                commentCount={post.commentCount}
              />
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-base max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </Layout>
  );
}
