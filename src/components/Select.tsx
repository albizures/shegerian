import React from 'react';

interface PropTypes {
	name: string;
	label: string;
}

interface OptionPropTypes {
	label: string;
	value: string;
	selected?: boolean;
	disabled?: boolean;
}

const Option: React.FC<OptionPropTypes> = (props) => {
	const { label, value, disabled = false, selected = false } = props;
	return (
		<option disabled={disabled} selected={selected} value={value}>
			{label}
		</option>
	);
};

const Select: React.FC<PropTypes> = (props) => {
	const { name, label, children } = props;
	return (
		<div className="border-b border-gray-200 w-full p-2 mt-4">
			<label htmlFor={label} className="sr-only">
				{label}
			</label>
			<select
				defaultValue=""
				id={name}
				placeholder={label}
				className="w-full text-blue-800 bg-transparent"
				name={name}
			>
				{children}
			</select>
		</div>
	);
};

type SelectComponent = React.FC<PropTypes> & {
	Option: React.FC<OptionPropTypes>;
};

(Select as SelectComponent).Option = Option;

export default Select as SelectComponent;
