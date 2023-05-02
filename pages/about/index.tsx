import Container from '../../components/container'
import Header from '../../components/header'
import Layout from '../../components/layout'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`About staszek.xyz`}</title>
        </Head>
        <Container>
          {<div className="max-w-2xl mx-auto mb-20">
            <Header />
            <h2 className="text-6xl text-lg leading-relaxed mt-8 mb-4 leading-snug">About me</h2>
<p className="mt-4 text-xl text-slate-700 dark:text-slate-800">
    Hi. I’m Staszek. Nice to meet you! I am a web developer passionate about always learning new things. I also like bike packing, cooking, reading and playing Magic(The Gathering).
</p> 
<h2 className="text-6xl text-lg leading-relaxed mt-8 mb-4 leading-snug">How I got here</h2>
<p className="mt-4 text-xl text-slate-700 dark:text-slate-800">My programming initiation came pretty late, I only started learning to code (Python) during one of my university internships, mainly for data exploration. Later on I worked for a data journalism department in one of daily newspapers.</p>
<p className="mt-4 text-xl text-slate-700 dark:text-slate-800">I gradually got more and more interested in web development and got my first developer job in IT in January 2021. I have been using JavaScript on frontend and backend. I am currently growing more and more interested in designing backends.</p>
<h2 className="text-6xl text-lg leading-relaxed text-2xl mt-8 mb-4 leading-snug">Why write about it?</h2>
<p className="mt-4 text-xl text-slate-700 dark:text-slate-800">Coding requires <b>constant learning</b> so I want to document this process for future me and others taking a similar path. So in short I’m trying not to forget things I learned.</p>
<p className="mt-4 text-xl text-slate-700 dark:text-slate-800">
    I am not a native English speaker and I need <b>practice.</b> I want to improve both in thinking and writing in my second language. I realise how important it gets in often remote and international work environment to be able to <a className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline" href="https://blog.pragmaticengineer.com/becoming-a-better-writer-in-tech/">communicate efficiently</a> in a written form.
</p>
          </div>}
        </Container>
      </Layout>
    </>
  )
}


