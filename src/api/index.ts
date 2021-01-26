import { SearchResult, Response } from './types';
import { encodeQuery } from '../utils';

export const searchRequest: (query: string, page: number) => Promise<SearchResult> = async (query, page) => {
    const data = await fetch(`https://www.omdbapi.com/?apikey=${
        process.env.REACT_APP_API_KEY
    }&s=${
        encodeQuery(query)
    }&page=${
        page.toString()
    }`);
    const json: Response = await data.json();

    if (json.Response === "True") {
        return {
            Search: json.Search,
            totalResults: json.totalResults,
        }
    }

    throw new Error(json.Error);
};

