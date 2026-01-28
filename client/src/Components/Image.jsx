import main_img from "../../public/Screenshot 2026-01-28 at 11.32.30 PM.png"
const Image = () => {
  return (
    <div className="relative z-10 w-full flex justify-center px-6 sm:px-16 xl:px-32">
      <div className="w-full max-w-5xl border border-gray-300 rounded-2xl shadow-md p-2 sm:p-3 bg-white">
        <img
          src={main_img}
          alt="Project Management Illustration"
          className="w-full h-auto object-contain rounded-xl"
        />
      </div>
    </div>
  );
};

export default Image;
