import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	return (
		<div>
			<nav className='bg-[#5EB8F1] h-20 w-full fixed'>
				<input type='checkbox' id='check' hidden />
				<label
					htmlFor='check'
					className='float-right text-white mr-10 lg:hidden leading-[80px] text-3xl'
				>
					<FontAwesomeIcon icon={faBars} />
				</label>
				<label className='pl-12 md:pl-24 md:text-4xl text-3xl text-white leading-[80px] md:leading-[80px]'>
					Navbar
				</label>
				<ul className='float-right mr-10 leading-[80px] lg:flex lg:relative h-[100vh] lg:h-0 lg:w-fit top-20 lg:top-0 left-[-100%] transition-all duration-300 lg:transition-none text-center bg-[#156AA0] w-[100%] space-x-4 text-white uppercase rounded fixed'>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#'>Contact</a>
					</li>
					<li>
						<a href='#'>About</a>
					</li>
					<li>
						<a href='#'>Connect Wallet</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
