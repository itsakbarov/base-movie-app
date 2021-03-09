import React, { useState, useEffect } from 'react'

// import dependies
import styled from 'styled-components'
import axios from 'axios'
import '../global/styles.scss'

import {
    LoadingOutlined
} from '@ant-design/icons';
import {
    Spin
} from 'antd';

import MovieCard from '../components/MovieCard'
const Latest = () => {
const antIcon = <LoadingOutlined style = {
    {
        fontSize: 36
    }
}
spin / > ;
    const [movieData, setMovieData] = useState({
        isFetched: false,
        data: [],
        error: null
    })
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=bb18b72f144594d22368e25f5a48f641`, {

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
                Upcoming movies

        </StyledHeading>
        <div className="container">
      <div className="content">
          {
              movieData.isFetched ? (movieData.data.map((item, index) => (
            <MovieCard
                title={item.title}
                id={item.id}
                date={item.release_date}
                cover={item.poster_path}
                key={index}
                rating={item.vote_average}
            />            
               ))) : (
                    <Spin indicator={antIcon} />
                )}
      </div>
        </div>
        </div>
    )
}
const StyledHeading = styled.h2`
    font-size: 2rem;
    border-bottom: 2px solid #1890ff
`

export default Latest
