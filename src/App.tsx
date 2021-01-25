import React from 'react';
import { Typography } from 'antd';
import { searchRequest } from './api'; 
import { SearchComponent } from './components';
import './App.css';

const {Title} = Typography;


const App: React.FC = () => {
    const onSearch = async (query: string) => {
        try {
            const data = await searchRequest(query);

            console.log(data);
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="site-layout-content">
            <Title>Search a movie</Title>
            <SearchComponent  onSearch={onSearch} />
        </div>
    );
}; 

export default App;
