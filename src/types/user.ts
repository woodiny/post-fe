export interface User {
  id: string;
  name: string;
  imageUrl: string;
  bio: string;
  socialLinks: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  createdAt: string;
  readTime: number;
  likes: number;
} 