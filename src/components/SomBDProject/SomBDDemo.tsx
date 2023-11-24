import React from 'react'
import { motion } from 'framer-motion'

type SomBDDemoTypeProps = {
  SomBdTabletPhoneMockupSm: string
  SomBdTabletPhoneMockupLg: string
  SomBdPhoneMockupSm: string
  SomBdPhoneMockupLg: string
  SomBdTabletMockupSm: string
  SomBdTabletMockupLg: string
}

const SomBDDemo: React.FC<SomBDDemoTypeProps> = ({
  SomBdTabletPhoneMockupSm,
  SomBdTabletPhoneMockupLg,
  SomBdPhoneMockupSm,
  SomBdPhoneMockupLg,
  SomBdTabletMockupSm,
  SomBdTabletMockupLg,
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
          src={SomBdTabletPhoneMockupSm}
          className="block md:hidden"
          alt="SomBdTabletPhoneMockupSm"
        />
        <img
          className="hidden md:block"
          src={SomBdTabletPhoneMockupLg}
          alt="SomBdTabletPhoneMockup"
        />
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex justify-center bg-[#E8E8E8] dark:bg-projectBg h-[233px] md:h-[400px] rounded-md">
          <img
            src={SomBdPhoneMockupSm}
            className="block md:hidden"
            alt="SomBdTabletPhoneMockupSm"
          />
          <img
            className="hidden md:block"
            src={SomBdPhoneMockupLg}
            alt="SomBdTabletPhoneMockup"
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
          src={SomBdTabletMockupSm}
          className="block md:hidden"
          alt="SomBdTabletPhoneMockupSm"
        />
        <img
          className="hidden md:block"
          src={SomBdTabletMockupLg}
          alt="SomBdTabletPhoneMockup"
        />
      </div>
    </motion.div>
  )
}

export default SomBDDemo
