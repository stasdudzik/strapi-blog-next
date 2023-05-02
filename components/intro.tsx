const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Apply 💡
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Hi, I'm <a href={'about'} className="font-medium  underline hover:no-underline"><b>Staszek</b></a> and I sometimes write about stuff I learned (mostly coding)
      </h4>
    </section>
  )
}

export default Intro
