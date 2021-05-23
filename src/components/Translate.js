//

import React, { useState } from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'

const options = [
	{
		label: 'Afghanistan',
		value: 'af',
	},
	{
		label: 'Arabic',
		value: 'ar',
	},
	{
		label: 'Hindi',
		value: 'hi',
	},
	{
		label: 'Gujarati',
		value: 'gu',
	},
]

const Translate = () => {
	const [language, setLanguage] = useState(options[0])
	const [text, setText] = useState('')

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label>Enter Text</label>
					<input
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</div>
			</div>
			<Dropdown
				label="Select a language"
				selected={language}
				onSelectedChange={setLanguage}
				options={options}
			/>
			<hr />
			<h2 className="ui header">Output:</h2>
			<Convert text={text} language={language} />
		</div>
	)
}

export default Translate
