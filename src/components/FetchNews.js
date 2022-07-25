import axios from 'axios';
import React, { useState } from 'react';
import NewsCard from './NewsCard';

const FetchNews = () => {
  const [news, setnews] = useState([]);

  const newsHandler = async () => {
    try {
      const res = await axios.get(
        'https://google-news1.p.rapidapi.com/topic-headlines',
        {
          params: { topic: 'WORLD', country: 'IN', lang: 'en', limit: '50' },
          headers: {
            'X-RapidAPI-Key':
              'd4f71de013msha1487af2e6c6892p139ac6jsn0de3d270c434',
            'X-RapidAPI-Host': 'google-news1.p.rapidapi.com',
          },
        }
      );
      setnews(res.data.articles);
      console.log(res.data);
      return res.data.articles;
    } catch (error) {
      console.log(error);
    }
  };

  let content = news.map((value) => (
    <NewsCard value={value} key={Math.random()} />
  ));

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <button
              type='button'
              className='btn btn-success'
              onClick={newsHandler}
            >
              Today's News
            </button>
          </div>
        </div>

        <div className='d-flex  flex-wrap'> {content} </div>
      </div>
    </>
  );
};

export default FetchNews;
