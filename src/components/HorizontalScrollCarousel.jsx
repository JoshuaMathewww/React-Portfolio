import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";



const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-77%"]);

    return (
        <section id="experience" ref={targetRef} className="relative h-[400vh]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-10">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};
const Card = ({ card }) => {
    return (
        <div
            key={card.id}
            className="group relative h-[700px] w-[550px] overflow-hidden rounded-lg shadow-lg"
            style={{ fontFamily: '"Inter", sans-serif' }}>

            <div
                style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"></div>

            <div className="absolute inset-0 z-10 flex flex-col justify-center text-left bg-black/50 backdrop-blur-md p-8 space-y-4">
                <p className="text-white text-4xl font-extrabold uppercase">
                    {card.title}
                </p>

                <p className="text-white text-2xl font-semibold">{card.role}</p>

                <p className="text-white text-lg font-light">{card.date}</p>

                <p className="text-white text-base font-light leading-relaxed">
                    {card.description}
                </p>
            </div>

            <div className="absolute inset-0 rounded-lg border border-white/20 group-hover:border-white/50 transition-colors duration-300"></div>
        </div>
    );
};


const cards = [
    {
        title: "Full Stack Software Engineer Intern",
        role: "eBASIS",
        date: "June 2025 – August 2025",
        description: "Developed a full stack healthcare assessment platform using Spring Boot, React, and MySQL, with separate patient and provider portals for administering BASIS-24 evaluations and visualizing patient outcomes. Built REST APIs with JWT authentication, role-based authorization, email 2FA, and password recovery, while also developing data pipelines to migrate legacy clinical data for historical benchmarking. Deployed on AWS using Elastic Beanstalk, RDS, S3, and CloudFront.",
        id: 1,
    },
    {
        title: "Undergraduate UAV Researcher",
        role: "UMass Amherst",
        date: "May 2026 – August 2026",
        description: "Developed a non-uniform ergodic coverage algorithm that generates UAV search trajectories from spatial probability distributions, directing drones to spend more time in higher priority regions instead of following a fixed search pattern. Built MAVSDK flight software and simulated multi-UAV coverage with concurrent ArduPilot SITL in Gazebo, then tested trajectories on 3DR IRIS and DEXI UAVs using QGroundControl, PX4, and ROS 2.",
        id: 2,
    },
    {
        title: "UMass Humanoid Team",
        role: "Software Subteam",
        date: "September 2024 - May 2025",
        description: "Developed object detection with YOLOv8 and Intel RealSense depth sensing for a humanoid robot. Used OpenCV segmentation and background masking to extract spatial information for robotic perception and VR telepresence.",
        id: 3,
    },
    {
        title: "LoL Game Analytics",
        role: "Project",
        date: "January 2026",
        description: "Developed a web app retrieving live League of Legends games and historical match data through the Riot API, displaying player stats, match history, and live game info. Built an asynchronous backend handling 90+ API requests per search, aggregating 20 gameplay metrics per player across multiple endpoints and applying logistic regression to estimate win probability.",
        id: 4,
    },
    {
        title: "Financial News Sentiment Analysis",
        role: "Project",
        date: "August 2023",
        description: "Built an NLP system to classify financial news as positive, negative, or neutral using logistic regression, LSTM, and BERT models. Compared traditional text vectorization with sequence and transformer-based approaches using scikit-learn, TensorFlow/Keras, and PyTorch.",
        id: 5,
    },
    {
        title: "Code Ninjas",
        role: "Coding Instructor",
        date: "February 2021 – September 2024",
        description: "Taught students programming fundamentals through Scratch and JavaScript, leading summer coding camps and providing individualized instruction and feedback on projects and debugging.",
        id: 6,
    },
    {
        title: "Harvard Medical School",
        role: "Research Intern",
        date: "July 2023 – August 2023",
        description: "Studied an intranasal drug delivery system by evaluating cytotoxicity across formulation variants with cell culture and ELISA assays, then measured encapsulation efficiency and 24 hour release kinetics of melatonin across gellan concentrations using centrifugation and HPLC; co-authored paper from findings.",
        id: 7,
    },
    {
        title: "LexHack",
        role: "Marketing Director",
        date: "January 2022 - May 2022",
        description: "Organized a hackathon for middle and high schoolers with multiple workshops run by professional speakers. 240+ students registered for the 2-day hackathon. Raised over $7,500 in funding and sponsorship from MITRE, Wolfram Alpha, EA Education, echo3D, AoPS, PLE, and AICS.",
        id: 8,
    },
    {
        title: "Vision Aid Fundraiser",
        role: "Organizer",
        date: "January 2023",
        description: "Designed a custom shirt to raise awareness for blind patients and organized a campaign that donated proceeds to Vision Aid, raising over $100 to support programs for the visually impaired.",
        id: 9,
    },

];

export default HorizontalScrollCarousel