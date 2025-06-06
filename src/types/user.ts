export interface UserType {
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