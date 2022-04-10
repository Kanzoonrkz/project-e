import Navbar from "./Navbar"

const Paras = () => {
  return (
    <div className="text-black">
      <Navbar/>
      <section className="relative mb-24" >
        <img className="object-clip" src="/girl.jpg" alt="background image" />
        <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 max-w-2xl">
          <p className="text-2xl">ENJOY THIS OFFER TODAY</p>
          <p className="text-7xl">New Collection Sale 40%</p>
          <button className="mt-6 py-3 px-8 border border-black rounded-full">SHOP NOW</button>
        </div>
      </section>
    </div>
  )
}

export default Paras