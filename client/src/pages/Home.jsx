import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

import Cards from "../Components/Cards";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Image from "../Components/Image";
import Navbar from "../Components/Navbar";
import Testimonial from "../Components/Testimonial";

const Home = () => {
  const navigate = useNavigate();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded && user) {
      navigate("/layout", { replace: true });
    }
  }, [isLoaded, user, navigate]);

  if (!isLoaded) return null;

  return (
    <section className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Image />
      <Cards />
      <Testimonial />
      <CTA />
      <Footer />
    </section>
  );
};

export default Home;
