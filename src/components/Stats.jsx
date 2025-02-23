import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FaUsers, FaCheckCircle, FaTrophy, FaProjectDiagram } from "react-icons/fa";
import background from '../assets/images/bg.jpeg';

const fadeRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Stats = () => {
    const [startCount, setStartCount] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCount(true);
                }
            },
            { threshold: 0.5 }
        );

        const currentRef = sectionRef.current; // Store ref value in a variable

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#000000] text-white py-12 px-6"
            style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "top" }}
        >
            <div className="absolute inset-0 bg-[#000000] opacity-80"></div>

            <motion.div
                className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                {/** Happy Clients */}
                <motion.div className="flex flex-col items-center" variants={fadeRightVariants}>
                    <FaUsers className="text-5xl mb-2" />
                    <h2 className="text-4xl font-bold">
                        <CountUp start={0} end={startCount ? 2000 : 0} duration={3} separator="," />+
                    </h2>
                    <p className="text-lg">Happy Clients</p>
                </motion.div>

                {/** Completed Works */}
                <motion.div className="flex flex-col items-center" variants={fadeRightVariants}>
                    <FaCheckCircle className="text-5xl mb-2" />
                    <h2 className="text-4xl font-bold">
                        <CountUp start={0} end={startCount ? 100 : 0} duration={3} separator="," />+
                    </h2>
                    <p className="text-lg">Completed Works</p>
                </motion.div>

                {/** Winning Rewards */}
                <motion.div className="flex flex-col items-center" variants={fadeRightVariants}>
                    <FaTrophy className="text-5xl mb-2" />
                    <h2 className="text-4xl font-bold">
                        <CountUp start={0} end={startCount ? 50 : 0} duration={3} separator="," />+
                    </h2>
                    <p className="text-lg">Winning Rewards</p>
                </motion.div>

                {/** Completed Projects */}
                <motion.div className="flex flex-col items-center" variants={fadeRightVariants}>
                    <FaProjectDiagram className="text-5xl mb-2" />
                    <h2 className="text-4xl font-bold">
                        <CountUp start={0} end={startCount ? 305 : 0} duration={3} separator="," />+
                    </h2>
                    <p className="text-lg">Completed Projects</p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Stats;
