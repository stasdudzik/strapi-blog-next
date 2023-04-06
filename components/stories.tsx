import PostPreview from './post-preview'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
}

const Stories = ({ posts }: Props) => {
  console.log("ALL POSTS IN STORIES", posts)
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        Blog
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.cover.data.attributes.url}
            date={post.publishedAt}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            id={post.id}
          />
        ))}
      </div>
    </section>
  )
}

export default Stories
