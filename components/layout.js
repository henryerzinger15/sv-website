import Head from "next/head";
import SantaNav from "./santanav";
import SantaFoot from "./santafoot";

const Layout = ({ title, children }) => (
  <>
    <Head>
      <title>
        {title && `${title} - `}
        Santa's Volunteers
      </title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <SantaNav />
    <div className="content-wrapper">{children}</div>
    <SantaFoot />
  </>
);

export default Layout;
