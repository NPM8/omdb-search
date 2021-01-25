import { MovieInSearch } from '../types';
import { Reducer } from 'react';

export type InitialState = {
    movies: MovieInSearch[],
    total: number;
    searchLoding: boolean,
    refetchingLoding: boolean,
}

export type MainReducer = Reducer<InitialState, {type: string, payload?: any}>;

