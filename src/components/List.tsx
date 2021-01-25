import React from 'react';
import { MovieInSearch } from '../types';
import { List, Typography } from 'antd';

type ListComponentProps = {movies: MovieInSearch[]}

const {Text, Paragraph} = Typography;

export const ListComponent: React.FC<ListComponentProps> = ({movies}) => {
    return (<List
        size="large"
        itemLayout="vertical"
        dataSource={movies}
        renderItem={(item) => (<List.Item 
            key={item.Title}
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

