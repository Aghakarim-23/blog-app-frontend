import Head from "next/head";
import axios from "axios";
import moment from "moment";
import { FaUser } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import Image from "next/image";

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const res = await axios(`http://localhost:8001/api/posts/${id}`);

    return {
      props: {
        blog: res.data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default function BlogDetail({ blog }) {
  const { _id, image, title, content, author, tags, createdAt } = blog;
  return (
    <>
      <Head>
        <title>Blog detail</title>
      </Head>
      <div className="min-h-screen ">
        <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-0">
          <h2 className="text-3xl font-semibold leading-snug my-8">{title}</h2>
          <div className="flex flex-col md:flex-row md:justify-between gap-3">
            <div className="flex gap-2 items-center">
              <FaUser />
              <span className="text-sm text-gray-500">{author?.username}</span>
            </div>
            <div className="flex gap-2 items-center">
              <MdCalendarMonth />
              <span>{moment(createdAt).format("D MMM YYYY HH:mm")}</span>
            </div>
          </div>
          <div className="border my-6 w-full"></div>
          <Image
            src={image}
            alt={title}
            width={800}
            height={400}
            className="rounded-lg"
          />
          <p className="text-base leading-relaxed text-gray-800 my-6">
            {content}
          </p>
        </div>
      </div>
    </>
  );
}
