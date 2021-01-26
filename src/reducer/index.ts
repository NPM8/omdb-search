import { useReducer, Dispatch, ReducerAction, ReducerState } from 'react';
import { InitialState, MainReducer } from './types';
import { 
    NEW_SEARCH,
    ADD_MOVIE,
    START_LOADING,
    START_REFETCHING,
    STOP_LOADING,
    STOP_REFETCHING,
} from './actions';

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
        case START_LOADING:
            return {
                ...state,
                searchLoding: true,
            }
        case STOP_LOADING:
            return {
                ...state,
                searchLoding: false,
            }
        case START_REFETCHING:
            return {
                ...state,
                refetchingLoding: true,
            }
        case STOP_REFETCHING:
            return {
                ...state,
                refetchingLoding: false,
            }
        case NEW_SEARCH:
            return {
                ...state,
                movies: payload.movies,
                total: payload.total,
                query: payload.query,
                page: 2,
                searchLoding: false,
            }
        case ADD_MOVIE:
            return {
                ...state,
                movies: [...state.movies, ...payload.movies],
                page: state.page + 1,
                refetchingLoding: false,
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
