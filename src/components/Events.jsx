import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaHackerNewsSquare,
  FaHackerrank,
  FaLaptopCode,
  FaSchool,
  FaServer,
} from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

const timelineElements = [
  {
    title: "Workshops",
    location: "",
    description: "Sessions on programming languages and technologies to enhance your skills.",
    date: "November 20, 2024",
    icon: <FaLaptopCode />,
  },
  {
    title: "Industry Expert Talks",
    location: "",
    description: "Sessions with tech professionals sharing their experiences.",
    date: "December 25,2024",
    icon: <FaGraduationCap />,
  },
  {
    title: "Mirabilia",
    location: "",
    description: "The most monumental event we've ever hosted — an unforgettable spectacle of grandeur and mystery.",
    date: "January 2025",
    icon: <FaHackerrank />,
  },
  {
    title: "Mentoring Session",
    location: "",
    description: "Placement faculties shairng their insights to the students.",
    date: "January 2025",
    icon: <FaSchool />,
  },
];

const Events = () => {
  return (
    <section id="events" className="py-20 bg-transparent backdrop-blur-0">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Upcoming Events
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Get ready to witness something big!
          </p>
        </motion.div>

        <VerticalTimeline>
          {timelineElements.map((element, index) => (
            <VerticalTimelineElement
              key={index}
              date={element.date}
              dateClassName="text-gray-400"
              iconStyle={{
                background: 'linear-gradient(135deg, #0F172A, #0EA5E9)',
                color: '#fff',
                boxShadow: '0 4px 10px rgba(15, 25, 42, 0.6)',
              }}
              icon={element.icon}
              contentStyle={{
                background: 'rgba(15, 25, 42, 0.8)',
                color: '#fff',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.6)',
                border: '1px solid rgba(14, 165, 233, 0.5)',
                borderRadius: '15px',
                textAlign: 'left',
                padding: '2rem',
              }}
              contentArrowStyle={{
                borderRight: '7px solid rgba(14, 165, 233, 0.8)',
              }}
            >
              <h3 className="text-white text-xl font-bold">{element.title}</h3>
              <h4 className="text-blue-400">{element.location}</h4>
              <p className="text-gray-300 mt-2">{element.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Events;
