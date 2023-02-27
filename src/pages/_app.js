import "../styles/globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="author" content="Jan Boldis" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home page</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="p-3 grow">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
