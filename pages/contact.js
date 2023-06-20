import React, { useState } from "react";
import { Map } from "../components";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { SiWhatsapp } from "react-icons/si";
import "typeface-dancing-script";

const phoneNumber = "+92-300-3563848";
const email = "rehanbali2000@yahoo.com";

function ContactPage() {
	const [whatsappMessage, setWhatsappMessage] = useState("");

	const handleWhatsAppClick = () => {
		const messageText = `Hi, I'm interested in your services. Can we discuss further? ${whatsappMessage}`;
		const encodedMessage = encodeURIComponent(messageText);
		const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
		window.open(whatsappUrl, "_blank");
	};

	return (
		<div className='md:flex m-1 font-bold'>
			<div
				className='w-screen min-h-screen bg-cover bg-no-repeat bg-center md:w-1/2 pr-4 md:pl-6 items-center flex-col flex mx-auto max-w-md text-center'
				style={{
					backgroundImage: "url('/contact.jpg')",
					backgroundSize: "140% 100%",
				}}
			>
				<h1
					className='text-4xl md:mb-20 mb-10 mt-5'
					style={{ fontFamily: "Dancing Script" }}
				>
					Have a coffee with Us
				</h1>

				<p className='text-2xl md:mb-10 mb-5 flex items-center justify-center'>
					<BiPhoneCall className='mr-2' />
					<span>{phoneNumber}</span>
				</p>

				<div className='flex items-center justify-center mb-10'>
					<HiOutlineMail className='text-2xl mr-2' />
					<span>{email}</span>
				</div>

				<div className='flex items-center mt-10'>
					<p className='mr-2 font-bold text-xl'>
						Want to discuss something on WhatsApp
					</p>
					<div className='text-green-600 cursor-pointer bg-white rounded-full flex items-center'>
						<SiWhatsapp
							onClick={handleWhatsAppClick}
							className='w-8 h-8 transform scale-125'
						/>
					</div>
				</div>

				<textarea
					className='mt-5 p-2 rounded-lg'
					placeholder='Additional message (optional)'
					value={whatsappMessage}
					onChange={(e) => setWhatsappMessage(e.target.value)}
				/>
			</div>

			<div className='w-1/2'>
				<Map />
			</div>
		</div>
	);
}

export default ContactPage;
