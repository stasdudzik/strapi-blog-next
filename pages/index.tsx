import Container from '../components/container'
import Stories from '../components/stories'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'

const baseUrl = process.env.STRAPI_BASE_URL

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head>
        <Container>
          <Intro />
          <Stories posts={allPosts} />
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  // const allPosts = getAllPosts([
  //   'title',
  //   'date',
  //   'slug',
  //   'author',
  //   'coverImage',
  //   'excerpt',
  // ])

    console.log("BASE URL",`${baseUrl}/articles`)
  const res = await fetch(`${baseUrl}/articles?populate[0]=cover`, {method: "get"})
  const allPosts = await res.json()
  console.log("ALL POSTS", allPosts.data[0].attributes, allPosts.data[0].attributes.cover.data)
  return {
    props: { allPosts: allPosts.data.map(i => i.attributes) },
  }
}
