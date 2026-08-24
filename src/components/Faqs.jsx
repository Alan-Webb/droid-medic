import {useState} from "react";
import {FaChevronCircleDown, FaChevronCircleUp} from "react-icons/fa";

const questionsAnswers = [
	{
		id: 1,
		question: "What types of droids do you service?",
		answer:
			"We service almost all classifications, including R-series, Protocol (3PO-series), Pit Droids, Utility Droids, and select Security/Battle models. If it has a central processing unit and a power cell, we can fix it.",
	},
	{
		id: 2,
		question: "Do you offer emergency roadside or field repair services?",
		answer:
			"Yes! Our mobile repair skiffs are available for field calls within sector limits. For stranded travelers, we offer 24/7 emergency dispatch.",
	},
	{
		id: 3,
		question: "What is included in a routine droid tune-up?",
		answer:
			"Our standard tune-up includes joint lubrication, Motivator coil testing, optical sensor recalibration, power cell charging check, chassis rust treatment, and a full diagnostic scan.",
	},
	{
		id: 4,
		question: "Do you supply or install Restraint Bolts?",
		answer:
			"Yes, we sell and install high-grade security restraint bolts to ensure your working droids stay within assigned operational zones.",
	},
	{
		id: 5,
		question: "Can I upgrade my droid's power cell for longer battery life?",
		answer:
			"Definitely. We offer upgrades ranging from high-capacity Fusion Cells to long-lasting Cryo-Batteries, complete with heat-sink modifications to prevent overheating.",
	},
	{
		id: 6,
		question:
			"Can you install combat or defense modifications on my utility droid?",
		answer:
			"We offer legal defense upgrades, such as reinforced plating, shock-prod attachments, and upgraded perimeter sensors. Military-grade combat reprogramming requires proper sector authorization permits.",
	},
	{
		id: 7,
		question:
			"What languages can you translate or upload to my Protocol Droid?",
		answer:
			"Our language module database contains over 6 million forms of communication, including obscure alien dialects, binary, and ancient scripts.",
	},
	{
		id: 8,
		question: "Can you customize the exterior paint and chassis of my droid?",
		answer:
			"Yes! We offer custom bodywork, high-durability thermal powder coating, custom decal application, and weather-proofing treatments.",
	},
];

const Faqs = () => {
	const [isQuestionOpen, setIsQuestionOpen] = useState(false);

	return (
		<div className="bg-stone-300">
			<h2>FAQs</h2>
			<div>
				{/* Q&A ACCORDION */}
				<div>
					{questionsAnswers.map((item) => (
						<div key={item.id}>
							<button onClick={() => setIsQuestionOpen(!isQuestionOpen)}>
								<span>{item.question}</span>
								{isQuestionOpen ? (
									<FaChevronCircleUp className="cursor-pointer" />
								) : (
									<FaChevronCircleDown className="cursor-pointer" />
								)}
							</button>
							{isQuestionOpen && <p>{item.answer}</p>}
						</div>
					))}
				</div>
				{/* Other Content */}
				<div></div>
			</div>
		</div>
	);
};

export default Faqs;
