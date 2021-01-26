import React from 'react';
import { Input } from 'antd';

const {Search} = Input;

type SearchComponentProps = {
    onSearch: (query: string) => void;
    loading: boolean;
}

export const SearchComponent: React.FC<SearchComponentProps> = ({
    onSearch,
    loading,
}) => {
    return (<div>
        <Search 
            placeholder="Title"
            loading={loading}
            onSearch={onSearch}
            enterButton
        />
    </div>);
}
