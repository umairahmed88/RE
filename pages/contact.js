import { useState } from "react";
import { Map } from "../components/index";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { SiWhatsapp } from "react-icons/si";
import "typeface-dancing-script";

function ContactPage() {
	const phoneNumber = "+92-300-3563848"; // Set the phone number here

	const handleWhatsAppClick = () => {
		const messageText = `Hi, I'm interested in your services. Can we discuss further?`;
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
					style={{
						fontFamily: "Dancing Script",
					}}
				>
					Have a coffee with Us
				</h1>

				<p className='text-2xl md:mb-10 mb-5 flex items-center justify-center'>
					<BiPhoneCall className='mr-2' />
					<span>+92-331-3877771</span>
				</p>

				<div className='flex items-center justify-center mb-10'>
					<HiOutlineMail className='text-2xl mr-2' />
					<span>rehanbali2000@yahoo.com</span>
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
			</div>

			<div className='w-1/2'>
				<Map />
			</div>
		</div>
	);
}

export default ContactPage;

// import { useState } from "react";
// import { Map } from "../components/index";
// import { BiPhoneCall } from "react-icons/bi";
// import { HiOutlineMail } from "react-icons/hi";
// import { SiWhatsapp } from "react-icons/si";
// import "typeface-dancing-script";

// function ContactPage() {
// 	const phoneNumber = "+92-300-3563848"; // Set the phone number here

// 	const handleWhatsAppClick = () => {
// 		const messageText = `Hi, I'm interested in your services. Can we discuss further?`;
// 		const encodedMessage = encodeURIComponent(messageText);
// 		const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
// 		window.open(whatsappUrl, "_blank");
// 	};

// 	return (
// 		<div className='md:flex m-1 font-bold'>
// 			<div
// 				className='w-screen min-h-screen bg-cover bg-no-repeat bg-center md:w-1/2 pr-4 md:pl-6 items-center flex-col flex mx-auto max-w-md text-center'
// 				style={{
// 					backgroundImage: "url('/contact.jpg')",
// 					backgroundSize: "140% 100%",
// 				}}
// 			>
// 				<h1
// 					className='text-4xl md:mb-20 mb-10 mt-5'
// 					style={{
// 						fontFamily: "Dancing Script",
// 					}}
// 				>
// 					Have a coffee with Us
// 				</h1>

// 				<p className='text-2xl md:mb-10 mb-5'>
// 					<BiPhoneCall className='mr-32' /> +92-331-3877771
// 				</p>

// 				<div className='items-center'>
// 					<div className='flex'>
// 						<HiOutlineMail className='text-2xl' />
// 						Email Us at:
// 					</div>
// 					rehanbali2000@yahoo.com
// 				</div>

// 				<div className='flex flex-wrap items-center mt-10'>
// 					<p className='mr-2 font-bold text-xl'>
// 						Want to discuss something on WhatsApp
// 					</p>
// 					<div className='text-green-600 cursor-pointer bg-white rounded-full'>
// 						<SiWhatsapp
// 							onClick={handleWhatsAppClick}
// 							className='w-8 h-8 transform scale-125'
// 						/>
// 					</div>
// 				</div>
// 			</div>

// 			<div className='w-1/2'>
// 				<Map />
// 			</div>
// 		</div>
// 	);
// }

// export default ContactPage;
