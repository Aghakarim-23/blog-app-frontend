import Head from "next/head";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  // useEffect(() => {
  //   if (!loading && !user) {
  //     router.push("/login");
  //   }
  // }, [loading, user]);

  // if (loading) return <div>Loading...</div>;

  // if (!user) return null;

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <h1>Welcome!</h1>
        <p>This is your home page.</p>
      </div>
    </>
  );
}
