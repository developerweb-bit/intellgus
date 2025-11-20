// File: /pages/index.js
import Head from "next/head";
import { useState, useRef, useEffect } from "react";
import styles from "./contact.module.scss";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function index() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    service: "",
    budget: "",
  });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

  const services = ["Consulting", "Design", "Engineering", "Strategy"];
  const budgets = ["Less than $10K", "$10K - $50K", "More than $50K"];

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Valid email is required";
    if (!form.phone.trim() || !/^\+?\d{7,15}$/.test(form.phone))
      e.phone = "Valid phone number is required";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Please enter at least 10 characters";
    return e;
  };

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErrors((s) => ({ ...s, [e.target.name]: undefined }));
  };

  const handleServiceSelect = (s) => setForm((f) => ({ ...f, service: s }));
  const handleBudgetSelect = (b) => setForm((f) => ({ ...f, budget: b }));

  const handleFile = (file) => {
    if (!file) return;
    setFileName(file.name);
    // you can store file in state as FormData for upload
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    handleFile(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    handleFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length) return;

    setSending(true);
    try {
      // Example: send to your API route
      // const payload = new FormData();
      // payload.append("name", form.name);
      // payload.append("email", form.email);
      // payload.append("phone", form.phone);
      // payload.append("message", form.message);
      // payload.append("service", form.service);
      // payload.append("budget", form.budget);
      // if (fileInputRef.current?.files?.[0]) {
      //   payload.append("file", fileInputRef.current.files[0]);
      // }
      //
      // await fetch("/api/contact", { method: "POST", body: payload });

      // simulate
      await new Promise((r) => setTimeout(r, 900));
      console.log("Submitted:", { ...form, fileName });
      alert("Inquiry submitted. We'll contact you soon!");
      setForm({
        name: "",
        phone: "",
        email: "",
        message: "",
        service: "",
        budget: "",
      });
      setFileName("");
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again later.");
    } finally {
      setSending(false);
    }
  };

  // popup flow code here
  // const [hover, setHover] = useState(false);

  // const handleMove = (e) => {
  //   const box = document.getElementById("hoverBox");
  //   const spot = document.getElementById("cursorSpot");

  //   const rect = box.getBoundingClientRect();
  //   const x = e.clientX - rect.left;
  //   const y = e.clientY - rect.top;

  //   spot.style.left = `${x}px`;
  //   spot.style.top = `${y}px`;
  // };

  const canvasRef = useRef(null);

  //  useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext("2d");

  //   // full screen canvas
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;

  //   let points = [];

  //   const addPoint = (x, y) => {
  //     points.push({ x, y });
  //     if (points.length > 40) points.shift();
  //   };

  //   const drawLine = () => {
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);

  //     ctx.lineWidth = 5;
  //     ctx.strokeStyle = "#ff5f6d";
  //     ctx.lineJoin = "round"; // smooth
  //     ctx.lineCap = "round";  // smooth edges

  //     ctx.beginPath();

  //     for (let i = 0; i < points.length - 1; i++) {
  //       const p1 = points[i];
  //       const p2 = points[i + 1];

  //       // straight line (no zigzag)
  //       ctx.lineTo(p2.x, p2.y);
  //     }

  //     ctx.stroke();

  //     requestAnimationFrame(drawLine);
  //   };

  //   const handleMouseMove = (e) => {
  //     addPoint(e.clientX, e.clientY);
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);
  //   drawLine();

  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  //   useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext("2d");

  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;

  //   let points = [];
  //   let stopTimer = null; // detect when cursor stops
  //   let isMoving = false; // show/hide line

  //   const addPoint = (x, y) => {
  //     points.push({ x, y });
  //     if (points.length > 20) points.shift();
  //   };

  //   const drawLine = () => {
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);

  //     if (isMoving && points.length > 1) {
  //       ctx.lineWidth = 5;
  //       ctx.strokeStyle = "#ff5f6d";
  //       ctx.lineJoin = "round";
  //       ctx.lineCap = "round";

  //       ctx.beginPath();
  //       ctx.moveTo(points[0].x, points[0].y);

  //       for (let i = 1; i < points.length; i++) {
  //         ctx.lineTo(points[i].x, points[i].y);
  //       }

  //       ctx.stroke();
  //     }

  //     requestAnimationFrame(drawLine);
  //   };

  //   const handleMouseMove = (e) => {
  //     isMoving = true;
  //     addPoint(e.clientX, e.clientY);

  //     // Reset stop timer each time mouse moves
  //     clearTimeout(stopTimer);

  //     stopTimer = setTimeout(() => {
  //       isMoving = false;
  //       points = []; // instantly hide
  //     }, 100); // 200ms = stop detection
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);
  //   drawLine();

  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);
  const boxRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const box = boxRef.current;
    const ctx = canvas.getContext("2d");

    // set canvas size equal to the div size
    const resizeCanvas = () => {
      canvas.width = box.offsetWidth;
      canvas.height = box.offsetHeight;
    };
    resizeCanvas();

    let points = [];
    let stopTimer = null;
    let isMoving = false;

    const addPoint = (x, y) => {
      points.push({ x, y });
      if (points.length > 40) points.shift();
    };

    const drawLine = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isMoving && points.length > 1) {
        ctx.lineWidth = 4;
        ctx.strokeStyle = "#ff5f6d";
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i].x, points[i].y);
        }

        ctx.stroke();
      }

      requestAnimationFrame(drawLine);
    };

    const handleMouseMove = (e) => {
      const rect = box.getBoundingClientRect();

      // check if cursor not inside div
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        points = [];
        isMoving = false;
        return;
      }

      isMoving = true;

      // Convert global cursor → local div coordinates
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      addPoint(x, y);

      clearTimeout(stopTimer);
      stopTimer = setTimeout(() => {
        points = [];
        isMoving = false;
      }, 200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resizeCanvas);

    drawLine();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Head>
        <title>Contact — Your Agency</title>
        <meta name="description" content="Tell us about your project" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex items-center justify-center py-12 px-6">
        <div className="w-full max-w-6xl">
          {/* Container card */}
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Panel */}
              <div className="p-10 md:pl-14 md:pr-8 lg:pl-20 lg:pr-12 overflow-hidden ">
                <div
                  ref={boxRef}
                  className="rounded-xl border relative overflow-hidden h-full p-6 pb-10 bg-gradient-to-br from-blue-50 via-white to-blue-50 flex flex-col justify-between items-start"
                  aria-hidden="false"
                >
                  <canvas
                    ref={canvasRef}
                    className="fixed top-0 left-0 pointer-events-none z-[9999]"
                  />
                  <div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                      Tell us about your <br /> project
                    </h2>

                    <ul className="mt-6  space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-700">
                          ✓
                        </span>
                        <span>We will respond to you within 12 hours</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-700">
                          ✓
                        </span>
                        <span>We'll sign an NDA if requested</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-700">
                          ✓
                        </span>
                        <span>Access to dedicated consultant specialists</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 text-gray-700">
                    <a
                      className="block font-medium text-gray-900 mb-1"
                      href="mailto:hello@asiaagency.com"
                    >
                      hello@asiaagency.com
                    </a>
                    <p className="text-sm">
                      Always busy and want to book an exact time to call?
                    </p>
                    <button
                      type="button"
                      className="mt-4 inline-block bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-gray-50"
                    >
                      Book a free call
                    </button>
                  </div>
                </div>
                {/* second code  */}
                {/* <div
                  className="relative rounded-xl h-full p-6 pb-10 bg-gradient-to-br from-blue-50 via-white to-blue-50 flex flex-col justify-between items-start overflow-hidden group"
                  aria-hidden="false"
                  onMouseMove={(e) => handleMove(e)}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  id="hoverBox"
                >
                  
                  <div
                    className="pointer-events-none absolute w-60 h-60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    id="cursorSpot"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(56,189,248,0.35) 0%, rgba(56,189,248,0) 70%)",
                       
                      transform: "translate(-50%, -50%)",
                    }}
                  ></div>

                  <div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                      Tell us about your <br /> project
                    </h2>

                    <ul className="mt-6 space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-700">
                          ✓
                        </span>
                        <span>We will respond to you within 12 hours</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-700">
                          ✓
                        </span>
                        <span>We'll sign an NDA if requested</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-700">
                          ✓
                        </span>
                        <span>Access to dedicated consultant specialists</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 text-gray-700">
                    <a
                      className="block font-medium text-gray-900 mb-1"
                      href="mailto:hello@asiaagency.com"
                    >
                      hello@asiaagency.com
                    </a>
                    <p className="text-sm">
                      Always busy and want to book an exact time to call?
                    </p>
                    <button
                      type="button"
                      className="mt-4 inline-block bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-gray-50"
                    >
                      Book a free call
                    </button>
                  </div>
                </div> */}
              </div>

              {/* Right Panel (Form) */}
              <div className="p-8 md:p-10 lg:p-12 bg-white">
                <form
                  className="max-w-xl mx-auto"
                  onSubmit={handleSubmit}
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                >
                  {/* Service & Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {services.map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => handleServiceSelect(s)}
                            className={`text-sm px-3 py-1 rounded-full border ${
                              form.service === s
                                ? "bg-gray-900 text-white border-gray-900"
                                : "bg-white text-gray-700 border-gray-300"
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {budgets.map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => handleBudgetSelect(b)}
                            className={`text-sm px-3 py-1 rounded-full border ${
                              form.budget === b
                                ? "bg-gray-900 text-white border-gray-900"
                                : "bg-white text-gray-700 border-gray-300"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Inputs */}
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Full name *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={`mt-2 w-full border-b focus:outline-none py-2 placeholder-gray-400 ${
                          errors.name ? "border-red-400" : "border-gray-300"
                        }`}
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-xs text-red-600 mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Email *
                      </label>
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={`mt-2 w-full border-b focus:outline-none py-2 placeholder-gray-400 ${
                          errors.email ? "border-red-400" : "border-gray-300"
                        }`}
                        placeholder="you@example.com"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700">
                      Phone number *
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className={`mt-2 w-full border-b focus:outline-none py-2 placeholder-gray-400 ${
                        errors.phone ? "border-red-400" : "border-gray-300"
                      }`}
                      placeholder="+91 86020 00209"
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-600 mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700">
                      Project details *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows="5"
                      className={`mt-2 w-full border rounded-lg p-3 placeholder-gray-400 focus:ring-2 focus:ring-green-100 ${
                        errors.message ? "border-red-400" : "border-gray-200"
                      }`}
                      placeholder="Tell us about the project, goals and timeline..."
                    />
                    {errors.message && (
                      <p className="text-xs text-red-600 mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* File upload */}
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Attach a file (optional)
                    </label>

                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="relative border-dashed border-2 border-gray-200 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition"
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <div className="text-sm text-gray-600">
                        Choose a file or drag and drop here
                      </div>
                      {fileName && (
                        <div className="mt-2 text-sm text-gray-800">
                          Selected: {fileName}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="mt-8">
                    <button
                      type="submit"
                      disabled={sending}
                      className={`w-full py-3 rounded-full font-semibold transition ${
                        sending
                          ? "bg-gray-400 text-white"
                          : "bg-gray-900 text-white hover:bg-black"
                      }`}
                    >
                      {sending ? "Submitting..." : "Submit inquiry"}
                    </button>
                  </div>

                  <p className="mt-4 text-xs text-gray-500">
                    By submitting you agree to our terms and privacy policy.
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Partners / logos placeholder */}
          <div className="mt-8 flex items-center justify-center">
            <div className="max-w-4xl w-full text-center text-gray-400 text-sm">
              {/* Replace with actual logos or a carousel */}
              Trusted by teams at top companies — logos go here.
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        /* subtle entrance animation for the main card */
        .card-anim {
          animation: fadeUp 480ms ease;
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
