import { SearchResult, Response } from './types';

export const searchRequest: (query: string, page: number) => Promise<SearchResult> = async (query, page) => {
    const data = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${query}&page=${page.toString()}`);
    const json: Response = await data.json();

    if (json.Response === "True") {
        return {
            Search: json.Search,
            totalResults: json.totalResults,
        }
    }

    throw new Error(json.Error);
};

