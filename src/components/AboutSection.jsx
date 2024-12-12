import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp, FaBrain, FaCode, FaHandHolding, FaLightbulb, FaRobot, FaServer, FaStepForward } from 'react-icons/fa';

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-dark-100">
      <div className="container mx-auto px-6 backdrop-blur-0">
        {/* Heading and Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Us</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
          Club Celestius is a student-run organization that aims to provide a platform for competitive programming and technology enthusiasts to develop their skills, collaborate on innovative projects, and connect with industry professionals.
          
          Our mission is to create a vibrant community where members can explore new technologies, participate in coding challenges, and work on real-world industrial projects. We believe in the power of mentorship and strive to connect our members with experienced professionals who can guide them in their academic and professional journeys.
          </p>
          
        </motion.div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: FaCode,
              title: "Skill Development",
              description: "nhance your programming skills through workshops, coding challenges, and hands-on projects."
            },
            {
              icon: FaHandHolding,
              title: "Collaboration",
              description: "Collaborate with fellow members on innovative projects and learn from each other's experiences."
            },
            {
              icon: FaLightbulb,
              title: "Innovation",
              description: "Explore new technologies and participate in coding competitions to showcase your innovative ideas."
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 p-6 rounded-lg shadow-lg hover:transform hover:scale-105 hover:bg-primary/20 transition-all ease-in-out duration-300"
            >
              <service.icon className="text-primary text-4xl mb-4 mx-auto transition-all ease-in-out duration-300 hover:scale-110" />
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
