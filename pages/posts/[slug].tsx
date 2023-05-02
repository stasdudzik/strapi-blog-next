import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import type PostType from '../../interfaces/post'

const baseUrl = process.env.STRAPI_BASE_URL

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter()
  const title = `${post?.title} | Staszek`
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{title}</title>
                <meta property="og:image" content={post.cover.data.attributes.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.cover.data.attributes.url}
                date={post.publishedAt}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export const getServerSideProps = async ({query}) => {
  const {id} = query
  const res = await fetch(`${baseUrl}/articles/${id}?populate=cover`, {method: "get"})
  const post = await res.json()

    const content = await markdownToHtml(post.data.attributes.content || '')

  return {
    props: { post: {...post.data.attributes, content} },
  }
}