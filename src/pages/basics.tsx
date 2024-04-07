import type { NextPage } from "next";
import Head from "next/head";
import { BasicsView } from "../views";

const Basics: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>IO on SOL</title>
        <meta
          name="description"
          content="IO on SOL"
        />
      </Head>
      <BasicsView />
    </div>
  );
};

export default Basics;
