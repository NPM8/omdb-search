import React from 'react';
import { Typography, notification } from 'antd';
import { searchRequest } from './api'; 
import { SearchComponent, ListComponent, LoadMoreComponent } from './components';
import { useMainState } from './reducer';
import { newSearch, addMovie } from './reducer/actions';
import './App.css';

const {Title} = Typography;


const App: React.FC = () => {
    const [state, dispatch] = useMainState();
    const [api, contextHolder] = notification.useNotification();

    const onSearch = async (query: string) => {
        try {
            const data = await searchRequest(query, 1);
            
            dispatch(newSearch(data.Search, data.totalResults, query));
        } catch (e) {
            api.error({
                message: 'Something went wrong',
                description: e.message,
                placement: 'topLeft',
            });
        }
    }

    const onLoad = async () => {
        try {
            const data = await searchRequest(state.query, state.page);

            dispatch(addMovie(data.Search));
        } catch (e) {
            api.error({
                message: 'Something went wrong',
                description: e.message,
                placement: 'topLeft',
            });
        }
    }

    return (
        <div className="site-layout-content">
            {contextHolder}
            <Title>Search a movie</Title>
            <SearchComponent  onSearch={onSearch} />
                <ListComponent 
                    movies={state.movies}
                    loadMore={<LoadMoreComponent
                        loading={state.refetchingLoding} 
                        hasMore={state.total > state.movies.length}
                        onLoad={onLoad}
                    />}
                />
        </div>
    );
}; 

export default App;
