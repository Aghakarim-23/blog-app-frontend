import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { AuthProvider } from "@/context/AuthContext";

export default function App({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return getLayout(
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
