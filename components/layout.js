import Head from "next/head";
import SantaNav from "./santanav";
import SantaFoot from "./santafoot";

const Layout = ({ title, children }) => {
  // Ensure that title is always a string
  const pageTitle = title ? `${title} - Santa's Volunteers` : "Santa's Volunteers";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SantaNav/>
      <div className="content-wrapper">{children}</div>
      <SantaFoot/>
    </>
  );
};

export default Layout;
