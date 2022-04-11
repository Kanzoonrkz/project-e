import Navbar from "./Navbar"

const Paras = () => {
  return (
    <div className="text-black">
      <Navbar/>
      <section className="relative mb-24" >
        <img className="object-cover object-left h-96 md:h-max w-full" src="/girl.jpg" alt="background image" />
        <div className="mt-10 md:m-0 bg-white bg-opacity-40 md:bg-opacity-0 text-center md:text-left md:absolute md:top-1/2 md:left-2/3 md:transform md:-translate-x-1/2 md:-translate-y-1/2 max-w-2xl">
          <p className="text-md md: text-lg xl:text-2xl">ENJOY THIS OFFER TODAY</p>
          <p className="text-4xl md:text-5xl xl:text-7xl">New Collection Sale 40%</p>
          <button className="mt-6 py-3 px-8 border border-black rounded-full">SHOP NOW</button>
        </div>
      </section>
    </div>
  )
}

export default Paras