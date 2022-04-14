import { AiOutlineRight } from "react-icons/ai";

export function BlogCard({
  blog,
  index
}) {
  return <div data-aos="fade-up" data-aos-delay={index * 100} className="group shadow-md hover:shadow-xl bg-white rounded-lg overflow-hidden md:max-w-xs lg:max-w-sm transition-all duration-300 ">
      <div className="relative">
        <div className="absolute   opacity-0 -bottom-4 right-5 text-white w-[40px] h-[40px] flex items-center justify-center rounded-full bg-c_orange z-[1] hover:bg-c_orange_light hover:text-white transition-all duration-200 group-hover:opacity-100">
          <AiOutlineRight size={20} />
        </div>
        <div className="relative overflow-hidden rounded-lg  border-white w-[97%] mx-auto my-3">
        <img className="w-full group-hover:scale-125 transition-all duration-300 rounded-lg" src={blog.thumb_url} alt="blogimg" />
        </div>
      </div>
      <div className="p-3 flex flex-col gap-1">
        <div className="flex items-center gap-1 font-medium  text-c_orange uppercase text-xs">
          <span>{blog.cetagory}</span>
          <span>-</span>
          <span>{blog.date}</span>
        </div>
        <h1 className="underline font-semibold text-xl md:text-sm lg:text-md xl:text-lg">
          {blog.title}
        </h1>
        <p className="text-xs text-gray-500">{blog.disp}</p>
      </div>
    </div>;
}
  