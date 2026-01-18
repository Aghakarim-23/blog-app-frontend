import BlogCard from "./BlogCard";
import { blogs } from "@/assets/assets";

export default function BlogList() {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-4 md:my-6 lg:my-8 max-w-7xl mx-auto px-2">
      {blogs.map((item,index) => (
        <BlogCard key={index} blogs={item} />
      ))}
    </div>
  );
}
