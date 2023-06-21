import React from "react";
import Head from "next/head";
import { Footer, Navbar, ScrollToTopButton, Spinner } from "@/components";
import logoImage from "/public/RE.jpg"; // Replace with the path to your logo JPG file
import "../app/globals.css";

function MyApp({ Component, pageProps }) {
	const ogImageUrl = logoImage;

	return (
		<div className='pt-24'>
			<Head>
				<link rel='icon' type='image/png' href='/favicon.jpg' />
				<title>RE Services</title>
				<meta property='og:image' content={ogImageUrl} />
				{/* Add other necessary meta tags */}
			</Head>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
			<ScrollToTopButton />
			<Spinner />
		</div>
	);
}

export default MyApp;
