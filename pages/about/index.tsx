import Container from '../../components/container'
import Intro from '../../components/intro'
import Layout from '../../components/layout'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`About in construction`}</title>
        </Head>
        <Container>
          <Intro />
        </Container>
      </Layout>
    </>
  )
}


