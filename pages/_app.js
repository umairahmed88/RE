import logoImage from "/public/RE.jpg"; // Replace with the path to your logo JPG file
import React from "react";
import Head from "next/head";
import "../app/globals.css";
import { Footer, Navbar, ScrollToTopButton, Spinner } from "@/components/index";

function MyApp({ Component, pageProps }) {
	const ogImageUrl = logoImage;

	return (
		<div className='pt-24'>
			<Head>
				<link rel='icon' type='image/png' href='/favicon.jpg' />
				<title>RE Services</title>
				<meta property='og:image' content={ogImageUrl} />
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
