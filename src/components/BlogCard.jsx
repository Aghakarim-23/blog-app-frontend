import moment from "moment/moment";
import Link from "next/link";

export default function BlogCard({ blogs }) {
  const { _id, image, title, content, author, tags, createdAt } = blogs;
  return (
    <Link href={`/blog/${_id}`} className="rounded-md overflow-hidden border border-gray-300 ">
      <img src={image} alt="blog_image" className="w-full h-50 object-cover" />
      <div className="p-4 flex flex-col gap-3">
        {/* <div className="flex gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-violet-500 bg-blue-600/20 rounded-md px-3"
            >
              {tag}
            </span>
          ))}
        </div> */}
        <p className="text-lg font-semibold leading-snug">{title}</p>
        <div className="flex justify-between">
          <span  className="font-medium">{author?.username}</span>
          <span>{moment(createdAt).format("D MMM YYYY HH:mm")}</span>
        </div>
      </div>
    </Link>
  );
}
