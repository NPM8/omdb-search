import React from 'react';
import { Typography } from 'antd';
import { SearchComponent } from './components';
import './App.css';

const {Title} = Typography;

const App: React.FC = () => {
    return (
        <div className="site-layout-content">
            <Title>Search a movie</Title>
            <SearchComponent />
        </div>
    );
}; 

export default App;
