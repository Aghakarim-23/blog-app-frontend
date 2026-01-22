import BlogList from "@/components/BlogList";
import Head from "next/head";
import axios from "axios";

export async function getServerSideProps() {
  try {
    const res = await axios.get("http://localhost:8001/api/posts/");
    return {
      props: {
        blogs: res.data || [],
      },
    };
  } catch (error) {
    return {
      props: {
        blogs: [],
      },
    };
  }
}

export default function BlogPage({blogs}) {
  return (
    <>
      <Head>
        <title>Blog list</title>
      </Head>
      <div className="min-h-screen ">
        <BlogList blogs={blogs}/>
      </div>
    </>
  );
}
