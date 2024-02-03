// components/DashboardLayout.js
import Head from "next/head";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Head>
        <title>AFCON Meme Hub</title>
        <meta name="description" content="AFCON Meme Hub Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
