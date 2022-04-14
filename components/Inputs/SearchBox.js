import { AiOutlineSearch } from "react-icons/ai";

const SearchBox = () => {
  return (
    <div className="flex items-center relative ">
      <i className="text-c_orange absolute left-[5px]">
        <AiOutlineSearch size={21} />
      </i>
      <input
        type="search"
        className="
        form-control
        inline-block
        w-full
        mdx:w-[155px]
        px-3
        pl-7
        py-1.5
        text-sm
        font-medium
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded-full
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-c_orange focus:outline-none
      "
        id="exampleSearch"
        placeholder="Search Courses"
      />
    </div>
  );
};

export default SearchBox;
