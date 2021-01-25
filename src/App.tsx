import React from 'react';
import { Typography } from 'antd';
import { searchRequest } from './api'; 
import { SearchComponent } from './components';
import { useMainState } from './reducer';
import { newSearch } from './reducer/actions';
import './App.css';

const {Title} = Typography;


const App: React.FC = () => {
    const [state, dispatch] = useMainState();

    const onSearch = async (query: string) => {
        try {
            const data = await searchRequest(query);
            
            dispatch(newSearch(data.Search, data.totalResults));
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="site-layout-content">
            <Title>Search a movie</Title>
                <SearchComponent  onSearch={onSearch} />
            {JSON.stringify(state.movies)}
        </div>
    );
}; 

export default App;
