import { GlobalStyles } from "../components";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
