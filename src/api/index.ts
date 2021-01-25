import { Movie } from '../types';

export const searchRequest: (query: string) => Promise<Movie> = async (query) => {
    try {
        const data = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${query}&p=1`);
        return await data.json()
    } catch (e) {
        console.log(e)
    }
};

