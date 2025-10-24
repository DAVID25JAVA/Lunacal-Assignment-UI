"use client";
import { useState } from "react";

export default function AboutTabs() {
  const [tab, setTab] = useState("about");

  const TABS = [
    { key: "about", label: "About me" },
    { key: "exp", label: "Experiences" },
    { key: "rec", label: "Recommended" },
  ];

  return (
    <div className="w-full">
       
      <div className="flex flex-col md:flex-row gap-3 mb-6 bg-black p-2 rounded-xl w-fit">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`text-sm outline-none font-semibold transition-all duration-300 ease-in-out ${
              tab === t.key
                ? "bg-gray-800 text-gray-200 py-2 px-5 rounded-xl cursor-pointer shadow-lg shadow-gray-950/50"
                : "text-gray-500 py-2 px-5 hover:text-gray-300"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

       
      <div className="relative h-80 overflow-hidden">
        {/* About Me */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            tab === "about"
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          <div className="h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800/50 space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Hi — I'm <span className="font-semibold text-white">David Pal (MCA)</span>.
              I’m a Frontend Developer skilled in React.js and Next.js, focused on
              building clean, responsive UIs with pixel-perfect detail.
            </p>
            <p className="text-gray-400 text-sm">
              <span className="font-semibold text-lg text-white">Skills</span>: React.js, Next.js, Tailwind CSS, JavaScript, Node.js, MongoDB, Express
            </p>
            <p className="text-gray-400 text-sm">
              <span className="font-semibold text-lg text-white">DevOps/Tools</span>: Git & GitHub, BitBucket, Vercel, Postman
            </p>
          </div>
        </div>

        {/* Experiences */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            tab === "exp"
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <div className="h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800/50 space-y-6">
            <div>
              <h3 className="text-gray-200 font-semibold">
                MERN Stack Developer Intern — 2Digit Innovations
              </h3>
              <p className="text-gray-500 text-sm mt-1">Nov 2024 — May 2024</p>
              <p className="text-gray-400 text-sm mt-2">
                Worked on React apps, reusable components, and performance improvements.
              </p>
            </div>

            <div>
              <h3 className="text-gray-200 font-semibold">
                MERN Stack Training and Internship — Precursor Info Solution Pvt.
              </h3>
              <p className="text-gray-500 text-sm mt-1">Jul 2023 — Dec 2023</p>
              <p className="text-gray-400 text-sm mt-2">
                Built CRUD apps, REST APIs, authentication systems, and file uploads.
              </p>
            </div>
          </div>
        </div>

        {/* Recommended */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            tab === "rec"
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <div className="h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800/50 space-y-4">
            <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <h4 className="text-gray-200 font-semibold">Amit Kumar</h4>
                  <p className="text-gray-500 text-xs mb-2">Senior Manager</p>
                  <p className="text-gray-400 text-sm italic">
                    "David delivered high-quality UI components on time."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div>
                  <h4 className="text-gray-200 font-semibold">Riya Sharma</h4>
                  <p className="text-gray-500 text-xs mb-2">Product Lead</p>
                  <p className="text-gray-400 text-sm italic">
                    "Great attention to detail and a strong understanding of React."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
