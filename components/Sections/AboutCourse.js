import PButton from "../Buttons/PButton";


const AboutCourse = () => {
    
    return (
        <div className="sm:flex sm:items-center sm:gap-0   lg:grid lg:grid-cols-aboutCourseGird lg:justify-items-start lg:justify-self-end py-16">
            <div data-aos="fade-right" className="w-80 mx-auto py-5 sm:w-[70em] lg:w-[500px] lg:pl-20 xl:w-[600px]">
                <img id="about-title" src="/images/p2.png" alt="p2"/>
            </div>
            <div className="py-5 sm:p-11 lg:p-0 lg:pl-10 lg:w-[60%] grid-flow-col xl:w-[50%]">
                <p  className={"font-semibold text-xs text-c_orange sm:text-[.6rem]"}>About Our Courses</p>
                <h2  className="font-bold text-3xl py-3 sm:text-xl lg:text-2xl">Explore Thousands of Creative Classes.</h2>
                <p className="text-gray-500 text-sm sm:text-xs"> Dramatically supply transparent deliverables before backword comp
          internal or &quot;organic&quot; sources. Competenly leverage other</p>
          <PButton title={'Explore Courses'} className="sm:text-[.6rem] sm:py-2"/>
            </div>
        </div>
    )
}
export default AboutCourse;