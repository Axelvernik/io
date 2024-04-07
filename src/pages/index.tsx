import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>IO on SOL</title>
        <meta
          name="description"
          content="IO on SOL"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
