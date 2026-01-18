import BlogList from "@/components/BlogList";
import Head from "next/head";

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog list</title>
      </Head>
      <div className="min-h-screen">
        <BlogList />
      </div>
    </>
  );
}
