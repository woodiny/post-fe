export interface PostType {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  createdAt: string;
  readTime: number;
  likes: number;
  commentCount: number;
  author: {
    id: string;
    name: string;
    imageUrl: string;
  };
  tags?: string[];
}

export interface PostMetaType {
  createdAt: string;
  likes: number;
  commentCount: number;
}

export interface PostListType {
  posts: PostType[];
  userId: string;
}