import React from 'react';

const logos = {
	uni1: {
		url: 'https://picsum.photos/300/200',
		alt: 'logo',
	},
};

interface PropTypes {
	name: keyof typeof logos;
}

const Logo: React.FC<PropTypes> = (props) => {
	const { name } = props;
	const logo = logos[name];
	return (
		<div className="w-1/3 md:w-1/4 p-2">
			<img className="w-full" src={logo.url} alt={logo.alt} />
		</div>
	);
};

export default Logo;
