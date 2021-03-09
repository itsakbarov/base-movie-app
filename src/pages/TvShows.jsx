import React, { useEffect, useState, Component } from 'react';

// import dependies
import Slider from "react-slick";
import styled from 'styled-components';
import axios from 'axios';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

// global style
import MovieCard from '../components/MovieCard'
import '../global/styles.scss'

const Ranked = () => {

    const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />;
    
    const [movieData, setMovieData] = useState({
        isFetched: false,
        data: [],
        error: null
    })
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/popular/?api_key=bb18b72f144594d22368e25f5a48f641`, {

        })
            .then(function (response) {
                setMovieData({
                    isFetched: true,
                    data: response.data.results,
                    error: false,
                })
            })
            .catch(function (error) {
                setMovieData({
                    isFetched: false,
                    data: [],
                    error: error,
                })
            })
        console.log(movieData.data)
    }, []);


    return (
        <div>
            <StyledHeading>
                Popular tv Shows.
            </StyledHeading>
            {console.log(movieData)}
            <div className="content">
                {movieData.isFetched ? (movieData.data.map((item, index) => (
                    <MovieCard
                        title={item.original_name}
                        id={item.id}
                        date={item.first_air_date}
                        cover={item.poster_path}
                        key={index}
                        rating={item.vote_average}
                    />
                ))) : (
                        <Spin indicator={antIcon} />
                )}
            </div>
        </div>
    )
}
const StyledHeading = styled.h2`
    font-size: 2rem;
    border-bottom: 2px solid #1890ff
`

export default Ranked
