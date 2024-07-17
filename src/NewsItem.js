import React from 'react';

const NewsItem = ({ item, index }) => {
  const { author, title, description } = item;

  return (
    <div>
      <table border={1}>
        <tbody>
          <tr>
            <td width="100">No.</td>
            <td width="1000">{index + 1}</td>
          </tr>
          <tr>
            <td>작성자</td>
            <td>{author}</td>
          </tr>
          <tr>
            <td>제목</td>
            <td>{title}</td>
          </tr>
          <tr>
            <td>내용</td>
            <td>{description}</td>
          </tr>
        </tbody>
      </table>
      <br />
    </div>
  );
};

export default NewsItem;
