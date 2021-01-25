import React from 'react';
import { Input } from 'antd';

const {Search} = Input;

export const SearchComponent: React.FC = () => {
    return (<div>
            <Search placeholder="title" onSearch={(e) => console.log(e)} enterButton />
        </div>);
}
