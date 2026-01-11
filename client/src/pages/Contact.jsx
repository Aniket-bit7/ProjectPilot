import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form
        className="flex flex-col items-center text-sm mt-20"
        onSubmit={handleSubmit}
      >
        <p className="text-lg text-black font-medium pb-2">Contact Us</p>
        <h1 className="text-4xl font-semibold text-slate-700 pb-4">
          Get in touch with us
        </h1>
        <p className="text-sm text-gray-500 text-center pb-10 max-w-md mx-auto leading-relaxed">
          At EdgeWorks, our mission is to empower creators, developers, and
          businesses with cutting-edge AI tools that drive innovation. Whether
          you need support, guidance, or just want to connect, our team is here
          to help you every step of the way.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
          <div className="w-full">
            <label className="text-black/70" htmlFor="name">
              Your Name
            </label>
            <input
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <label className="text-black/70" htmlFor="email">
              Your Email
            </label>
            <input
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mt-6 w-[350px] md:w-[700px]">
          <label className="text-black/70" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300"
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`mt-5 bg-black text-white h-12 w-56 px-4 rounded active:scale-95 transition ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </>
  );
};

export default Contact;
