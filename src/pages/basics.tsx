import type { NextPage } from "next";
import Head from "next/head";
import { BasicsView } from "../views";

const Basics: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Ganymede on SOL</title>
        <meta
          name="description"
          content="Ganymede on SOL"
        />
      </Head>
      <BasicsView />
    </div>
  );
};

export default Basics;
