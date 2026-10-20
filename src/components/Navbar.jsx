import logo from "../assets/favicon.png";
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { motion } from "framer-motion"
import { useState } from "react"

const tabs = ["About", "Experiences", "Contact"];

const OutlineOnButton = ({ children, color, ...rest }) => {
    const colorMap = {
        linkedin: "hover:text-[#0b66c2] bg-[#0b66c2]",
        github: "hover:text-[#f0f6fc] bg-[#f0f6fc]",
        instagram: "hover:text-[#fc03d7] bg-[#fc03d7]",
        facebook: "hover:text-[#0766ff] bg-[#0766ff]"
    };
    const selectedColor = colorMap[color]
    return (
        <button
            {...rest}
            className={`group relative px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] ${selectedColor.split(" ")[0]}`}
        >
            <span>{children}</span>
            <span className={`absolute left-0 top-0 h-[2px] w-0 ${selectedColor.split(" ")[1]} transition-all duration-100 group-hover:w-full`} />
            <span className={`absolute right-0 top-0 h-0 w-[2px] ${selectedColor.split(" ")[1]} transition-all delay-100 duration-100 group-hover:h-full`} />
            <span className={`absolute bottom-0 right-0 h-[2px] w-0 ${selectedColor.split(" ")[1]} transition-all delay-200 duration-100 group-hover:w-full`} />
            <span className={`absolute bottom-0 left-0 h-0 w-[2px] ${selectedColor.split(" ")[1]} transition-all delay-300 duration-100 group-hover:h-full`} />
        </button>
    );
};

const ChipTabs = () => {
    const [selected, setSelected] = useState(tabs[0]);
  
    return (
      <div className="px-4 py-14 flex items-center flex-wrap gap-2">
        {tabs.map((tab) => (
          <Chip
            text={tab}
            selected={selected === tab}
            setSelected={setSelected}
            key={tab}
          />
        ))}
      </div>
    );
  };
  
  const Chip = ({
    text,
    selected,
    setSelected,
  }) => {
    return (
      <button
        onClick={() => {
            setSelected(text)
            if (text === "About") {
                document.getElementById("about")?.scrollIntoView({
                    behavior: "smooth",
                });
            } else if (text === "Experiences") {
                document.getElementById("experience")?.scrollIntoView({
                    behavior: "smooth",
                });
            } else if (text === "Contact") {
                document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                });
            }
        }}
        style={{ fontFamily: '"Inter", sans-serif' }}
        className={`${selected ? "text-white" : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"} text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
      >
        <span 
        className="relative z-10">{text}</span>
        {selected && (
          <motion.span
            layoutId="pill-tab"
            transition={{ type: "spring", duration: 0.5 }}
            className="absolute inset-0 z-0 bg-gradient-to-r from-gray-500 to-stone-400 rounded-md"
          ></motion.span>
        )}
      </button>
    );
  };

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex items-center gap-[100px] pl-[40px]">
                <img className="w-12" src={logo} alt="logo" />
                <ChipTabs />
            </div>
            <div className="m-8 flex items-center justify-end gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/joshuamathewww/">
                    <OutlineOnButton color="linkedin">
                        <FaLinkedin />
                    </OutlineOnButton>
                </a>
                <a href="https://github.com/JoshuaMathewww">
                    <OutlineOnButton color="github">
                        <FaGithub />
                    </OutlineOnButton>
                </a>
                <a href="https://www.instagram.com/joshuamathewww/">
                    <OutlineOnButton color="instagram">
                        <FaInstagram />
                    </OutlineOnButton>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100075200019841">
                    <OutlineOnButton color="facebook">
                        <FaFacebook />
                    </OutlineOnButton>
                </a>
            </div>
        </nav>
    );
};



export default Navbar