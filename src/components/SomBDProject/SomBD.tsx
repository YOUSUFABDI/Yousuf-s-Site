import React from 'react'
import SomBdTabletPhoneMockupLg from './../../assets/images/somBdImgs/somBdTablet-phonemockup.png'
import SomBdTabletPhoneMockupSm from './../../assets/images/somBdImgs/somBdTablet-phonemockupSm.png'
import SomBdTabletMockupSm from './../../assets/images/somBdImgs/somBdtabletMockupSm.png'
import SomBdTabletMockupLg from './../../assets/images/somBdImgs/somBdtabletMockupnLg.png'
import SomBdPhoneMockupSm from './../../assets/images/somBdImgs/somBdMockupMobileSm.png'
import SomBdPhoneMockupLg from './../../assets/images/somBdImgs/somBdMockupMobileLg.png'
import SomBDHeader from './SomBDHeader'
import SomBDDemo from './SomBDDemo'
import SomBDTags from './SomBDTags'
import Connect from '../../layouts/Connect'
import BackToProjects from '../../layouts/BackToProjects'
import { motion } from 'framer-motion'

const SomBD: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col gap-10 my-14 text-lightSecondary dark:text-darkSecondary"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <SomBDHeader />
      <SomBDDemo
        SomBdTabletPhoneMockupSm={SomBdTabletPhoneMockupSm}
        SomBdTabletPhoneMockupLg={SomBdTabletPhoneMockupLg}
        SomBdTabletMockupSm={SomBdTabletMockupSm}
        SomBdTabletMockupLg={SomBdTabletMockupLg}
        SomBdPhoneMockupSm={SomBdPhoneMockupSm}
        SomBdPhoneMockupLg={SomBdPhoneMockupLg}
      />
      <SomBDTags />
      <Connect />
      <BackToProjects />
    </motion.div>
  )
}

export default SomBD
