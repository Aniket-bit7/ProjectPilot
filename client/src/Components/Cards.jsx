import CardSwap, { Card } from "./CardSwap";
import main_img from "../../public/black-white-gradient-background-with-white-black-background_1065176-7753.jpg"

const FEATURES = [
  {
    title: "Manage Projects & Teams",
    description:
      "Create and manage multiple projects, invite team members, and keep everyone aligned in one place."
  },
  {
    title: "Tasks & Progress Tracking",
    description:
      "Assign tasks, track progress, and ensure timely delivery with clear visibility for the whole team."
  },
  {
    title: "Smart Notifications",
    description:
      "Get automatic email alerts and due-date reminders so your team never misses an important update."
  }
];

const Cards = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-6 sm:px-12 xl:px-32 py-16 mt-24 sm:mt-32 lg:mt-40">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 text-center lg:text-left">

        <div className="lg:w-1/3 flex flex-col justify-center items-center lg:items-start">
          <h2 className="text-3xl sm:text-4xl font-semibold leading-snug mb-4">
            Want to know about our Features?
            <br className="hidden lg:block" /> Here you go
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xs">
            Less chaos, more clarity — see your projects come alive.
          </p>
        </div>

        <div className="relative w-full lg:w-2/3 max-w-3xl h-[400px] items-center justify-center hidden lg:flex">
          <CardSwap
            cardDistance={50}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            {FEATURES.map((item, index) => (
              <Card
                key={index}
                className="w-[320px] h-[300px] p-6 bg-white border border-gray-200 rounded-2xl shadow-md flex flex-col justify-between text-left"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {item.title}
                </h3>

                <img
                  src={main_img}
                  alt={item.title}
                  className="rounded-lg mb-2 h-[200px] object-cover"
                />

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 lg:hidden mt-12">
        {FEATURES.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-[320px] p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h3 className="mb-3 text-lg font-semibold text-gray-800">
              {item.title}
            </h3>

            <img
              src={main_img}
              alt={item.title}
              className="mb-3 w-full h-[160px] object-cover rounded-lg"
            />

            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
