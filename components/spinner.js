import React, { useState, useEffect } from "react";

const Spinner = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			{isLoading && (
				<div className='fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-70 z-50'>
					<div className='spinner border-t-4 border-b-4 border-blue-500 rounded-full w-12 h-12 animate-spin'></div>
				</div>
			)}
		</>
	);
};

export default Spinner;
