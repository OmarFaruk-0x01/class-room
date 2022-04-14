import { InstructorCard } from "./../Cards/InstructorCard";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import PButton from "../Buttons/PButton";
import { useRef, useState } from "react";
import Slider from "react-slick";
import { InstructorData } from "../../CustomData";

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1224,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },

    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Instructors = () => {
  const [currentIns, setCurrentIns] = useState(0);
  const sliderRef = useRef();

  function moveNext() {
    sliderRef.current.slickNext();
  }
  function moveBack() {
    sliderRef.current.slickPrev();
  }

  function renderInstructors() {
    return InstructorData.map((instructor, i) => (
      <InstructorCard
        index={i}
        key={instructor.instructor_id}
        instructor={instructor}
      />
    ));
  }

  return (
    <div className="">
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between ">
        <h2 className="font-bold text-xl">Explore Popular Instructors</h2>
        <div className="flex items-center justify-end py-1 gap-2">
          <button
            onClick={moveBack}
            className="w-[30px] h-[30px] rounded-full bg-c_orange_light flex items-center justify-center transition-all hover:bg-c_orange text-lg text-white"
          >
            <AiOutlineLeft />
          </button>
          <button
            onClick={moveNext}
            className="w-[30px] h-[30px] rounded-full bg-c_orange_light flex items-center justify-center transition-all hover:bg-c_orange text-lg text-white"
          >
            <AiOutlineRight />
          </button>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="w-full sm:w-1/2 md:w-full lg:px-22 py-5 "
      >
        <Slider {...settings} arrows={false} ref={sliderRef}>
          {renderInstructors()}
        </Slider>
      </div>

      <div className="flex items-center justify-center">
        <PButton title={"More Instructors"} />
      </div>
    </div>
  );
};

export default Instructors;
