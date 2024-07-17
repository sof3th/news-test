import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

const NewsJson = () => {
  const [data, setData] = useState(null);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    if (data) setTotalResults(data.totalResults);
  }, [data]);

  const onClick = () => {
    axios
      .get(
        `/v2/top-headlines?country=kr&apiKey=9610622fd69f4c48b1d51f37454c681b`
      )
      .then((response) => {
        setData(response.data);
      });
  };

  return (
    <div>
      <div style={{ height: '50px', width: '100%', posision: 'absolute' }}>
        <div>
          <button onClick={onClick}>불러오기</button>
        </div>
        <div>검색결과 : {totalResults}</div>
      </div>
      <hr />
      <div
        style={{
          height: '800px',
          width: '100%',
          overflow: 'auto',
          position: 'auto',
        }}
      >
        {data &&
          data.articles.map((article, index) => (
            <NewsItem item={article} index={index} />
          ))}
      </div>
    </div>
  );
};

export default NewsJson;
