import React from 'react';
import NewsJson from './NewsJson'
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Layout />} />
        <Route>         
        </Route>
      </Routes> */}
      <NewsJson />
    </>
  );
}

export default App;
