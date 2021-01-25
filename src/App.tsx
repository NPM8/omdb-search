import React from 'react';
import { Typography } from 'antd';
import { searchRequest } from './api'; 
import { SearchComponent } from './components';
import './App.css';

const {Title} = Typography;


const App: React.FC = () => {

    const onSearch = async (query: string) => {
        const data = await searchRequest(query);

        console.log(data);
    }

    return (
        <div className="site-layout-content">
            <Title>Search a movie</Title>
            <SearchComponent  onSearch={onSearch} />
        </div>
    );
}; 

export default App;
