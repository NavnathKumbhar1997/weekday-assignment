import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@material-ui/core';
import { useDispatch } from 'react-redux';

const JobCard = ({ job }) => {
  const dispatch = useDispatch();

  const handleFavorite = () => {
    // Dispatch action to toggle job favorite status in Redux store
  };

  return (
    <Box sx={{display:"flex", flexDirection:"row",flexWrap:'wrap'}}>
      <Card sx={{ width: "305px", marginRight: 2 }}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {job.jbTitle}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {job.jdLink} - {job.location}
          </Typography>
          {/* <Typography style={{width:"0px"}} component="p">
            {job.jobDetailsFromCompany}
          </Typography> */}
          <Typography color="textSecondary" gutterBottom>
            Experience Required: {job.jbExp}
          </Typography>
          <Button variant="contained" color="primary">
            Apply
          </Button>
          {/* Example of a favorite button */}
          <Button variant="outlined" color="secondary" onClick={handleFavorite}>
            Favorite
          </Button>
        </CardContent>
      </Card>
      <Card sx={{ width: "305px", marginRight: 2 }}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {job.jbTitle}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {job.jdLink} - {job.location}
          </Typography>
          {/* <Typography style={{width:"0px"}} component="p">
            {job.jobDetailsFromCompany}
          </Typography> */}
          <Typography color="textSecondary" gutterBottom>
            Experience Required: {job.jbExp}
          </Typography>
          <Button variant="contained" color="primary">
            Apply
          </Button>
          {/* Example of a favorite button */}
          <Button variant="outlined" color="secondary" onClick={handleFavorite}>
            Favorite
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default JobCard;
