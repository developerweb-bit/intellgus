import Link from "next/link";
import style from "./Footer.module.scss";
import img from "./fimg.png";
import { FiMail } from "react-icons/fi";
import { MdPhone } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { TiSocialDribbble } from "react-icons/ti";


export default function Footer() {
  const socialLinks = [
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/yourprofile",
      label: "Instagram",
    },
    {
      icon: <FaTelegramPlane />,
      url: "https://t.me/yourprofile",
      label: "Telegram",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/yourprofile",
      label: "LinkedIn",
    },
    {
      icon: <RiTwitterXFill />,
      url: "https://twitter.com/yourprofile",
      label: "Twitter",
    },
    {
      icon: <TiSocialDribbble />,
      url: "https://dribbble.com/yourprofile",
      label: "Dribbble",
    },
  ];
  <style>
    {`
    li {
      color: red !important;
      font-size: .875rem;
        line-height: 1.375rem;
        letter-spacing: 0;
    }
          
  `}
  </style>;

  return (
    <footer
      className={`${style.footerSection} relative w-full flex justify-center items-center min-h-[48vh] py-16 px-6 bg-transparent`}
    >
      <div
        className={` ${style.innerFooter} w-full max-w-[97%] mx-auto rounded-[16px]  backdrop-blur-xl shadow-2xl border border-white/10 p-8" `}
      >
        {/* Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-9">
          {/* Company */}
          <div>
            <div className="text-[#bbb] font-semibold mb-3">Company</div>
            <ul className={`${style.underlinst} flex flex-col gap-2`}>
              <li>
                <Link href="/">
                  <span className="text-white fs-[14px]    hover:text-[#FD0D07]">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/career">
                  <span className="text-white fs-[14px]    hover:text-[#FD0D07]">
                    Career
                  </span>
                </Link>
              </li>
                 <li>
                <Link href="/contact-us">
                  <span className="text-white fs-[14px]    hover:text-[#FD0D07]">
                    About 
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact-us">
                  <span className="text-white fs-[14px]    hover:text-[#FD0D07]">
                    Contact
                  </span>
                </Link>
              </li>
           
             
            </ul>
          </div>
       
          {/* Resource */}
          <div>
            <div className="text-[#bbb] font-semibold mb-3">Resource</div>
            <ul className={`${style.underlinst} flex flex-col gap-2`}>
           
         
             <li>
                <Link href="/Blog">
                  <span className="text-white fs-[14px]    hover:text-[#FD0D07]">
                    Blog
                  </span>
                </Link>
              </li>
                <li>
                <Link href="/faqs">
                  <span className="text-white fs-[14px]    hover:text-[#FD0D07]">
                    FAQ’s
                  </span>
                </Link>
              </li>
                  <li>
                <Link href="/Industries">
                  <span className="text-white fs-[14px]    hover:text-[#FD0D07]">
                    Indestries
                  </span>
                </Link>
              </li>
              
            </ul>
          </div>
             {/* product */}
          <div>
            <div className="text-[#bbb] font-semibold mb-3">Products</div>
            <ul className={`${style.underlinst} flex flex-col gap-2`}>
              <li>
                <Link href="/services/audit">
                  <span className="text-white fs-[14px] hover:text-[#FD0D07]">
                    Audit
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services/tax-resolution">
                  <span className="text-white fs-[14px] hover:text-[#FD0D07]">
                    Virtual CFO
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services/tax-resolution">
                  <span className="text-white fs-[14px] hover:text-[#FD0D07]">
                    Tax Resolution
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services/tax-planning-and-preparation">
                  <span className="text-white fs-[14px] hover:text-[#FD0D07]">
                    Payroll Management
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services/outsourced-accounting-and-bookkeeping-services">
                  <span className="text-white fs-[14px] hover:text-[#FD0D07]">
                    Bookkeeping & Accounting
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services/tax-planning-and-preparation">
                  <span className="text-white fs-[14px] hover:text-[#FD0D07]">
                    Tax Planning & Preparation
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          {/* Say Hi */}
          <div>
            <div className="text-[#bbb] font-semibold mb-3">Say Hi</div>
            <ul className={`${style.underlinst} flex flex-col gap-2`}>
              <li>
                <a
                  href="mailto:info@intellgus.com"
                  className="text-white fs-[14px] hover:text-[#FD0D07]"
                >
                  info@intellgus.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+12103389577"
                  className="text-white fs-[14px] hover:text-[#FD0D07]"
                >
                  +1 210-338-9577
                </a>
              </li>
              <li>
                <span className="text-white fs-[14px]">
                  700 Central Expressway, South Allen, Texas 75013
                </span>
              </li>
              <li>
                <span className="text-white fs-[14px]">
                  1409 Prairie Clover Road Prosper, TX 75078 United States
                </span>
              </li>
              <li>
                <span className="text-white fs-[14px]">
                  66 W Flagler Street, Suite 900, PMB 11911, Miami, FL 33130
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* Social and copyright */}
        <div
          className="flex flex-wrap gap-y-5 gap-x-5 items-center justify-between  border-t border-gray-900 pt-8 text-[#bababa] text-sm "
          style={{ marginTop: "20px", paddingTop: "20px" }}
        >
          <div className="flex gap-7">
            {/* <p>Community</p> */}
            <div className={`${style.socialIcons} flex`}>
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className={`${style.icons} text-white hover:text-white transition-colors duration-200`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div>© 2025 INTELLGUS LLC</div>
        </div>
        <h2
          style={{ fontSize: "12.5rem" }}
          className={`${style.largeText} mb-5 text-end mr-40 `}
        >
          <Link href="/">
            <span className={`${style.spantext} text-[#fff] latter-specing-0`}><span className="text-[#FD0D07]">I</span>ntellgu<span className="text-[#FD0D07]">s</span> </span>
          </Link>
        </h2>
      </div>
    </footer>
  );
}
