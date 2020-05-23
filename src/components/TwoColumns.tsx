import React from 'react';

interface PropTypes {
	className?: string;
	left: React.ReactNode;
	right: React.ReactNode;
}

const Button: React.FC<PropTypes> = (props) => {
	const { left, right, className = '' } = props;
	return (
		<div
			className={`flex flex-col md:flex-row justify-center max-w-xl m-4 ${className}`}
		>
			<div className="flex-4 md:border-r border-white p-4">{left}</div>
			<div className="flex-10 flex ml-4 items-center">{right}</div>
		</div>
	);
};

export default Button;
