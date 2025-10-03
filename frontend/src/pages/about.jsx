// File: src/pages/About.jsx
import React from "react";
import Navbar from "../components/navbar";
import {  Heart } from "lucide-react";
const departments = [
  {
    name: "Administration",
    description:
      "Forms the backbone of the ministry and responsible for managing records, coordinating finances, and overseeing projects to ensure order, accountability, and effective operations.",
  },
  {
    name: "Education & Training",
    description:
      "Dedicated to equipping members with resources,and biblical training that build strong foundations in faith through teaching, discipleship, and fellowship resulting in staying rooted in God's Word, and walking in our divine destinies.",
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
    activity: "Education Trainning and Development",
    day: "Foundation School, School of Discipleship, Family Life Colledge",
    time: "...",
  },
  { activity: "All Night Services", day: "Fridays", time: "10:00pm" },
  {
    activity: "Koinonia/Bonding Activities",
    day: "Friday/Saturday",
    time: "",
    description:
      "Every last Friday or Saturday in months with 5 weeks — a time to wind down, socialize, and bond.",
  },
];

export default function About() {
  const cardColors = [
    "bg-purple-600/30 border-purple-400/30",
    "bg-fuchsia-600/30 border-fuchsia-400/30",
    "bg-violet-600/30 border-violet-400/30",
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Gradient Background with Animated Bubbles */}
      <div className="fixed inset-0 bg-[#000]" />

      {/* Animated Color Bubbles */}
      <div className="fixed inset-0 -z-10 opacity-40">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse blur-3xl"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor:
                i % 5 === 0
                  ? "#8B5CF6" // violet
                  : i % 5 === 1
                  ? "#D946EF" // fuchsia
                  : i % 5 === 2
                  ? "#F59E0B" // amber
                  : i % 5 === 3
                  ? "#60A5FA" // blue
                  : "#EC4899", // pink
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>

      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24 relative">
        {/* Section 1: Mission & Vision */}
        <section className="mb-20 lg:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 lg:p-8 shadow-2xl hover:scale-[1.02] transition-transform duration-300 h-full border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-3 h-8 bg-gradient-to-b from-fuchsia-400 to-purple-400 rounded-full mr-3"></div>
                <h2 className="text-2xl lg:text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-gray-100 text-base lg:text-lg leading-relaxed">
                Empowering Believers to Manifest their divine destinies in their
                Generation.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 lg:p-8 shadow-2xl hover:scale-[1.02] transition-transform duration-300 h-full border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-3 h-8 bg-gradient-to-b from-violet-400 to-fuchsia-400 rounded-full mr-3"></div>
                <h2 className="text-2xl lg:text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-gray-100 text-base lg:text-lg leading-relaxed">
                To actively equip and nurture believers, through transformative
                discipleship, authentic community and purposeful service we
                ignite their God given potentials empowering them to fund-fuel
                and fully fulfil their unique and divine destinies for impactful
                living within their generation.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Departments */}
        <section className="mb-20 lg:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Departments
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Vibrant dedicated teams working together serving the Lord
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, idx) => (
              <div
                key={idx}
                className={`backdrop-blur-lg rounded-2xl p-6 shadow-xl border hover:-translate-y-1 transition-all duration-300 group ${
                  cardColors[idx % cardColors.length]
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-white/30 transition-colors duration-300">
                    <span className="text-white font-bold text-sm">
                      {idx + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold">{dept.name}</h3>
                </div>
                <p className="text-gray-100 text-sm leading-relaxed">
                  {dept.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Activities Timeline */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Activities
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Join us throughout the week for spiritual growth and fellowship
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-fuchsia-400 via-purple-400 to-violet-400 h-full hidden lg:block opacity-50"></div>

            <div className="space-y-8 lg:space-y-12">
              {activities.map((item, idx) => (
                <div
                  key={idx}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-fuchsia-400 border-4 border-purple-900/50 z-10 hidden lg:block shadow-lg shadow-fuchsia-400/50"></div>

                  <div
  className={`w-full lg:w-5/12 ${
    idx % 2 === 0 ? "lg:pr-8" : "lg:pl-8"
  }`}
>
  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-[1.02] transition-all duration-300 group h-full min-h-[200px] flex flex-col justify-between">
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold text-lg text-fuchsia-300">
          {item.activity}
        </span>
        <span className="text-gray-200 italic text-sm">
          {item.time}
        </span>
      </div>

      {/* Bullet points for day + description */}
      <ul className="list-disc list-inside space-y-1 mt-2">
        <li className="text-gray-100 text-base">{item.day}</li>
        {item.description && (
          <li className="text-sm">{item.description}</li>
        )}
      </ul>
    </div>
  </div>
</div>

 </div>
              ))}
            </div>
          </div>
        </section>
        <footer
  id="contact"
  className="w-full py-12 relative border-t border-white/10 bg-[#0A0A12] flex flex-col items-center"
>
  <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center">
    {/* Top Row: Heart + SoulBridge + Social Icons on same line */}
    <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-6">
      <div className="flex items-center space-x-2 sm:space-x-3">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r from-[#D946EF] to-[#9333EA] flex items-center justify-center">
          <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
        </div>
        <span className="text-lg sm:text-xl font-bold text-white">
          SoulBridge
        </span>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-4 sm:space-x-6">
        <a
          href="tel:+1234567890"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
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
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </a>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
      </div>
    </div>

    {/* Connect With Us */}
    <p className="text-[#9999B5] mt-6 text-sm sm:text-base">Connect With Us</p>

    {/* Divider + Copyright */}
    <div className="pt-8 border-t border-white/10 text-center w-full">
      <p className="text-[#9999B5] text-sm sm:text-base">
        &copy; {new Date().getFullYear()} SoulSync Tracker. All rights reserved.
      </p>
    </div>
  </div>
</footer>


      </div>
    </div>
  );
}
