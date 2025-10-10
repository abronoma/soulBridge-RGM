import React from "react";
import Navbar from "../components/navbar";
import { ArrowRight, Heart,  ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const departments = [
  {
    name: "Administration",
    description:
      "Responsible for managing records, coordinating finances, and overseeing projects to ensure order, accountability, and effective operations.",
  },
  {
    name: "Education & Training",
    description:
      "Dedicated to equipping members with resources, and biblical training that build strong foundations in faith through teaching, discipleship, and fellowship resulting in staying rooted in God's Word, and walking in our divine destinies.",
  },
  {
    name: "Protocol",
    description:
      "Ensures order, excellence, and hospitality in all services and events, serving with love, honor, and diligence to create a welcoming and organized atmosphere for God's people and His servants.",
  },
  {
    name: "Children & Teens",
    description:
      "Dedicated to raising godly children and youth by nurturing their faith, character, and talents through biblical teaching, mentorship, and practical life applications.",
  },
  {
    name: "Evangelism & Outreach",
    description:
      "Committed to winning souls and nurturing them through strategic outreach, creative content, school and community engagements, and spirit-led discipleship both physically and digitally.",
  },
  {
    name: "Music and Arts",
    description:
      "Leads the church in true worship through music, drama, and creative arts, using their gifts to inspire, edify, and draw souls to Christ.",
  },
  {
    name: "Media",
    description:
      "Creatively captures, produces, and shares church content through photography, videography, design, sound, and social media, using excellence in media to spread the gospel and engage the community.",
  },
  {
    name: "Prayer",
    description:
      "Dedicated to building a strong spiritual foundation through supplication, intercession, for the church, members, and community while nurturing a deeper relationship with God.",
  },
];

const activities = [
  { activity: "Family Celebration Services", day: "Sundays", time: "8:00am" },
  {
    activity: "Education, Training and Development",
    day: "Foundation School, School of Discipleship, Family Life College",
    time: "",
  },
  { activity: "All Night Services", day: "Fridays", time: "10:00pm" },
  {
    activity: "Koinonia/Bonding Activities",
    day: "Fridays or Saturdays",
    time: "",
    description:
      "The last week of months having five weeks.\nA time to bond, refresh and socialize.",
  },
];

export default function About() {
  const cardColors = [
    "bg-white/5 border-purple-400/40 hover:bg-white/10",
    "bg-white/5 border-fuchsia-400/40 hover:bg-white/10",
    "bg-white/5 border-violet-400/40 hover:bg-white/10",
  ];

  const [openDept, setOpenDept] = React.useState(null);

const toggleDept = (idx) => {
  setOpenDept(openDept === idx ? null : idx);
};

  return (
    <div className="relative min-h-screen flex flex-col text-white overflow-hidden bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#4a2c6d]">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.2),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.15),transparent_60%)] animate-pulse -z-10"></div>

      <Navbar />

      <main className="flex-grow relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        {/* Vision & Mission */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 lg:mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Vision */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-purple-300/40 shadow-2xl hover:shadow-purple-500/30 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-3 h-8 bg-gradient-to-b from-purple-400 to-fuchsia-500 rounded-full mr-3"></div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-gray-200 text-base lg:text-lg leading-relaxed">
                Empowering believers to manifest their divine destinies in their
                generation.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-fuchsia-300/40 shadow-2xl hover:shadow-fuchsia-500/30 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-3 h-8 bg-gradient-to-b from-fuchsia-400 to-purple-500 rounded-full mr-3"></div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-gray-200 text-base lg:text-lg leading-relaxed">
                To actively equip and nurture believers, grounding them in biblical truth and the power of the Holy Spirit. Through transformative discipleship, authentic community, and purposeful service, we ignite their God-given potential, empowering them to discover, pursue, and fully manifest their unique divine destinies.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Departments */}
<section className="mb-20 lg:mb-24">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="text-center mb-12"
  >
    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Our Departments</h2>
    <p className="text-gray-300 max-w-2xl mx-auto">
      Vibrant teams working together to serve the Lord.
    </p>
  </motion.div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {departments.map((dept, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1, duration: 0.6 }}
      className={`rounded-2xl p-6 backdrop-blur-xl shadow-lg border hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer ${
        cardColors[idx % cardColors.length]
      }`}
    >
      <div className="flex items-center justify-between mb-2" onClick={() => toggleDept(idx)}>
        <div className="flex items-center">
          <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-3">
            <span className="text-white font-bold text-sm">{idx + 1}</span>
          </div>
          <h3 className="text-xl font-semibold text-white">{dept.name}</h3>
        </div>

        {/* Chevron rotates when open */}
        <ChevronDown
          className={`w-5 h-5 text-fuchsia-300 transition-transform duration-300 ${
            openDept === idx ? "rotate-90" : "rotate-0"
          }`}
        />
      </div>

      {/* Only show description when toggled */}
      {openDept === idx && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-100 text-sm leading-relaxed mt-2"
        >
          {dept.description}
        </motion.p>
      )}
    </motion.div>
  ))}
</div>

</section>

        {/* Activities */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Our Activities
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Join us for spiritual growth and fellowship.
            </p>
          </motion.div>

          <div className="space-y-8 lg:space-y-12">
            {activities.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className={`relative flex flex-col lg:flex-row items-center ${
                  idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`w-full lg:w-5/12 ${
                    idx % 2 === 0 ? "lg:pr-8" : "lg:pl-8"
                  }`}
                >
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 hover:scale-[1.02] hover:bg-white/10 transition-all duration-300">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-lg text-white">
                          {item.activity}
                        </span>
                        <span className="text-purple-200 italic text-sm">
                          {item.time}
                        </span>
                      </div>

                      <ul className="list-disc list-inside space-y-1 mt-2">
                        {item.day.split(",").map((dayItem, index) => (
                          <li key={index} className="text-gray-200 text-base">
                            {dayItem.trim()}
                          </li>
                        ))}

                        {item.description && (
                          <p className="text-sm text-gray-300 whitespace-pre-line ml-4">
                            {item.description}
                          </p>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Connect With Us */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex justify-center mt-12"
        >
          <button
            onClick={() => (window.location.href = "/contact")}
            className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-purple-700 hover:shadow-purple-500/50 transition-all duration-300 text-sm sm:text-base flex items-center gap-2"
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            CONNECT WITH US
          </button>
        </motion.div>
      </main>

      <footer className="w-full py-12 relative border-t border-white/10 bg-[#0A0A12]/90 flex flex-col items-center z-10">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center">
 <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center">
  {/* Logo + Text */}
  <div className="flex items-center space-x-2 sm:space-x-3">
    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r from-[#eaeaeb] to-[#f7f7f8] flex items-center justify-center">
      <img
        src="/logo.jpg"
        alt="Rhohi Logo"
        className="w-5 h-5 sm:w-6 sm:h-6"
      />
    </div>
    <span className="text-lg sm:text-xl font-bold text-white">
      Rohi Global Ministries
    </span>
  </div>

  {/* Social Links below */}
  <div className="flex space-x-4 sm:space-x-6 mt-4">
    {/* Phone */}
    <a
      href="tel:0592037949"
      className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-purple-600 flex items-center justify-center hover:bg-[#2a0033] transition-all duration-300"
    >
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    </a>

    {/* YouTube */}
    <a
      href="https://www.youtube.com/channel/UCoJOa8wanvR_ADRPCYi2NaQ"
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-purple-600 flex items-center justify-center hover:bg-[#2a0033] transition-all duration-300"
    >
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    </a>

    {/* WhatsApp */}
    <a
      href="https://wa.me/233206828759"
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-purple-600 flex items-center justify-center hover:bg-[#2a0033] transition-all duration-300"
    >
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
      </svg>
    </a>
  </div>

  {/* Footer text */}
  <div className="pt-8 border-t border-white/10 text-center w-full mt-6">
    <p className="text-[#9999B5] text-sm sm:text-base">
      &copy; {new Date().getFullYear()} Rohi Global Ministries. All rights reserved.
    </p>
  </div>
</div>
</div>

        </footer>
    </div>
  );
}