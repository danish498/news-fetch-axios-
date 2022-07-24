import axios from 'axios';
import React, { useState } from 'react';
import NewsCard from './NewsCard';

const FetchNews = () => {
  const [news, setnews] = useState([]);

  const newsHandler = () => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=in&apiKey=b1a97d1ba0684502b2e3363162cef7f4'
      )
      .then((response) => {
        setnews(response.data.articles);
        console.log(response.data.articles);
      });
  };

  const content = news.map((value) => (
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

        <div className='d-flex  flex-wrap'>{content}</div>
      </div>
    </>
  );
};

export default FetchNews;
