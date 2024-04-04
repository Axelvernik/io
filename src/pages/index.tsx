import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Ganymede on SOL</title>
        <meta
          name="description"
          content="Ganymede on SOL"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
