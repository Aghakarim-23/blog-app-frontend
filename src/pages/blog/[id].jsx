import { useRouter } from "next/router";
import Head from "next/head";

export async function getServerSideProps(context) {
  const { id } = context.params;

  return {
    props: {
      id,
    },
  };
}

export default function BlogDetail({ id }) {
  return (
    <>
      <Head>
        <title>Blog detail</title>
      </Head>
      <div>Blog: {id}</div>
    </>
  );
}
