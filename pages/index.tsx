import Container from '../components/container'
import Stories from '../components/stories'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
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
          <title>{`Staszek Blog`}</title>
        </Head>
        <Container>
          <Intro />
          <Stories posts={allPosts} />
        </Container>
      </Layout>
    </>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(`${baseUrl}/articles?populate[0]=cover`, {method: "get"})
  const allPosts = await res.json()
  return {
    props: { allPosts: allPosts.data.map((i) => {return {id:i.id, ...i.attributes}}) },
  }
}
