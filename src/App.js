import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import Accordion from './components/Accordion'
// eslint-disable-next-line no-unused-vars
import Search from './components/Search'
import Dropdown from './components/Dropdown'

// eslint-disable-next-line no-unused-vars
const items = [
	{
		title: 'What is React?',
		content:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
	},
	{
		title: 'Why using React?',
		content:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
	},
	{
		title: 'When to use React?',
		content:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
	},
]

const options = [
	{
		label: 'Red',
		value: 'red',
	},
	{
		label: 'Green',
		value: 'green',
	},
	{
		label: 'Blue',
		value: 'blue',
	},
]

const App = () => {
	const [selected, setSelected] = useState(options[0])
	const [showDropdown, setShowDropdown] = useState(true)

	return (
		<div>
			<button
				onClick={() => {
					setShowDropdown(!showDropdown)
				}}
			>
				Toggle Dropdown
			</button>
			<br />
			{/* <Accordion items={items} /> */}
			{/* <Search /> */}
			{showDropdown ? <Dropdown selected={selected} options={options} onSelectedChange={setSelected} /> : null}
		</div>
	)
}

export default App
