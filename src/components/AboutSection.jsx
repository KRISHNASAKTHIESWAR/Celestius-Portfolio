import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRobot, FaServer } from 'react-icons/fa';

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-dark-100 ">
      <div className="container mx-auto px-6 backdrop-blur-0" >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm a passionate software developer with expertise in Python and the MERN stack. 
            I love building projects in IoT, robotics, and automation, aiming to create 
            user-friendly and innovative solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 ">
          {[
            {
              icon: FaCode,
              title: "Web Development",
              description: "Building responsive and dynamic web applications using modern technologies"
            },
            {
              icon: FaRobot,
              title: "IoT & Robotics",
              description: "Creating innovative solutions combining hardware and software"
            },
            {
              icon: FaServer,
              title: "Backend Development",
              description: "Developing robust and scalable server-side applications"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className=" bg-gray-800/50 p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all"
            >
              <service.icon className="text-primary text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AboutSection;