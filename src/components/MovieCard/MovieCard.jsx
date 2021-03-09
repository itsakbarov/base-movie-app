import React from 'react'

import styled from 'styled-components'
import { Link } from 'react-router-dom'
// antd 
import {
    Card
} from 'antd';

import {
    ArrowRightOutlined
} from '@ant-design/icons';


const {
    Meta
} = Card;
const MovieCard = ({
        title,
        rating,
        cover,
        id,
        date
    }) => {
    return (
          <Card
        hoverable
        className="movie-card"
        style={{ 
        width: 240 ,
        minHeight: 500,
        height:'100%',
        position: 'relative',
         marginBottom: 30,
         overflow: 'hidden'
         }}
        cover={<img alt="example" src={`https://image.tmdb.org/t/p/w500/${cover}`} />}
        >
            <Rating className="movie-rating">{rating}</Rating>
        <Meta title={title} description={date} />
            <Link className="card-btn" to={`/movie/${id}`} style={{
                padding: '5px 10px',
                bottom: '15px', 
                position: 'absolute',
                right: '15px', 
                display: 'inline-block',
                border: '1px solid'}}>
        View more
        <ArrowRightOutlined style={{marginLeft: 10}}/>
        </Link>
    </Card>
    )
}
const Rating = styled.span`
    background-color: #1890ff;
    padding: 10px 20px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    z-index: 1;
    font-weight: bold;
    position: absolute;
    top: 30px;
    right: -10px ;
    color: white;
`
export default MovieCard
