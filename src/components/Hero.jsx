import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex items-center backdrop-blur-0" id="home">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Hi, I'm{" "}
            <span className="text-accent">
              <TypeAnimation
                sequence={[
                  "Nikhil Telase",
                  1000,
                  "a Developer",
                  1000,
                  "an Innovator",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Python & MERN Stack Developer, passionate about building innovative<br/>
            solutions in AI, IoT, and Web Development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex gap-4"
        >
          <a
            href="#projects"
            className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg transition-all bg-primary"
          >
            View Projects
          </a>
          <a
            href="/nikhil-resume2.pdf"  // Update to a relative path
            download
            className="border text-primary border-accent text-accent hover:bg-accent/10 px-6 py-3 rounded-lg transition-all"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center text-white hover:text-accent transition-all"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 bg-primary rounded-full mt-2"
              />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
