import React from 'react';
import Filter from './components/Filter';
import InfiniteScroll from './components/InfiniteScroll';
import { Box } from '@material-ui/core';

const App = () => {
  return (
    <div>
      <Filter />
      <Box sx={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around',mb:'10px'}}>
      <InfiniteScroll />
      </Box>
    </div>
  );
};

export default App;
