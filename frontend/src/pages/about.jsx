// File: src/pages/About.jsx
import React from "react";
import Navbar from "../components/navbar";

const departments = [
  { name: "Media", description: "Handles all media content, social media, and promotional activities." },
  { name: "Education & Training", description: "Provides indepth biblical teachings of our faith." },
  { name: "Outreach & Missions", description: "Reaches out to the communities with the Gospel of Christ." },
  { name: "Children's Department", description: "Prepares the children with the God ordained way raising them to manifest their God-ordained Destinies" },
  { name: "Protocol", description: "Manages all activities that speaks to orderliness in  church." },
  { name: "Prayer", description: " coordinates prayer activities across the church." },
];

const activities = [
  { day: "Sunday", activity: "Family Life Celebration", time: "8:00am" },
  { day: "Sunday", activity: "Foundation School", time: "8:00am" },
  { day: "Friday", activity: "All Night Services", time: "10:00pm" },
  { day: "Saturday", activity: "Bonding", time: "Time communicated before the set day" },
];

export default function About() {
  return (
    <div className="bg-[#000] text-white min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">

        {/* Section 1: Mission & Vision */}
        <section className="mb-20 lg:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-gradient-to-br from-purple-700 via-purple-900 to-purple-700 rounded-2xl p-6 lg:p-8 shadow-xl hover:scale-[1.02] transition-transform duration-300 h-full">
              <div className="flex items-center mb-4">
                <div className="w-3 h-8 bg-purple-400 rounded-full mr-3"></div>
                <h2 className="text-2xl lg:text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-gray-200 text-base lg:text-lg leading-relaxed">
                Empowering Believers to Manifest their divine destinies in their Generation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900 via-purple-700 to-purple-900 rounded-2xl p-6 lg:p-8 shadow-xl hover:scale-[1.02] transition-transform duration-300 h-full">
              <div className="flex items-center mb-4">
                <div className="w-3 h-8 bg-purple-400 rounded-full mr-3"></div>
                <h2 className="text-2xl lg:text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-gray-200 text-base lg:text-lg leading-relaxed">
                To actively equip and nurture believers,through transformative dicipleship, authentic community and purposeful service we ignite their God given potentials empowering them to fund-fuel and fully fulfil their unique and divine destinies for impactful living within their generation.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Departments */}
        <section className="mb-20 lg:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-purple-500 mb-4">Our Departments</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Vibrant dedicated teams working together serving the Lord</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, idx) => (
              <div
                key={idx}
                className="bg-[#2c253a] rounded-2xl p-6 shadow-xl border border-purple-900/50 hover:border-purple-500/30 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-900/50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-purple-700/50 transition-colors duration-300">
                    <span className="text-purple-300 font-bold text-sm">{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-purple-400">{dept.name}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{dept.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Activities Timeline */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-purple-500 mb-4">Our Activities</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Join us throughout the week for spiritual growth and fellowship</p>
          </div>

          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-purple-700 h-full hidden lg:block"></div>

            <div className="space-y-8 lg:space-y-12">
              {activities.map((item, idx) => (
                <div
                  key={idx}
                  className={`relative flex flex-col lg:flex-row items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-[#1e1b29] z-10 hidden lg:block"></div>

                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${idx % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="bg-[#2c253a] rounded-2xl p-6 shadow-xl border border-purple-900/50 hover:scale-[1.02] transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-purple-400 font-bold text-lg">{item.day}</span>
                        <span className="text-gray-400 italic text-sm">{item.time}</span>
                      </div>
                      <p className="text-gray-300 text-base">{item.activity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>
      </div>
    </div>
  );
}
