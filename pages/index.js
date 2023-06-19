import React from "react";
import "../app/globals.css";
import indexData from "../data/indexData";
import { HeaderText } from "@/components/index";

const HomePage = () => {
	return (
		<div className='container mx-auto'>
			<HeaderText />
			<div className='flex flex-wrap justify-center'>
				{indexData.map((index) => (
					<div className='md:m-6 m-3 cursor-pointer' key={index.name}>
						<a href={index.link}>
							<img
								alt={index.name}
								src={index.image}
								className='m-3 rounded-lg md:w-[300px] w-[300px] md:h-[300px] h-[300px]'
							/>
							<p className='m-3 text-center max-w-[300px] mx-auto'>
								{index.name}
							</p>
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default HomePage;
