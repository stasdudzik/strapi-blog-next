import type Author from "./author";

type PostType = {
  slug: string;
  title: string;
  publishedAt: string;
  cover: { data: { attributes: { url: string } } };
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
};

export default PostType;
