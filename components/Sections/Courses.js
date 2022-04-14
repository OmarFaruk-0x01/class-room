import { CourseCard } from './../Cards/CoursesCard';
import {
  AiOutlineDown,
} from "react-icons/ai";
import PButton from "../Buttons/PButton";
import { CourseData } from "../../CustomData";



const Courses = () => {
  function renderCourses() {
    return CourseData.map((course, i) => (
      <CourseCard index={i} key={course.course_id} course={course} />
    ));
  }

  return (
    <div>
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <h2 className="font-bold text-xl">Explore Popular Courses</h2>
        <div className="flex items-center justify-end py-2 gap-2">
          <span className="text-sm font-medium ">Short By</span>
          <button className="flex gap-1 font-sans font-semibold text-sm items-center px-4 py-2 bg-c_orange_light/40 text-c_orange rounded-md hover:bg-c_orange hover:text-white z-20 transition-all">
            Cetagory
            <AiOutlineDown />
          </button>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2  md:grid-cols-3 py-10 md:gap-2 lg:px-12 xl:px-24 lg:gap-10">
        {renderCourses()}
      </div>

      <div className="flex items-center justify-center">
        <PButton title={"More Courses"} />
      </div>
    </div>
  );
};

export default Courses;
