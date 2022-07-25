import React from 'react';

const NewsCard = ({ value }) => {
  return (
    <>
      <div className='card m-2' style={{ width: '18rem' }}>
        {/* <img
          src={value.urlToImage}
          className='card-img-top'
          alt='Image_not_available'
        /> */}
        <div className='card-body'>
          <h5 className='card-title'> {value.title} </h5>
          <a
            href={value.link}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary'
          >
            In Details
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
