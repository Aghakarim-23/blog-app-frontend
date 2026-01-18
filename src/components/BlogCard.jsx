export default function BlogCard({ blogs }) {
  const { _id, img, title, content, author, tags, createdAt } = blogs;
  return (
    <div className="rounded-md overflow-hidden border border-gray-300 ">
      <img src={img} alt="blog_image" className="w-full h-50 object-cover" />
      <div className="p-4 flex flex-col gap-3">
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-violet-500 bg-blue-600/20 rounded-md px-3"
            >
              {tag}
            </span>
          ))}
        </div>
        <p>{title}</p>
        <div className="flex justify-between">
          <span>{author?.username}</span>
          <span>{new Date(createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
