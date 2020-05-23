import React from 'react';

interface PropTypes {
	name: string;
	label: string;
}

const Input: React.FC<PropTypes> = (props) => {
	const { name, label } = props;
	return (
		<div className="border-b border-gray-200 w-full p-2 mt-4">
			<label htmlFor={label} className="sr-only">
				{label}
			</label>
			<input
				id={name}
				placeholder={label}
				className="w-full"
				name={name}
				type="text"
			/>
		</div>
	);
};

export default Input;
