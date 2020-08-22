import axios from 'axios';



const api = axios.create({
	baseURL:"https://en.wikipedia.org/w/api.php"
})



export default api;