import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
	const Links = [
		{ name: "Home", link: "/" },
		{ name: "About", link: "/about" },
		{ name: "Contact", link: "/contact" },
	];

	const [open, setOpen] = useState(false);

	return (
		<div className='w-full fixed top-0 bg-[#B70F23] z-10 left-0 pb-5'>
			<div className='md:flex items-center justify-between py-4 text-white px-7 md:px-10'>
				<div className='font-bold text-2xl cursor-pointer flex items-center'>
					<a href='/' className='flex'>
						Rehan Enterprises
						<p className='animate-spin-xy shadow-white mx-2'>RE</p>
					</a>
				</div>
				<div
					onClick={() => setOpen(!open)}
					className='text-2xl absolute right-8 top-6 cursor-pointer md:hidden text-white'
				>
					{open ? <FaTimes /> : <FaBars />}
				</div>
				<ul
					className={`md:flex rounded md:items-center absolute md:static bg-[#B70F23] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
						open ? "top-20" : "top-[-490px]"
					}`}
				>
					{Links.map((link) => (
						<li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
							<a
								href={link.link}
								className='rounded py-1 uppercase duration-300 px-2 hover:bg-[#D3152C]'
							>
								{link.name}
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
