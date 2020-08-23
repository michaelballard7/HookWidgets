import React from 'react'
import Accordion from './components/Accordion'
import SearchBar from './components/Search'

const items = [


	{
		title: 'What is react?',
		content: 'React is a front end js framework',
	},
	{
		title: 'What use react?',
		content: 'React is a favorite framework among engineers',
	},
	{
		title: 'How do you use react?',
		content: 'You use react by creating components',
	},

]

export default () => {

	return (
		
			<div className="ui container">
				<SearchBar />
			</div>
		)
}

// <Accordion items={items}/>