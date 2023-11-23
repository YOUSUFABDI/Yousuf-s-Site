import React from 'react'
import BaargelleTabletPhoneMockupLg from './../../assets/images/BaargelleImgs/baargelleBdtablet-phoneMockupLg.png'
import BaargelleTabletPhoneMockupSm from './../../assets/images/BaargelleImgs/baargelleBdtablet-phoneMockupSm.png'
import BaargelleTabletMockupSm from './../../assets/images/BaargelleImgs/baargelleBdtabletMockupnSm.png'
import BaargelleTabletMockupLg from './../../assets/images/BaargelleImgs/baargelleBdtabletMockupnLg.png'
import BaargellePhoneMockupSm from './../../assets/images/BaargelleImgs/BaargelleBdphoneMockupSm.png'
import BaargellePhoneMockupLg from './../../assets/images/BaargelleImgs/BaargelleBdphoneMockupLg.png'
import BargelleHeader from './BargelleHeader'
import BaargelleDemo from './BaargelleDemo'
import BaargelleTags from './BaargelleTags'
import Connect from './../../layouts/Connect'
import BackToProjects from '../../layouts/BackToProjects'
import { motion } from 'framer-motion'

const Bargelle: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col gap-10 my-14 text-lightSecondary dark:text-darkSecondary"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <BargelleHeader />
      <BaargelleDemo
        BaargelleTabletPhoneMockupSm={BaargelleTabletPhoneMockupSm}
        BaargelleTabletPhoneMockupLg={BaargelleTabletPhoneMockupLg}
        BaargelleTabletMockupSm={BaargelleTabletMockupSm}
        BaargelleTabletMockupLg={BaargelleTabletMockupLg}
        BaargellePhoneMockupSm={BaargellePhoneMockupSm}
        BaargellePhoneMockupLg={BaargellePhoneMockupLg}
      />
      <BaargelleTags />
      <Connect />
      <BackToProjects />
    </motion.div>
  )
}

export default Bargelle
