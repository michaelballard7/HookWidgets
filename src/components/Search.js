import React, { useState, useEffect} from 'react';
import axios from 'axios';


const SearchBar = () => {

	const [searchTerm, setSearchTerm] = useState("")
	const [results, setResults] = useState([])

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
		
		if (searchTerm && !results.length){
			wikiSearch()

		} else{

			const timeoutId = setTimeout(() => {
				if(searchTerm) {
					wikiSearch()
				}
			},500)

			return () => {
				console.log("This is inside the cleanup function")
				clearTimeout(timeoutId);
			}
		}	

	},[searchTerm]) 

	
	let list = results.map( (result) => {
		return (
				<div key={result.pageid} className="item"> 
					<div className="right floated content">
						<a 
							className="ui button" 
							href={`https://en.wikipedia.org?curid=${result.pageid}`}> Go</a>
					</div>
					<div className="content">
						<div className="header">
							{result.title} 
						</div>
						<div className="description">
							<span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
						</div>
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
			<div className="ui celled list">
				
				{list}
			</div>

		</div>
		
		)
}

export default SearchBar; 