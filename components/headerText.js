import React from "react";
import { WordAnimations } from "./index";
import "typeface-dancing-script";

const HeaderText = () => {
	const textRef1 = WordAnimations(
		"Elevate your journey with RE. For over 15 years, we have crafted unparalleled experiences, leaving an indelible mark. Discover our range of exceptional services tailored to your needs. Experience the highest standards of quality and satisfaction as we serve you with excellence."
	);
	const textRef2 = WordAnimations("Our Prime Services");

	return (
		<div>
			<div className='py-4 text-xl text-center'>
				<p
					className='word-by-word-animation m-2'
					ref={textRef1}
					style={{
						fontFamily: "Diphylleia",
					}}
				>
					Elevate your journey with RE. For over 15 years, we have crafted
					unparalleled experiences, leaving an indelible mark. Discover our
					range of exceptional services tailored to your needs. Experience the
					highest standards of quality and satisfaction as we serve you with
					excellence.
				</p>
			</div>
			<p
				className='word-by-word-animation font-bold text-2xl mx-2 my-4'
				ref={textRef2}
				style={{
					fontFamily: "Dancing Script",
					fontSize: "2.2rem",
				}}
			>
				Our Prime Services
			</p>
		</div>
	);
};

export default HeaderText;
