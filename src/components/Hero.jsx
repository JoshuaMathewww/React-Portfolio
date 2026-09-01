import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/joshuaMathewProfile.jpeg"
import { motion, useAnimation, useInView, useMotionTemplate, useMotionValue, useSpring} from "framer-motion";
import { useEffect, useRef } from "react";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltImg = ({ source, altText}) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

//   return (
//     <motion.div
//       ref={ref}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         transformStyle: "preserve-3d",
//         transform,
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: "15px"
//       }}    
//       className="relative h-[620px] w-[525px] rounded-xl bg-gradient-to-br from-[#4A4E69] via-[#22223B] to-[#1D1D35]"
//     >
//       <img
//         src={source}
//         alt={altText}
//         className="rounded-xl"
//         style={{
//           width: "100%",  
//           height: "100%",  
//           objectFit: "cover",  
//           borderRadius: "inherit",  
//           transform: "translateZ(75px)",
//           transformStyle: "preserve-3d",
//         }}
//       />
//     </motion.div>
//   );
    return (
        <div
        className="relative h-[620px] w-[525px] rounded-xl bg-gradient-to-br from-[#4A4E69] via-[#22223B] to-[#1D1D35]"
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "15px",
        }}
        >
        <img
            src={source}
            alt={altText}
            className="rounded-xl"
            style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "inherit",
            }}
        />
        </div>
    );
};

export function AniHighlight({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const slideControls = useAnimation();
    

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView]);

    return (
        <div ref={ref} style={{ position: "relative", width: "fit-content", height: "fit-content"}}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y: 100 },
                    visible: {opacity: 1, y: 0 },
              }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}> 
            {children}
            <motion.div
                variants={{
                    hidden: { right: 0 },
                    visible: { right: "100%" },
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.5, ease: "easeIn" }}
                style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "linear-gradient(to right, #252a33, #1d2128, #181b20)",
                    zIndex: 20,
                }}
            />
            </motion.div>
        </div>
    );
}

const Hero = () => {
    return (
        <div className="pb-4 lg:mb-35">
            <div className="flex flex-wrap pt-[100px] pb-[200px]">
                <div className="w-full lg:w-1/2 pl-20">
                    <div className="flex flex-col items-center lg:items-start">
                        <AniHighlight>
                            <h1 className="pb-16 text-6xl font tracking-tight lg:mt-16 lg:text-8xl">
                                Joshua Mathew
                            </h1>
                        </AniHighlight>
                        <AniHighlight>
                            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                                Full Stack Developer
                            </span>
                        </AniHighlight>
                        <AniHighlight>
                            <p className="my-2 max-w-[700px] py-6 font-light tracking-tighter">
                                {HERO_CONTENT}
                            </p>
                        </AniHighlight>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 pl-10">
                    <div className="flex justify-center">
                        <AniHighlight>
                            <TiltImg source={profilePic} altText="Joshua Mathew" />
                        </AniHighlight>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Hero

