import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className='w-full'>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - Current</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="GlobalLogic - (January 2023 - Present)"
            result="Noida, India"
            des="GlobalLogic is a known digital product engineering company in India that offers complete digital transformation solutions & software engineering services."
          />
          <ResumeCard
            title="Software Engineer"
            subTitle="Zimyo - (February 2023 - November 2023)"
            result="Gurugram, India"
            des="Zimyo is a best HR Software for businesses of all sizes. Zimyo HCM helps organizations automate their HR, payroll, performance, recruitment, & everything HR."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Drife - (August 2022 - December 2022)"
            result="Bangalore, India"
            des="DRIFE is a blockchain-based mobility platform that seeks to decentralize the ride-hailing ecosystem. 100% of all fees go back to the driver."
          />
          <ResumeCard
            title="Web Developer"
            subTitle="Fox Consultings - (July 2019 - August 2022)"
            result="Noida, India"
            des="Fox Consultings LLC: Connecting Talent with Opportunity We specialize in bridging the gap between exceptional talent and promising career opportunities."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education