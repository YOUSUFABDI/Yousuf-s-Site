import React from 'react'

type BaargelleDemoTypeProps = {
  BaargelleTabletPhoneMockupSm: string
  BaargelleTabletPhoneMockupLg: string
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
    <div className="flex flex-col gap-10">
      <div className="flex justify-center bg-[#F0F0F0] dark:bg-projectBg h-[233px] md:h-[400px] rounded-md">
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
        <div className="flex justify-center bg-[#F0F0F0] dark:bg-projectBg h-[233px] md:h-[400px] rounded-md">
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

      <div className="flex justify-center bg-[#F0F0F0] dark:bg-projectBg h-[233px] md:h-[400px] rounded-md">
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
    </div>
  )
}

export default BaargelleDemo
