import { MovieInSearch } from '../types';

export type SearchResult = {
    Search: MovieInSearch[];
    totalResults: number;
};

export type Response = ResponseSuccess | ResponseWithError;

type ResponseWithError = {
    Response: "False";
    Error: string;
};

type ResponseSuccess = {
    Response: "True";
} & SearchResult;

