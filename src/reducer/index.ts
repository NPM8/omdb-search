import { useReducer, Dispatch, ReducerAction, ReducerState } from 'react';
import { InitialState, MainReducer } from './types';
import { NEW_SEARCH, ADD_MOVIE } from './actions';

const initialState: InitialState = {
    movies: [],
    total: 0,
    query: '',
    page: 1,
    refetchingLoding: false,
    searchLoding: false,
}

const reducer: MainReducer = (state, {type, payload}) => {
    switch (type) {
        case NEW_SEARCH:
            return {
                ...state,
                movies: payload.movies,
                total: payload.total,
                query: payload.query,
                page: 2,
            }
        case ADD_MOVIE:
            return {
                ...state,
                movies: [...state.movies, ...payload.movies],
                page: state.page + 1,
            }
        default: 
           throw new Error('no default action')
    } 
}

const useMainState: () => [ReducerState<MainReducer>, Dispatch<ReducerAction<MainReducer>>] = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return [state, dispatch]
}

export {useMainState}
