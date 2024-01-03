import React from 'react'
import { motion } from 'framer-motion'

type BaargelleDemoTypeProps = {
  BaargelleTabletPhoneMockupSm: string
  BaargelleTabletPhoneMockupLg?: string
  BaargellePhoneMockupSm: string
  BaargellePhoneMockupLg: string
  BaargelleTabletMockupSm: string
  BaargelleTabletMockupLg: string
}

const BaargelleDemo: React.FC<BaargelleDemoTypeProps> = ({
  BaargelleTabletPhoneMockupSm,
  BaargelleTabletPhoneMockupLg,
  BaargellePhoneMockupSm,
  BaargellePhoneMockupLg,
  BaargelleTabletMockupSm,
  BaargelleTabletMockupLg,
}) => {
  return (
    <motion.div
      className="flex flex-col gap-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="flex justify-center bg-[#E8E8E8] dark:bg-projectBg h-[233px] md:h-[400px] rounded-md">
        <img
          src={BaargelleTabletPhoneMockupSm}
          className="block md:hidden"
          alt="BaargelleTabletPhoneMockupSm"
        />
        <img
          className="hidden md:block"
          src={BaargelleTabletPhoneMockupLg}
          alt="BaargelleTabletPhoneMockup"
        />
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex justify-center bg-[#E8E8E8] dark:bg-projectBg h-[233px] md:h-[400px] rounded-md">
          <img
            src={BaargellePhoneMockupSm}
            className="block md:hidden"
            alt="BaargelleTabletPhoneMockupSm"
          />
          <img
            className="hidden md:block"
            src={BaargellePhoneMockupLg}
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
          src={BaargelleTabletMockupSm}
          className="block md:hidden"
          alt="BaargelleTabletPhoneMockupSm"
        />
        <img
          className="hidden md:block"
          src={BaargelleTabletMockupLg}
          alt="BaargelleTabletPhoneMockup"
        />
      </div>
    </motion.div>
  )
}

export default BaargelleDemo
