import React from 'react'
import { motion } from 'framer-motion'
import homeImg1 from './../assets/images/home-img1.svg'
import downloadIcon from './../assets/icons/downloading.svg'

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center bg-white text-darkTxtColor dark:bg-darkColor dark:text-white mt-[40px] md:mt-[50px] xl:mt-[70px] px-4 md:px-6 lg:px-16 xl:px-16 lg:flex-row-reverse lg:justify-between">
      <div className="lg:flex lg:flex-1 lg:justify-end">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className='className="md:w-[500px] md:h-[400px] lg:w-full lg:h-full lg:object-cover'
        >
          <img className="w-full h-full" src={homeImg1} alt="homeImg1" />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center gap-3 md:gap-5 font-montosra font-bold text-2xl tracking-[0.15rem] leading-[1.875rem] mt-10 xl:mt-[71px] md:text-3xl lg:flex-1 lg:items-start xl:flex-1 xl:items-start text-center xl:text-start lg:text-4xl xl:text-5xl xl:h-[400px] 2xl:text-7xl 2xl:leading-[100px]"
      >
        <span className="">HI, 👋 I AM YOUSUF</span>
        <span className="">A Software Engineer</span>
        <button className="flex items-center gap-5 bg-activeColor text-white rounded-[10px] pr-14 pl-[10px] py-4 mt-10 lg:mt-[60px] hover:opacity-80 duration-150 ease-in">
          <img src={downloadIcon} alt="downloadIcon" />
          <span className="text-lg lg:text-[1.25rem] font-bold font-montosra tracking-[0.125rem] leading-[1.875rem]">
            Download CV
          </span>
        </button>
      </motion.div>
    </section>
  )
}

export default Hero
