import React from 'react'
import SubTitleSection from '../../layouts/SubTitleSection'
import TitleSection from '../../layouts/TitleSection'
import SomBdTabletPhoneMockupLg from './../../assets/images/somBdImgs/somBdTablet-phonemockup.png'
import SomBdTabletPhoneMockupSm from './../../assets/images/somBdImgs/somBdTablet-phonemockupSm.png'
import SomBdTabletMockupSm from './../../assets/images/somBdImgs/somBdtabletMockupSm.png'
import SomBdTabletMockupLg from './../../assets/images/somBdImgs/somBdtabletMockupnLg.png'
import SomBdPhoneMockupSm from './../../assets/images/somBdImgs/somBdMockupMobileSm.png'
import SomBdPhoneMockupLg from './../../assets/images/somBdImgs/somBdMockupMobileLg.png'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

const SomBD: React.FC = () => {
  const tags = (tag: string) => (
    <span className="bg-[#E8E8E8] dark:bg-projectBg px-6 py-3 rounded-md">
      {tag}
    </span>
  )

  return (
    <div className="flex flex-col gap-10 my-14 text-lightSecondary dark:text-darkSecondary">
      {/* header */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3 relative w-fit">
          <SubTitleSection>2023</SubTitleSection>
          <SubTitleSection>.</SubTitleSection>
          <Link
            to=""
            className="group text-sm transition-colors duration-150 ease-in-out"
          >
            <span className="group-hover:text-lightPrimary dark:group-hover:text-darkPrimary">
              Visit project
            </span>
            <span className="border-b border-lightSecondary dark:border-darkSecondary h-[1px] w-[83px] absolute bottom-0 right-0 group-hover:border-lightPrimary dark:group-hover:border-darkPrimary"></span>
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <TitleSection>Som Bd</TitleSection>
          <p>
            Somali Blood donation is a system that makes it easy for people to
            donate blood online in a timely manner for both donors and
            recipients.
          </p>
        </div>
      </div>
      {/* header */}

      {/* demo */}
      <div className="flex flex-col gap-10">
        <div className="flex justify-center bg-[#F0F0F0] dark:bg-projectBg h-[233px] md:h-[400px] rounded-md">
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
          <div className="flex justify-center bg-[#F0F0F0] dark:bg-projectBg h-[233px] md:h-[400px] rounded-md">
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

        <div className="flex justify-center bg-[#F0F0F0] dark:bg-projectBg h-[233px] md:h-[400px] rounded-md">
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
      </div>
      {/* demo */}

      {/* tags */}
      <div className="flex flex-col gap-5">
        <TitleSection>Tags</TitleSection>
        <div className="flex items-center gap-3 flex-wrap">
          {tags('Web app')}
          {tags('Php')}
          {tags('Mysql')}
          {tags('Javascript')}
          {tags('Bootsrap')}
        </div>
      </div>
      {/* tags */}

      {/* connect */}
      <div className="flex flex-col gap-5">
        <TitleSection>Contact</TitleSection>
        <p className="text-sm">
          Need more project details, or interested in working together? Reach
          out to me directly at{' '}
          <strong className="text-lightPrimary dark:text-darkPrimary">
            yousufabdi34@gmail.com.
          </strong>
          I'd be happy to connect!
        </p>
      </div>
      {/* connect */}

      {/* footer */}
      <Link
        to="/projects"
        className="flex items-center gap-1 relative w-fit text-lightSecondary dark:text-lightSecondary hover:text-lightPrimary dark:hover:text-darkPrimary group transition-colors duration-150 ease-in-out"
      >
        <IoIosArrowRoundBack className="text-4xl text-lightSecondary dark:text-lightSecondary group-hover:text-lightPrimary dark:group-hover:text-darkPrimary" />
        <span>All projects</span>
        <span className="border-b border-lightSecondary dark:border-darkSecondary h-[1px] w-[130px] pb-0 absolute bottom-1 left-1 right-0 group-hover:border-lightPrimary dark:group-hover:border-darkPrimary"></span>
      </Link>
      {/* footer */}
    </div>
  )
}

export default SomBD
