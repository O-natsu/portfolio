import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "@emotion/styled";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>猫のように気ままに</title>
				<meta
					name="description"
					content="猫のように気ままなポートフォリオサイト"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<H1>猫のように気ままに</H1>
				<h2>自己紹介</h2>
				<h2>職務履歴書的な</h2>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://twitter.com/onatsu_alc"
					target="_blank"
					rel="noopener noreferrer"
				>
					Twitter
				</a>
			</footer>
		</div>
	);
}

const H1 = styled.h1`
	color: gray;
`;
