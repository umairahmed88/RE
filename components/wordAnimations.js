import { useEffect, useRef } from "react";

const WordAnimations = (text) => {
	const textRef = useRef(null);

	useEffect(() => {
		const textElement = textRef.current;
		const words = text.split(" ");
		textElement.innerHTML = words
			.map((word, index) => `<span style="--index: ${index}">${word}</span>`)
			.join(" ");
	}, [text]);

	return textRef;
};

export default WordAnimations;
