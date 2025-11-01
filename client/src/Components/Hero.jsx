import { useNavigate } from "react-router-dom";
import Particles from "./Particles";
import { assets } from "../assets/assets";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between items-center text-center overflow-hidden pb-10">
      {/* --- Background Particles Layer --- */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#dcdcdc", "#f5f5f5"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* --- Foreground Hero Content --- */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow px-6 sm:px-16 xl:px-32 pt-20 pb-10">
        <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold leading-[1.2] mb-4">
          Empower Your Team. Simplify <br />
          <span className="text-primary">Project Management</span>
        </h1>

        <p className="mt-2 max-w-xs sm:max-w-lg 2xl:max-w-xl text-gray-600 text-sm sm:text-base">
          From creating organizations to assigning tasks, manage your entire
          project lifecycle in one place. Collaborate with your team, stay
          connected through email notifications, and ensure timely delivery with
          automated reminders.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm sm:text-base">
          <button
            onClick={() => navigate("/project")}
            className="bg-black/80 text-white px-10 py-3 rounded-lg hover:scale-105 active:scale-95 transition cursor-pointer"
          >
            Get Started
          </button>
          <button className="bg-white px-10 py-3 rounded-lg border border-gray-300 hover:scale-105 active:scale-95 transition cursor-pointer">
            Watch Demo
          </button>
        </div>

        <div className="flex items-center gap-4 mt-8 mx-auto text-gray-600">
          <img src={assets.users_group} className="h-8"/> Trusted by many people
        </div>

      </div>
    </div>
  );
};

export default Hero;
