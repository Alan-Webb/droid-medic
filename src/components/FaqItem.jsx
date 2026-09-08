import {useState} from "react";
import {FaChevronCircleDown, FaChevronCircleUp} from "react-icons/fa";

const FaqItem = ({question, answer}) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex justify-between px-2 items-center">
				<span className="text-xl">{question}</span>
				{isOpen ? (
					<FaChevronCircleUp className="text-xl text-amber-700 m-2 cursor-pointer" />
				) : (
					<FaChevronCircleDown className="text-xl text-amber-700 m-2 cursor-pointer" />
				)}
			</button>
			{isOpen && <p className="pl-4">{answer}</p>}
		</div>
	);
};

export default FaqItem;
