import React from 'react';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
import Logo from '../components/Logo';
import TwoColumns from '../components/TwoColumns';

interface Carrer {
	name: string;
	id: string;
}

type CareerList = Carrer[];

const Index: React.FC = () => {
	return (
		<>
			<div className="bg-gray-100 text-center md:hidden">(310) 860-0770</div>
			<div className="flex justify-between p-4">
				<div className="flex">
					<h2>logo</h2>
					<div className="hidden md:block">(310) 860-0770</div>
				</div>
				<div className="">
					<h2>logo 2</h2>
				</div>
			</div>
			<div className="flex flex-col md:flex-row">
				<div className="img-right-bottom bg-gray-100 flex-1">
					<img src="/1.jpg" className="md:hidden" alt="a person writing" />
				</div>
				<div className="flex-1 p-6">
					<h1 className="text-3xl leading-tight">
						University tuition reimbursement
					</h1>
					<h2 className="text-2xl">for COVID-19</h2>
					<h3>
						Don't pay <span className="font-bold">FULL</span> tuition for{' '}
						<span className="font-bold">HALF</span> a Semester
					</h3>
					<div>
						<Input name="name" label="Name" />
						<Input name="email" label="Email" />
						<Input name="phone" label="Phone" />
						<Input name="university" label="University" />
						<Select name="career" label="Choose your academic career">
							<Select.Option
								disabled={true}
								selected={true}
								value={''}
								label={'Choose your academic career'}
							/>
							{([] as CareerList).map((career) => {
								const { name, id } = career;
								return <Select.Option key={id} value={id} label={name} />;
							})}
						</Select>
						<div className="flex justify-end mt-4">
							<Button>SUBMIT</Button>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-blue-800 flex justify-center">
				<TwoColumns
					left={
						<p className="text-center md:text-left text-white whitespace-no-wrap">
							No Fee Unless <br className="md:hidden" /> <span>We Win</span>
						</p>
					}
					right={
						<p className="text-sm leading-none text-white text-center md:text-left">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
							officia facere quam laborum praesentium ut eligendi eius commodi
							itaque quod facilis neque ipsa recusandae expedita iusto, ipsam,
							autem sint error.
						</p>
					}
				/>
			</div>
			<div className="relative flex justify-center md:pt-10">
				<div className="absolute top-0 left-0 h-full w-full ">
					<div className="bg-blue-100 min-h-200" style={{ height: 300 }}></div>
				</div>
				<div className="relative flex flex-col md:flex-row max-w-3xl mx-2">
					<div className="img-blend md:w-2/5">
						<img
							src="2.jpg"
							className="md:hidden w-full"
							alt="a person writing"
						/>
					</div>
					<div className="md:w-3/5 relative bg-blue-900 p-6 mx-2">
						<p className="text-white">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
							nulla magni exercitationem! Consectetur esse fugit ducimus
							eligendi dicta corrupti quae, assumenda blanditiis voluptas
							explicabo neque placeat consequuntur, in nobis doloribus!
						</p>
						<p className="text-white">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
							dolore nihil facere recusandae labore a itaque quis consequatur
							nulla optio
						</p>
					</div>
				</div>
			</div>
			<div className="white-bg pt-4 md:pt-6">
				<h2 className="text-center text-2xl">
					Some Schools We Are Currently Fighting
				</h2>
				<div className="flex mx-auto max-w-3xl w-full">
					<div className="flex flex-wrap justify-center">
						<Logo name="uni1" />
						<Logo name="uni1" />
						<Logo name="uni1" />
						<Logo name="uni1" />
						<Logo name="uni1" />
						<Logo name="uni1" />
						<Logo name="uni1" />
						<Logo name="uni1" />
						<p className="w-full text-center">
							Don't see your school? Don't worry!{' '}
							<a href="/somewhere">Click here</a>
						</p>
					</div>
				</div>
			</div>
			<div className="relative bg-blue-800 p-10">
				<h2 className="text-3xl text-white text-center">In The Media</h2>
				<div className="absolute left-0 w-full flex justify-center">
					<TwoColumns
						className="bg-blue-900 p-4"
						left={<img src="https://picsum.photos/300/200" alt="logo" />}
						right={
							<p className="text-sm leading-none text-white text-center md:text-left">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Corporis officia facere quam laborum praesentium ut eligendi
								eius commodi itaque quod facilis neque ipsa recusandae expedita
								iusto, ipsam, autem sint error.
							</p>
						}
					/>
				</div>
			</div>
			<div style={{ height: 700 }}></div>
		</>
	);
};

export default Index;
