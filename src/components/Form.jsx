const Form = () => {
	return (
		<form className="grid grid-cols-1 md:grid-cols-2 space-y-2">
			{/* Name */}
			<input
				type="text"
				name="name"
				placeholder="Full name"
				className="p-2 border border-amber-400 rounded-xl bg-stone-200"
			/>
			{/* Email */}
			<input
				type="email"
				name="email"
				placeholder="Email"
				className="p-2 border border-amber-400 rounded-xl bg-stone-200"
			/>
			{/* Telephone */}
			<input
				type="tel"
				name="tel"
				placeholder="Phone number"
				className="p-2 border border-amber-400 rounded-xl bg-stone-200"
			/>
			{/* Industry */}
			<input
				type="text"
				name="industry"
				placeholder="Industry"
				className="p-2 border border-amber-400 rounded-xl bg-stone-200"
			/>
			{/* Service */}
			<input
				type="text"
				name="service"
				placeholder="Service"
				className="p-2 border border-amber-400 rounded-xl bg-stone-200"
			/>
			{/* Address */}
			<input
				type="text"
				name="address"
				placeholder="Address"
				className="p-2 border border-amber-400 rounded-xl bg-stone-200"
			/>
			{/* City */}
			<input
				type="text"
				name="city"
				placeholder="City"
				className="p-2 border border-amber-400 rounded-xl bg-stone-200"
			/>
			{/* Zip Code */}
			<input
				type="text"
				name="zip-code"
				placeholder="Zip code"
				className="p-2 border border-amber-400 rounded-xl bg-stone-200"
			/>
			{/* Message */}
			<textarea
				placeholder="Type your message"
				rows={4}
				className="md:col-span-2 p-2 border border-amber-400 rounded-xl bg-stone-200 resize-none"></textarea>
			<button className="md:col-span-2 px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 transition duration-300 text-white tracking-wider uppercase cursor-pointer my-3 w-full">
				Submit
			</button>
		</form>
	);
};

export default Form;
