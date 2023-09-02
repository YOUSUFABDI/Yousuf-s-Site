import React from 'react'
import aboutDarkImg from './../assets/images/aboutImgDark.svg'
import aboutLightImg from './../assets/images/aboutImgLighty.svg'
import { useTheme } from '../context/ThemeContext'

const AboutMe: React.FC = () => {
  const { theme } = useTheme()

  return (
    <section className="flex flex-col lg:flex-row-reverse items-center gap-10 md:gap-[30px] mt-10 md:mt-[50px] lg:mt-[70px] pt-[101px] md:pt-[111px] lg:py-0 lg:items-start lg:mx-10 ">
      <div className="text-center lg:text-start lg:flex-1 lg:pt-[61px]">
        <span className="text-activeColor text-2xl font-montosra font-bold leading-7 tracking-[2.4px] uppercase">
          About Me
        </span>
        <p className="font-montosra font-medium leading-5 mt-5 ml-6 mr-[22px] md:tracking-[2px] md:leading-8 md:text-xl md:mx-[115px] lg:mx-0 lg:text-start">
          I'm a software engineer, and I specialize in creating secure, static
          and dynamic code. I also enjoy working with cross-functional teams to
          create fantastic web and mobile applications because I am a strong
          team player. I also love solving complex problems.
        </p>
      </div>
      <div className="">
        {theme === 'dark' ? (
          <img className="" src={aboutDarkImg} alt="aboutImgLight" />
        ) : (
          <img className="" src={aboutLightImg} alt="aboutImgLight" />
        )}
      </div>
    </section>
  )
}

export default AboutMe
