import { MovieInSearch } from '../types';

export const START_LOADING = 'START_LOADING';

export const START_REFETCHING = 'START_REFETCHING';

export const STOP_LOADING = 'STOP_LOADING';

export const STOP_REFETCHING = 'STOP_REFETCHING';

export const NEW_SEARCH = 'NEW_SEARCH';

export const ADD_MOVIE = 'ADD_MOVIE';

export const startLoadingAction = () => ({type: START_LOADING});

export const startRefetchingAction = () => ({type: START_REFETCHING});

export const stopLoadingAction = () => ({type: STOP_LOADING});

export const stopRefetchingAction = () => ({type: STOP_REFETCHING});

export const newSearch = (movies: MovieInSearch[], total: number) => ({type: NEW_SEARCH, payload: {movies, total}});

export const addMovie = (movies: MovieInSearch[]) => ({type: ADD_MOVIE, payload: movies});
