import { PostType } from "../types/post";

export const mockPost: PostType = {
  id: "1",
  title: "Getting Started with React and TypeScriptttttt",
  excerpt:
    "Learn how to build modern web applications with React and TypeScript",
  content: `# Getting Started with React and TypeScript

React and TypeScript are a powerful combination for building modern web applications. In this post, we'll explore how to get started with this stack.

## Why TypeScript?

TypeScript adds static typing to JavaScript, making your code more maintainable and less prone to runtime errors.

## Setting Up Your Project

1. Create a new project using Vite
2. Install dependencies
3. Configure TypeScript

## Best Practices

- Use functional components
- Leverage TypeScript's type system
- Follow React's latest patterns

## Conclusion

TypeScript and React together provide a robust foundation for building scalable applications.`,
  createdAt: new Date().toISOString(),
  readTime: 5,
  likes: 42,
  author: {
    id: "1",
    name: "woodiny",
    imageUrl: "https://avatars.githubusercontent.com/u/115877028?v=4",
  },
  tags: ["React", "TypeScript", "Web Development"],
  commentCount: 4,
};
