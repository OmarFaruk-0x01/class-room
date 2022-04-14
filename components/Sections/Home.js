import { AiTwotoneStar } from "react-icons/ai";
import PButton from "../Buttons/PButton";

const Home = () => {
  return (
    <div className="flex relative flex-col-reverse flex-auto z-10 gap-4 md:grid md:grid-cols-2">
      <img
        src="/images/bcg.png"
        className=" w-[100%] -z-10 left-0 -top-1/4 absolute md:left-1/4 md:-top-1/2"
        alt="bgc"
      />

      <div className="flex flex-col justify-center text-white my-10 md:my-28">
        <p className="text-sm relative font-semibold md:text-xs lg:text-sm left-1">
          Learn new skills & Popular Courses
        </p>
        <h1 className="font-black text-4xl font-sans py-3 md:text-4xl lg:text-5xl xl:text-6xl">
          For Every Student, Every{" "}
          <span className="text-c_orange top-1 relative">Classroom</span>.
        </h1>
        <p className="text-sm font-normal w-[100%] md:w-full md:text-base">
          Dramatically supply transparent deliverables before backword comp
          internal or &quot;organic&quot; sources. Competenly leverage other
        </p>
        <PButton title={"Explore Courses"} />
      </div>


      <div
        className="relative flex
      items-center justify-center overflow-hidden md:w-full lg:justify-start sm:flex"
      >
        <div
          data-aos="fade-left"
          className="w-[100%] md:w-[100%] relative  z-10 lg:w-[90%] "
        >
          <img src="/images/p1.png" className=" w-full md:w-[650px]" alt="p1" />
          <div
            data-aos="zoom-in"
            data-aos-delay={500}
            style={{ backdropFilter: "blur(10px)" }}
            className=" bg-slate-50/20 absolute top-9 left-7 sm:top-[20%] sm:left-28  px-2 py-2 rounded-md md:left-20 md:top-7 lg:top-10 xl:top-20 xl:left-32"
          >
            <p className="text-md text-c_orange font-semibold lg:text-lg">
              200k
            </p>
            <p className="text-[.6rem] text-white lg:text-[.8rem] font-medium">
              Worldwide Students
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay={500}
            style={{ backdropFilter: "blur(10px)" }}
            className=" bg-slate-50/20 absolute top-[55%] right-0  px-2 py-2 rounded-md md:right-0 md:bottom-20 md:top-[unset] lg:bottom-32 xl:bottom-44 xl:-right-10"
          >
            <p className="text-md text-c_orange font-semibold lg:text-lg flex items-center">
              <AiTwotoneStar /> 20k
            </p>
            <p className="text-[.6rem] text-white lg:text-[.8rem] font-medium">
              Students Review
            </p>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay={500}
          className="absolute right-[1/2] translate-x-[50px] -bottom-20    w-[200px] h-[200px] rounded-full bg-sky-400 -z-0  sm:w-[350px] sm:h-[350px] md:top-[34%] md:right-10 lg:right-20 xl:translate-x-[250px] xl:bottom-0 xl:top-[60%] xl:right-24 xl:w-[300px] xl:h-[300px]"
        ></div>
      </div>
    </div>
  );
};

export default Home;
