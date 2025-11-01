import { assets } from "../assets/assets";
import CardSwap, { Card } from "./CardSwap";

const Cards = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-6 sm:px-12 xl:px-32 py-16 mt-24 sm:mt-32 lg:mt-40">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 text-center lg:text-left">
        
        {/* --- Left Side: Heading + Subtext --- */}
        <div className="lg:w-1/3 flex flex-col justify-center items-center lg:items-start">
          <h2 className="text-3xl sm:text-4xl font-semibold leading-snug mb-4">
            Want to know about our Features?<br className="hidden lg:block" /> Here you go
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xs">
            Less chaos, more clarity — see your projects come alive.
          </p>
        </div>

        {/* --- Right Side: Card Animation Section --- */}
        <div className="relative w-full lg:w-2/3 max-w-3xl h-[400px] flex items-center justify-center">
          <CardSwap
            cardDistance={50}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            <Card className="w-[320px] h-[300px] p-6 bg-white border border-gray-200 rounded-2xl shadow-md flex flex-col justify-between text-left">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Manage Projects & Teams
              </h3>
              <img
                src={assets.main_img}
                alt="Manage"
                className="rounded-lg mb-2"
              />
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Create and manage multiple projects, invite team members, and
                keep everyone aligned in one place.
              </p>
            </Card>

            <Card className="w-[320px] h-[300px] p-6 bg-white border border-gray-200 rounded-2xl shadow-md flex flex-col justify-between text-left">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Tasks & Progress Tracking
              </h3>
              <img
                src={assets.main_img}
                alt="Tasks"
                className="rounded-lg mb-2"
              />
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Assign tasks, track progress, and ensure timely delivery with
                clear visibility for the whole team.
              </p>
            </Card>

            <Card className="w-[320px] h-[300px] p-6 bg-white border border-gray-200 rounded-2xl shadow-md flex flex-col justify-between text-left">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Smart Notifications
              </h3>
              <img
                src={assets.main_img}
                alt="Notifications"
                className="rounded-lg mb-2"
              />
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Get automatic email alerts and due-date reminders so your team
                never misses an important update.
              </p>
            </Card>
          </CardSwap>
        </div>
      </div>
    </div>
  );
};

export default Cards;
