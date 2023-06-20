import React from "react";

const About = () => {
	return (
		<div className='w-screen bg-image min-h-screen bg-cover bg-no-repeat bg-center top-0 font-bold text-yellow-100'>
			<div className='md:bg-white mx-auto md:max-w-xs md:p-2 md:border-black md:border-4'>
				<h1 className='m-5 bg-white md:bg-transparent text-3xl mx-auto text-center text-red-400'>
					About Us
				</h1>
			</div>
			<p className='p-5 text-yellow-100 md:text-yellow-50 md:text-xl'>
				We provide a complete range of construction and maintenance services.
				Our team has over 15 years of industry experience. We are dedicated to
				providing a comprehensive package, from ground-up construction to
				long-term maintenance solutions. Trust us for reliable, efficient, and
				cost-effective construction services. We offer the expertise and
				workmanship you deserve. Contact us for a quote on your project and
				experience our exceptional service and customer satisfaction.
			</p>
			<div className='md:bg-white mx-auto md:max-w-xs md:p-2 md:rounded md:border-black md:border-4'>
				<h1 className='m-5 px-4 bg-white md:bg-transparent text-3xl mx-auto text-center text-red-400'>
					Our Vision
				</h1>
			</div>
			<p className='p-5 text-yellow-100 md:text-yellow-50 md:text-xl'>
				Our vision is to become the leading construction firm, consistently
				exceeding international standards and providing exceptional customer
				satisfaction. We aim to deliver excellent value and innovative
				construction solutions that meet our clients' requirements.
			</p>
			<div className='md:bg-white mx-auto md:max-w-xs md:p-2 md:rounded md:border-black md:border-4'>
				<h1 className='m-5 bg-white md:bg-transparent text-3xl mx-auto text-center text-red-400'>
					Our Mission
				</h1>
			</div>
			<p className='p-5 text-yellow-100 md:text-yellow-50 md:text-xl'>
				Our mission is to be a leading global construction company, delivering
				quality projects that surpass customer expectations. We strive for
				excellence in every aspect of our work, providing superior craftsmanship
				and utilizing state-of-the-art technology to enhance productivity and
				cost-effectiveness.
			</p>
		</div>
	);
};

export default About;
