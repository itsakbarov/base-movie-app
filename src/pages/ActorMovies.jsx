import React, { useState, useEffect } from 'react'

// import dependies
import MovieCard from '../components/MovieCard'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import axios from 'axios';



const ActorMovies = (match) => {

    const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />;
    const [personMovie, setpersonMovie] = useState({
        isFetched: false,
        data: [],
        error: false
    })
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/person/${match.match.params.id}/movie_credits`, {
            params: {
                api_key: 'bb18b72f144594d22368e25f5a48f641'
            }

        })
            .then(function (response) {
                setpersonMovie({
                    isFetched: true,
                    data: response.data,
                    error: false,
                })
            })
            .catch(function (error) {
                setpersonMovie({
                    isFetched: true,
                    data: [],
                    error: error,
                })
            })
    }, []);
    console.log(personMovie)
    return (
        <div>
            <h2 className="heading">actor...</h2>
            <div className="movie" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {personMovie.isFetched ? (
                    personMovie.data.cast.map(item => (
                        <MovieCard
                            title={item.character}
                            date={item.title}
                            cover={item.poster_path}

                        />
                    ))
                ) : (
                    <Spin className="spinner" indicator={antIcon} />
                )}
            </div>
        </div>
    )
}

export default ActorMovies
