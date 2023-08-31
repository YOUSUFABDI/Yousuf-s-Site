import homeImg1 from './../assets/images/home-img1.svg'
import downloadIcon from './../assets/icons/downloading.svg'

const Home = () => {
  return (
    <section className="flex flex-col items-center bg-white text-darkTxtColor dark:bg-darkColor dark:text-white mt-[40px] md:mt-[50px] lg:mt-[70px] px-4 md:px-6 lg:px-0 lg:pl-10 lg:flex-row-reverse lg:justify-between">
      <div className="lg:flex lg:flex-1 lg:justify-end">
        <img
          className="md:w-[500px] md:h-[400px] lg:w-full lg:h-full object-cover"
          src={homeImg1}
          alt="homeImg1"
        />
      </div>
      <div className="flex flex-col items-center gap-3 md:gap-5 font-montosra font-bold text-2xl tracking-[0.15rem] leading-[1.875rem] mt-10 md:text-3xl lg:flex-1 lg:items-start lg:h-[400px] lg:mt-[70px]">
        <span className="lg:w-full lg:text-5xl capitalize">
          HI, 👋 IAM YOUSUF
        </span>
        <span className="lg:w-full  lg:text-5xl">A Software Engineer</span>
        <button className="flex items-center gap-5 bg-activeColor text-white rounded-[10px] pr-14 pl-[10px] py-4 mt-10 lg:mt-[60px] hover:opacity-80 duration-150 ease-in">
          <img src={downloadIcon} alt="downloadIcon" />
          <span className="text-[1.25rem] font-bold font-montosra tracking-[0.125rem] leading-[1.875rem]">
            Download CV
          </span>
        </button>
      </div>
    </section>
  )
}

export default Home
