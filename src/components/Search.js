import React, { useState, useEffect} from 'react';
import axios from 'axios';




const SearchBar = () => {

	const [searchTerm, setSearchTerm] = useState("")
	const [results, setResults] = useState([])

	console.log(results)


	useEffect(()=>{
		const wikiSearch = async () => {

			const { data } = await axios.get('https://en.wikipedia.org/w/api.php',{
				params: {
					action: 'query',
					list: 'search',
					origin: '*',
					format: 'json',
					srsearch: searchTerm,
				}
			});

			setResults(data.query.search);
		}

		if(searchTerm) {
			wikiSearch()
		}
		
	},[searchTerm]) 
	
	let list = results.map( (result) => {

		return (
				<div className="item"> 

					<div className="header">
						{result.title} 
					</div>
					<div className="description">

						{result.snippet}
					</div>
					

				</div>
			)
	})

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label htmlFor="">Enter Wiki Search</label>
					<form action="" className=""  >
						<input 
							value = {searchTerm} 
							type="text" 
							placeholder="Search wikipedia" 
							onChange={e => setSearchTerm(e.target.value)}/>
					</form>
				</div>
			</div>
			<div className="ui relaxed divided list">
				
				{list}
			</div>



		</div>
		

		)
}


export default SearchBar; 