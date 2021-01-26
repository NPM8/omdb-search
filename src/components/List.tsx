import React from 'react';
import { MovieInSearch } from '../types';
import { List, Typography } from 'antd';

type ListComponentProps = {
    movies: MovieInSearch[];
    loadMore: React.ReactNode;
    loading: boolean;
}

const {Text, Paragraph} = Typography;

export const ListComponent: React.FC<ListComponentProps> = ({
    movies,
    loadMore,
    loading,
}) => {
    return (<List
        size="large"
        itemLayout="vertical"
        dataSource={movies}
        loading={loading}
        loadMore={loadMore}
        rowKey={(item) => item.Title}
        renderItem={(item) => (<List.Item 
            extra={<img src={item.Poster} width={150} alt="Poster" />}
            >
                <List.Item.Meta 
                    title={item.Title}
                />
                <Paragraph><Text strong>Year</Text>: {item.Year}</Paragraph>
                <Paragraph><Text strong>Type</Text>: {item.Type}</Paragraph>
        </List.Item>)}
    />)
}

