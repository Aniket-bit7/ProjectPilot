import Cards from "../Components/Cards"
import CTA from "../Components/CTA"
import Footer from "../Components/Footer"
import Hero from "../Components/Hero"
import Image from "../Components/Image"
import Navbar from "../Components/Navbar"
import Testimonial from "../Components/Testimonial"

const Home = () => {
  return (
    <section className="min-h-screen overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <Image/>
      <Cards/>
      <Testimonial/>
      <CTA/>
      <Footer/>
    </section>
  )
}

export default Home