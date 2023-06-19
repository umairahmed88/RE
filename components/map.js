import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const Map = () => {
	const mapContainerRef = useRef(null);

	useEffect(() => {
		let map;

		if (typeof window !== "undefined") {
			const L = require("leaflet");
			// Create a map instance
			map = L.map(mapContainerRef.current).setView([24.883592, 67.166726], 13);

			// Add a tile layer
			L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
				attribution: "",
			}).addTo(map);

			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						const { latitude, longitude } = position.coords;
						map.setView([latitude, longitude], 13);
						L.marker([latitude, longitude]).addTo(map);
					},
					(error) => {
						console.log("Error getting current position:", error);
					}
				);
			} else {
				console.log("Geolocation is not supported by this browser.");
			}
		}

		return () => {
			// Clean up the map instance
			if (map) {
				map.remove();
			}
		};
	}, []);

	return (
		<div className='w-[150%] md:w-[100%] m-10 '>
			<h1 className='text-xl'>We are here at:</h1>
			<h1 className='text-3xl'>Rehan Enterprises</h1>
			<p>Golden Town near Meezan Bank Bus stop Wireless gate Karachi</p>
			<div
				ref={mapContainerRef}
				className='md:h-[400px] h-[300px] md:w-[80%] w-[100%] mt-10 rounded'
			/>
		</div>
	);
};

export default dynamic(() => Promise.resolve(Map), {
	ssr: false,
});
