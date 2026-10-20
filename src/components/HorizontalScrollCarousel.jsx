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
        description: "Built a full stack platform digitizing the BASIS-24 behavioral health assessment with Spring Boot, React, and MySQL, including separate portals for providers and patients. Added JWT authentication, access control by role, and email 2FA, migrated legacy hospital MS Access data into MySQL, and built benchmarking reports with Z-score outlier tests and control charts exported as PDFs. Deployed on AWS using Elastic Beanstalk, RDS, S3, and CloudFront.",
        id: 1,
    },
    {
        title: "Undergraduate UAV Researcher",
        role: "UMass Amherst",
        date: "May 2026 – August 2026",
        description: "Implemented a non-uniform coverage algorithm from an IEEE paper that uses time warping to control drone speed, so the UAV spends more time in higher priority regions instead of following a fixed search pattern. Simulated coverage with multiple drones in Gazebo using MAVSDK and ArduPilot SITL, then built a ROS 2 node to fly the trajectories on a DEXI-5 drone across 100+ test flights, including real Milan telecom demand data.",
        id: 2,
    },
    {
        title: "UMass Humanoid Team",
        role: "Software Subteam",
        date: "September 2024 – May 2025",
        description: "Built object detection with YOLOv8 and Intel RealSense depth sensing for a humanoid robot, measuring each object's real size and distance. Used OpenCV segmentation and background masking to isolate objects for robotic perception and VR telepresence.",
        id: 3,
    },
    {
        title: "Game Win Predictor",
        role: "Project",
        date: "January 2026",
        description: "Built a web app with a FastAPI backend that pulls live games and match history from the Riot API, running 90+ requests per search concurrently with rate limiting. Built a dataset of 4,683 ranked matches, caught and removed data leakage, and trained a logistic regression model to estimate live win probability.",
        id: 4,
    },
    {
        title: "Financial News Sentiment Analysis",
        role: "Project",
        date: "August 2023",
        description: "Through an AI program for high school students, built a sentiment classifier for financial news using text preprocessing, bag of words features, and logistic regression, and explored sequence models like LSTMs and BERT.",
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
        date: "January 2022 – May 2022",
        description: "Organized a hackathon for middle and high schoolers with multiple workshops run by professional speakers. 240+ students registered for the two day hackathon. Raised over $7,500 in funding and sponsorship from MITRE, Wolfram Alpha, EA Education, echo3D, AoPS, PLE, and AICS.",
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