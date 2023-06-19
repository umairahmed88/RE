import React from "react";
import { BackButton } from "../index";
import { WordAnimations } from "../index";

const Pages = ({ data, pageTitle, children }) => {
	const textRef = WordAnimations(`Our ${pageTitle}`);

	return (
		<div className='m-3'>
			<div className='flex justify-between'>
				<h1
					className='font-bold text-3xl text-center word-by-word-animation'
					style={{
						fontFamily: "Dancing Script",
						fontWeight: "900",
						fontSize: "2.2rem",
					}}
					ref={textRef}
				>
					Our {pageTitle}
				</h1>
			</div>
			<ul className='flex flex-wrap justify-center'>
				{data.map((service) => (
					<li key={service.title}>
						<div>
							<p
								className='text-xl'
								style={{
									fontFamily: "Diphylleia",
								}}
							>
								<span>{service.title}</span>
								{service.description}
								{service.link ? (
									<>
										Visit {service.title} <a href={service.link}>here</a>
									</>
								) : null}
								<img alt={service.title} src={service.image} />
							</p>
						</div>
					</li>
				))}
			</ul>
			{children}
			<BackButton />
		</div>
	);
};

export default Pages;
