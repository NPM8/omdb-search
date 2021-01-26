import React from 'react';
import { Button } from 'antd';
import './LoadMore.css';

type LoadMoreComponentProps = {
    onLoad: () => void;
    hasMore: boolean;
    loading: boolean;
}

export const LoadMoreComponent: React.FC<LoadMoreComponentProps> = ({onLoad, hasMore, loading}) => {
    return hasMore ? (<div className="load-more">
            <Button loading={loading} onClick={onLoad}>Load more</Button>
        </div>) : <></>;
};
