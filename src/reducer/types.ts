import { MovieInSearch } from '../types';
import { Reducer } from 'react';

export type InitialState = {
    movies: MovieInSearch[];
    query: string;
    page: number;
    total: number;
    searchLoding: boolean;
    refetchingLoding: boolean;
}

export type MainReducer = Reducer<InitialState, {type: string, payload?: any}>;

