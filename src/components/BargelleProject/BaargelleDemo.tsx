import React from 'react'
import { motion } from 'framer-motion'

const BaargelleDemo: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col gap-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="flex justify-center bg-[#E8E8E8] dark:bg-projectBg h-[233px] md:h-[400px] rounded-md">
        <img
          src="./images/baargelleImgs/baargelleBdtablet-phoneMockupSm.png"
          className="block md:hidden"
          alt="BaargelleTabletPhoneMockupSm"
        />
        <img
          className="hidden md:block"
          src="./images/baargelleImgs/baargelleBdtablet-phoneMockupLg.png"
          alt="BaargelleTabletPhoneMockup"
        />
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex justify-center bg-[#E8E8E8] dark:bg-projectBg h-[233px] md:h-[400px] rounded-md">
          <img
            src="./images/baargelleImgs/baargelleBdtabletMockupnSm.png"
            className="block md:hidden"
            alt="BaargelleTabletPhoneMockupSm"
          />
          <img
            className="hidden md:block"
            src="./images/baargelleImgs/baargelleBdtabletMockupnLg.png"
            alt="BaargelleTabletPhoneMockup"
          />
        </div>
        <div className="">
          <p className="text-center text-sm">
            Mobile view of application, including landing page of the system
          </p>
        </div>
      </div>

      <div className="flex justify-center bg-[#E8E8E8] dark:bg-projectBg h-[233px] md:h-[400px] rounded-md">
        <img
          src="./images/baargelleImgs/BaargelleBdphoneMockupSm.png"
          className="block md:hidden"
          alt="BaargelleTabletPhoneMockupSm"
        />
        <img
          className="hidden md:block"
          src="./images/baargelleImgs/BaargelleBdphoneMockupLg.png"
          alt="BaargelleTabletPhoneMockup"
        />
      </div>
    </motion.div>
  )
}

export default BaargelleDemo
