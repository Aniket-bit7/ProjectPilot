import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="bg-white py-20 px-6 text-black text-center mt-20">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">
        Ready to Transform Your Workflow?
      </h1>
      <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-10">
        Join thousands of people already using{" "}
        <span className="gradient-title1 font-semibold">ProjectPilot</span> to
        streamline their projects and boost productivity.
      </p>
      <Link to="/project">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 mx-auto cursor-pointer"
        >
          Start For Free →
        </motion.button>
      </Link>
    </section>
  );
};

export default CTA;
