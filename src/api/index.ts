import { SearchResult, Response } from './types';

export const searchRequest: (query: string) => Promise<SearchResult> = async (query) => {
    const data = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${query}&page=1`);
    const json: Response = await data.json();

    if (json.Response === "True") {
        return {
            Search: json.Search,
            totalResults: json.totalResults,
        }
    }

    throw new Error(json.Error);
};

