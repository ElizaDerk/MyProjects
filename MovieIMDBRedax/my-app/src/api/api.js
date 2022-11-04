import axios from "axios";

const API = axios.create({
    baseURL: 'https://movie-database-alternative.p.rapidapi.com/',
    headers: {
        'X-RapidAPI-Key': 'e19977f3cemshac1a35ee2a357acp1601cdjsn723e50dfb0c1',
        'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
    }
})

export default API;
