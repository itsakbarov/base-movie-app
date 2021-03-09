import React, { useEffect, useState } from 'react'

// antd
import {
    Input,
    Space
} from 'antd';


// components
import MovieCard from '../components/MovieCard'

import styled from 'styled-components'
import '../global/styles.scss'
import axios from 'axios'

const {
    Search
} = Input;


const SearchMovies = () => {

    const [Searched, setSearched] = useState('')
    const [movieData, setMovieData] = useState({
        isFetched: false,
        data: [],
        error: null
    })
    // const onSearch = value => setSearched(value);
    const onSearch = (value) => {
        setSearched(value)
    }
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=bb18b72f144594d22368e25f5a48f641&query=${Searched}`, {

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
                    isFetched: true,
                    data: [],
                    error: error,
                })
            })
        console.log(movieData)
    }, [Searched]);



    return (
        <div style={{ position: 'relative', }}>
            <StyledTitle>Search Movies</StyledTitle>
            <Space style={{
                margin: 'auto',
                position: 'absolute',
                left: '0',
                right: '0',
                marginBottom: '20px',
                width: '30%',
            }} direction="vertical">
                <Search
                    placeholder="Type to search movies"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                />
            </Space>
            {/* padding - top: 5 rem;
            display: flex;
            flex - wrap: wrap;
            justify - content: space - around; */}
            <div className="content" >

                {movieData.isFetched ? (movieData.data.map((item, index) => (
                    <MovieCard 
                    key={index}
                    title={item.title} 
                    id={item.id}
                    date={item.release_date}
                    cover={item.poster_path}
                    rating={item.vote_average} />
                ))) : (
                    <h1 style={{textAlign: 'center', width:'100%'}}>Loading...</h1>
                )}
            </div>
        </div>
    )
}
const StyledTitle = styled.h2`
        text-align: center;
        font-size: 2rem

`

export default SearchMovies
