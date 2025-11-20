"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { useState } from "react";

import { IoIosArrowDropdown } from "react-icons/io";
import { SiPivotaltracker } from "react-icons/si";

const categories = [
  {
    label: "About JC Trader",
    articleCount: 22,
    icon: <SiPivotaltracker size={23} />,
  },
  {
    label: "Trading Rules & Guidelines",
    articleCount: 22,
    icon: <SiPivotaltracker  size={23} />,
  },
  {
    label: "JC Trader Challenge Insight",
    articleCount: 22,
    icon: <SiPivotaltracker size={23} />,
  },
  { label: "JC Trader Features", articleCount: 22, icon: <SiPivotaltracker  size={23}/> },
];

const faqs = [
  {
    question: "What assets can I trade on JCTRAIDER?",
    answer:
      "Opening an account is simple and takes just a few minutes. Click 'Sign Up', complete the registration form, verify your identity through KYC compliance, and fund your account using one of our secure payment methods. Once verified, you can start trading immediately.",
  },
  {
    question: "What is JCTRAIDER?",
    answer:
      "JCTRAIDER is a trading platform that provides access to a variety of assets, advanced insights, and secure transactions for traders of all levels.",
  },
  // Add more FAQ objects as needed
];

export default function index() {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <section
        className="min-h-screen globb text-gray-900 px-6 py-12 flex flex-col justify-center items-center"
        style={{ background: "r" }}
      >
        {/* FAQ Headline */}
        <div className="text-center my-4">
          <span className="glaccybg py-1 px-4 rounded-full font-semibold mb-3 inline-block shadow border border-white/30">
            FAQ
          </span>

          <h1 className="text-5xl font-extrabold mb-3">
            Frequently Asked Questions
          </h1>
          <p className="mb-4 text-[14px] text-gray-600">
            Find answers to the most common questions about JCTrader's
            platforms, accounts, <br /> deposits, trading conditions, and more.
          </p>
          <button className="bg-gray-900 text-white font-bold px-6 py-2 rounded-full shadow-lg hover:bg-gray-800 transition">
            Join Our Community
          </button>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl w-full mx-auto mt-10 mb-7">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for your queries"
            className="w-full px-5 py-3 rounded-full glaccybg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-900"
          />
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12 w-full max-w-3xl">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="flex items-center justify-start gap-2 bg-white border border-gray-200 rounded-full p-2 shadow-sm hover:shadow-lg transition"
            >
              <span className="glaccybg p-2 bg-gray-900  rounded-full  font-bold ">
                {cat.icon}
              </span>

              <span className="font-semibold text-[12px] opacity-75 text-gray-500">
                {cat.label} <br />
                {cat.articleCount}
              </span>
            </div>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl w-full mx-auto">
          {filteredFaqs.length === 0 && (
            <p className="text-center text-gray-500">No FAQs found.</p>
          )}
          {filteredFaqs.map((faq, i) => (
            <div key={faq.question} className="mb-5">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full glaccybg border border-gray-300 shadow-sm text-left px-5 py-4 font-semibold flex justify-between items-center rounded-xl focus:outline-none"
              >
                {faq.question}
                <span
                  className={`ml-2 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  <IoIosArrowDropdown />
                </span>
              </button>
              {openIndex === i && (
                <div className="bg mt-2 border-x border-b border-gray-300 rounded-xl px-5 p-4 text-sm text-gray-700 shadow">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
