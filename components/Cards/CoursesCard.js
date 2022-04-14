import {
    AiFillPlayCircle,
    AiOutlineHeart,
} from "react-icons/ai";
import { RiUser6Fill } from "react-icons/ri";
import { BsStarHalf } from "react-icons/bs";
export const CourseCard = ({
  course,
  index
}) => {
  return <div data-aos="fade-up" data-aos-delay={index * 100} className="group shadow-md hover:shadow-xl bg-white rounded-lg overflow-hidden md:max-w-xs lg:max-w-sm transition-all duration-300">
      <div className="relative rounded-lg overflow-hidden">
        <img className="group-hover:scale-125 transition-all duration-300" src={course.thumb_url} alt="coursesimg" />
        <div className="absolute opacity-0  top-3 right-3 text-c_orange w-[30px] h-[30px] flex items-center justify-center rounded-full bg-white z-[1] hover:bg-c_orange_light hover:text-white transition-all duration-200 group-hover:opacity-100">
          <AiOutlineHeart size={20} />
        </div>
      </div>
      <div className="p-2">
        <div className="flex items-center gap-2 py-1">
          <div className="">
            <div className="w-[40px] h-[40px] mx-1 rounded-full bg-slate-400 " style={{
            backgroundImage: `url(${course.owner.avatar_url})`,
            backgroundSize: "cover"
          }}></div>
          </div>
          <h1 className="font-semibold text-md md:text-sm lg:text-md xl:text-lg">
            {course.title}
          </h1>
        </div>
        <div className="flex items-center justify-center py-1">
          <div className=" flex w-1/3  mx-1 text-c_orange gap-1 items-center justify-center">
            <AiFillPlayCircle />
            <span className="text-gray-400 text-xs">
              {course.class_count} Classes
            </span>
          </div>
          <div className="flex  w-1/3  mx-1 text-c_orange gap-1 items-center justify-center">
            <RiUser6Fill />
            <span className="text-gray-400 text-xs">
              {course.students} Students
            </span>
          </div>
          <div className="flex  flex-1 mx-1 text-c_orange gap-1 items-center justify-center">
            <BsStarHalf />
            <span className="text-gray-400 text-xs">{course.rating}</span>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex py-1.5 items-center">
            {course.tags.map(tag => <span key={tag} className="bg-c_orange_light text-xs mx-1 px-2 py-1 rounded-sm font-normal">
                {tag}
              </span>)}
          </div>
          <div className="text-right px-1 py-2 ">
            <span className="font-semibold">${course.regular_price}</span>
          </div>
        </div>
      </div>
    </div>;
};
  