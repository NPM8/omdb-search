import React from 'react';
import { Input } from 'antd';

const {Search} = Input;

type SearchComponentProps = {
    onSearch: (query: string) => void;
}

export const SearchComponent: React.FC<SearchComponentProps> = ({onSearch}) => {
    return (<div>
            <Search placeholder="title" onSearch={onSearch} enterButton />
        </div>);
}
