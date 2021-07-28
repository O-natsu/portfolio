import Head from "next/head";
import Image from "next/image";
import styled from "@emotion/styled";
import { Header } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>猫のように気ままに</title>
        <meta
          name="description"
          content="猫のように気ままなポートフォリオサイト"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Section>
          <H1>猫のように気ままに</H1>
        </Section>
        <Section>
          <LeftContents>
            <h2>自己紹介</h2>
            <Image src="/cat.jpg" alt="my cat" width={180} height={180} />
            {/* <Image src='/cat.jpg' alt="my cat"/> */}
            <ul>
              <li>name: Onatsu</li>
              <li>like: </li>
              <li>skill: </li>
            </ul>
          </LeftContents>
        </Section>
        <Section>
          <RightContents>
            <h2>職務履歴書的な</h2>
          </RightContents>
        </Section>
      </main>

      <footer>
        <a
          href="https://twitter.com/onatsu_alc"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          href="https://github.com/O-natsu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </footer>
    </>
  );
}

const H1 = styled.h1`
  color: gray;
`;

const Section = styled.section`
  padding: 0 80px;
`;

const LeftContents = styled.div`
  margin-right: auto;
  text-align: left;
`;

const RightContents = styled.div`
  margin-left: auto;
  text-align: left;
`;
