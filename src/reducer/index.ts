import { useReducer, Dispatch, ReducerAction, ReducerState } from 'react';
import { InitialState, MainReducer } from './types';
import { NEW_SEARCH } from './actions';

const initialState: InitialState = {
    movies: [],
    total: 0,
    refetchingLoding: false,
    searchLoding: false,
}

const reducer: MainReducer = (state, {type, payload}) => {
    switch (type) {
        case NEW_SEARCH:
            return {
                ...state,
                movies: [...state.movies, ...payload.movies],
                total: payload.total,
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
