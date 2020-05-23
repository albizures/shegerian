import React from 'react';

const Button: React.FC = (props) => {
	const { children } = props;
	return (
		<button className="rounded-full bg-blue-400 px-8 py-2 w-full md:w-auto">
			{children}
		</button>
	);
};

export default Button;
