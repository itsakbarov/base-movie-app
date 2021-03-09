import React, { useState, useEffect } from 'react'

// import dependies
import axios from 'axios';
import { Image } from 'antd';
import { Link } from 'react-router-dom'
import { LoadingOutlined, LeftOutlined, RightOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import "slick-carousel/slick/slick.css";
import { Card } from 'antd';
import { settingss } from './settings'
import Slider from "react-slick";
import styled from 'styled-components'


const SingleMovie = ({ match }) => {

    const { Meta } = Card;
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        // autoplay: true,
        autoplaySpeed: 1500,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <RightOutlined />,
        prevArrow: <LeftOutlined />,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    };


    const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />;

    const [singleMovieData, setSingleMovieData] = useState({
        isFetched: false,
        data: [],
        error: null
    })
    const [actorsList, setActorsList] = useState({
        isFetched: false,
        data: [],
        error: null
    })

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}`, {
            params: {
                api_key: 'bb18b72f144594d22368e25f5a48f641'
            }

        })
            .then(function (response) {
                setSingleMovieData({
                    isFetched: true,
                    data: response.data,
                    error: false,
                })
            })
            .catch(function (error) {
                setSingleMovieData({
                    isFetched: false,
                    data: [],
                    error: error,
                })
            })
    }, [match.params.id]);

    const [relatedMovieData, setRelatedMovieData] = useState({
        isFetched: false,
        data: [],
        error: null
    })

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}/similar`, {
            params: {
                api_key: 'bb18b72f144594d22368e25f5a48f641'
            }

        })
            .then(function (res) {
                setRelatedMovieData({
                    isFetched: true,
                    data: res.data.results,
                    error: false,
                })
            })
            .catch(function (error) {
                setRelatedMovieData({
                    isFetched: true,
                    data: [],
                    error: error,
                })
            })
    }, [match.params.id]);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}/credits`, {
            params: {
                api_key: 'bb18b72f144594d22368e25f5a48f641'
            }
        })
            .then(function (response) {
                setActorsList({
                    isFetched: true,
                    data: response.data.cast,
                    error: false,
                })
            })
            .catch(function (error) {
                setActorsList({
                    isFetched: true,
                    data: [],
                    error: error,
                })
            })
            .then(function () {

            });


    }, [match.params.id])
    console.log(actorsList)
    return (
        <>
            {singleMovieData.isFetched ? (
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '50%', borderRight: '1px solid #1890ff', paddingRight: '1rem' }} className="left-sider">
                        <div className="single-movie-data">
                            <div className="movie-holder">
                                <Image
                                    width={260}
                                    src={`https://image.tmdb.org/t/p/w500/${singleMovieData.data.poster_path}`}
                                />
                                <div className="movie-info" style={{ width: '60%' }}>
                                    <h2 className="movie-title">{singleMovieData.data.original_title}</h2>
                                    <Genres>
                                        <h3>Genres:</h3>
                                        {singleMovieData.data.genres.map(item => (<p className="item-genre">{item.name}</p>))}
                                    </Genres>
                                    <p className="movie-description">{singleMovieData.data.overview}</p>
                                </div>
                            </div>
                        </div>
                        <div className="related">
                            <h2 className="related">Similar Movies</h2>
                            <div className="slider-control">
                                {/* <SlickButton itemClass="prev-btn slick-control" itemIcon={<LeftOutlined/>}/>
                            <SlickButton itemClass="prev-btn slick-control" itemIcon={<RightOutlined/>}/> */}
                            </div>
                            <Slider style={{ position: 'relative' }} {...settings}>
                                {relatedMovieData.isFetched ? (
                                    relatedMovieData.data.map((item, index) => (
                                        <div className="related-item">
                                            <Image width={200} height={300} src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" className="related-" />
                                            <h3 style={{ minHeight: 60 }}>{item.original_title}</h3>
                                            <div className="related-info-holder">
                                                <span className="vote-avarage"><span>Rating:</span>{item.vote_average}</span>
                                                <Link className="card-btn" to={`/movie/${item.id}`} style={{
                                                    padding: '5px 10px',
                                                    display: 'inline-block',
                                                    border: '1px solid #1890ff',
                                                    
                                                    color: '#1890ff'
                                                }}>
                                                    View more
                                        <ArrowRightOutlined style={{ marginLeft: 10 }} />
                                                </Link>
                                            </div>

                                        </div>
                                    ))
                                ) : (
                                    <Spin className="spinner" indicator={antIcon} />
                                )}
                            </Slider>
                        </div>
                    </div>
                    <div className="right-sider" style={{ width: '50%', paddingLeft: '1rem' }}>
                        <h2 className="actors-title">Actors</h2>
                        {actorsList.isFetched ? (
                            <Slider style={{ position: 'relative' }} {...settingss}>
                                {actorsList.data.map(actor => (
                                    <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<img alt="example" src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} />}
                                    >
                                        <Meta title={`${actor.name} as`} />
                                        <Meta title={`${actor.character}`} description={actor.known_for_department} />
                                        <Link to={`/person/${actor.id}/movie_credits`} className="actor-btn">View Movies</Link>
                                    </Card>
                                ))}
                            </Slider>
                        ) : (
                            <Spin className="spinner" indicator={antIcon} />
                        )}
                    </div>
                </div>
            ) : (
                <Spin className="spinner" indicator={antIcon} />
            )}
        </>
    )

}

const Genres = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    h3{
        font-weight: bold;
        margin: 0;
    }
    p{
        margin: 0;
    }
    .item-genre{
        margin-left: 5px;
        color: #1890ff;
    }
   `
export default SingleMovie
