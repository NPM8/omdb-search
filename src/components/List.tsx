import React from 'react';
import { MovieInSearch } from '../types';
import { List, Typography } from 'antd';

type ListComponentProps = {
    movies: MovieInSearch[];
    loadMore: React.ReactNode;
    loading: boolean;
}

const {Text, Paragraph, Link} = Typography;

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
                title={<Link href={`https://www.imdb.com/title/${item.imdbID}/`}>{item.Title}</Link>}
            />
            <Paragraph><Text strong>Year</Text>: {item.Year}</Paragraph>
            <Paragraph><Text strong>Type</Text>: {item.Type}</Paragraph>
        </List.Item>)}
    />)
}

