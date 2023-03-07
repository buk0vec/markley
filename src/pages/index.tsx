import { type NextPage } from "next";
import Head from "next/head";
import EditingArea from "~/components/ui/EditingArea";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Markley</title>
        <meta name="description" content="An AI-powered Markdown editor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black px-8 pt-4 pb-8">
        <div className="flex min-h-screen w-full flex-col items-center justify-center gap-3">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Markley
          </h1>
          <EditingArea />
        </div>
      </main>
    </>
  );
};

export default Home;
