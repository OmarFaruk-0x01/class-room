import PButton from "../Buttons/PButton";
import {AiFillCheckCircle, AiOutlineCheck} from 'react-icons/ai'


const WhyChooseUs = () => {
    return (
        <div className="sm:flex sm:items-center sm:gap-0   lg:grid lg:grid-cols-aboutCourseGird lg:justify-items-start lg:justify-self-end py-16">
            <div data-aos='fade-right' className="w-60 mx-auto py-5 sm:w-[50em] lg:w-[400px] lg:pl-20 relative lg:flex lg:items-center lg:justify-center">
                <div data-aos="zoom-in" data-aos-delay={300}  className="p-2 px-3 rounded-lg shadow-lg absolute bg-white top-10 -left-10 lg:left-10">
                    <div className="w-[30px] h-[30px] bg-emerald-800 mb-1 text-white flex items-center justify-center text-sm font-semibold" style={{clipPath: "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)"
                    }}>23+</div>
                    <p className="font-semibold text-[.7rem] ">Years Expriences</p>
                </div>

                 <div data-aos="zoom-in"  className="p-2 px-3 rounded-lg shadow-lg absolute bg-white top-1/2 -right-10">
                    <div className="w-[30px] h-[30px] bg-c_orange mb-1 text-white flex items-center justify-center text-sm font-semibold" style={{clipPath: "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)"
                    }}>
                        <AiOutlineCheck size={19}/>
                    </div>
                    <p className="font-semibold text-[.7rem] ">Safe & Secure</p>
                </div>
                <img src="/images/p3.webp" alt="p2"/>
            </div>
            <div className="py-5 sm:p-11 lg:p-0 lg:w-[55%] grid-flow-col xl:w-[40%]">
                <p className={"font-semibold text-xs text-c_orange sm:text-[.6rem]"}>Why Choose Us</p>
                <h2 className="font-bold text-3xl py-3 sm:text-2xl lg:text-2xl">Why Choose Our Online Learning</h2>
                <p className="text-gray-500 text-sm sm:text-xs"> Dramatically supply transparent deliverables before backword comp
                    internal or &quot;organic&quot; sources. Competenly leverage other</p>
                     <div className="pt-3">
                <div className="flex items-center gap-2 font-semibold text-emerald-800 sm:text-[1rem]">
                    <AiFillCheckCircle  />
                    <span className="text-black sm:text-[.8rem]">Increasing Your Learning Skills</span>
                </div>
                <div className="flex items-center gap-2 font-semibold text-emerald-800 my-2 sm:text-[1rem]">
                    <AiFillCheckCircle   />
                    <span className="text-black sm:text-[.8rem]">High Quality Video & Audio Classes</span>
                </div>
                <div className="flex items-center gap-2 font-semibold text-emerald-800 sm:text-[1rem]">
                    <AiFillCheckCircle   />
                    <span className="text-black sm:text-[.8rem]">Finish Your Course, Get Certificate</span>
                </div>

                </div>
                <div id="why-choose-btn">

          <PButton title={'More Details'} className="sm:text-[.6rem] sm:py-2"/>
                </div>
            </div>
           
        </div>
    )
}
export default WhyChooseUs;