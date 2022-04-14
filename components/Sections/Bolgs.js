import { BlogData } from "../../CustomData";
import PButton from "../Buttons/PButton";
import { BlogCard } from "../Cards/BlogCard";



const Blogs = () => {
  

  function renderBlogs() {
    return BlogData.map((blog, i) => (
      <BlogCard index={i} key={blog.blog_id} blog={blog} />
    ));
  }

  return (
    <div>
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center py-10">
        <h2 className="font-bold text-xl md:text-3xl">Explore Popular Blogs</h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2  md:grid-cols-3 py-4 md:gap-2 lg:px-12 lg:gap-10">
        {renderBlogs()}
      </div>

      <div className="flex items-center justify-center">
        <PButton title={"More Blogs"} />
      </div>
    </div>
  );
};

export default Blogs;
