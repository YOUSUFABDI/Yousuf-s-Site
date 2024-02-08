import React from "react"
import { motion } from "framer-motion"
import { BASE_URL } from "@/lib/data"

const SomBDDemo: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col gap-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="flex justify-center bg-[#E8E8E8] dark:bg-projectBg h-[233px] md:h-[400px] rounded-md">
        <img
          src={`${BASE_URL}/images/somBdImgs/somBdTablet-phonemockup.png`}
          alt="SomBdTabletPhoneMockupSm"
        />
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex justify-center bg-[#E8E8E8] dark:bg-projectBg h-[233px] md:h-[400px] rounded-md">
          <img
            src={`${BASE_URL}/images/somBdImgs/somBdtabletMockupSm.png`}
            className="block md:hidden"
            alt="SomBdTabletPhoneMockupSm"
          />
          <img
            className="hidden md:block"
            src={`${BASE_URL}/images/somBdImgs/somBdtabletMockupnLg.png`}
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
          src={`${BASE_URL}/images/somBdImgs/somBdMockupMobileSm.png`}
          className="block md:hidden"
          alt="SomBdTabletPhoneMockupSm"
        />
        <img
          className="hidden md:block"
          src={`${BASE_URL}/images/somBdImgs/somBdMockupMobileLg.png`}
          alt="SomBdTabletPhoneMockup"
        />
      </div>
    </motion.div>
  )
}

export default SomBDDemo
