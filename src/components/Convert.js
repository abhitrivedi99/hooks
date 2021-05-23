import React, { useState, useEffect } from 'react'
import axios from 'axios'

const KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'

const Convert = ({ language, text }) => {
	const [translated, setTranslated] = useState('')
	const [debouncedText, setDebouncedText] = useState(text)

	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedText(text)
		}, 700)

		return () => {
			clearTimeout(timerId)
		}
	}, [text])

	useEffect(() => {
		const doTranslation = async (text, language) => {
			const { data } = await axios.post(
				'https://translation.googleapis.com/language/translate/v2',
				{},
				{
					params: {
						q: text,
						target: language,
						key: KEY,
					},
				},
			)

			setTranslated(data.data.translations[0].translatedText)
		}

		doTranslation(debouncedText, language.value)
	}, [language, debouncedText])

	return (
		<div>
			<h1 className="ui header">{translated}</h1>
		</div>
	)
}

export default Convert
