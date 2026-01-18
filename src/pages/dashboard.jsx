import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";

export default function dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading]);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="min-h-screen">dashboard</div>
    </>
  );
}
