import Head from "next/head";
import Search from "../components/Search";
import styles from "../styles/Home.module.scss";

export default function Home() {
	return (<div className={styles.container}>
		<Head>
			<title>IMDB Clone | Adobe Interview</title>
			<meta name="description" content="Generated by create next app" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		
		<main className={styles.main}><Search /></main>
	</div>);
}