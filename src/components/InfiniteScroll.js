import React, { useState, useEffect } from 'react';
import JobCard from '../components/JobCard';
import { Card, CardContent, Typography, Button, Box } from '@material-ui/core';


const InfiniteScroll = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            limit: 10,
            offset,
          }),
        });
        const data = await response.json();
        console.log("data",data);
        // setJobs([data])
        setJobs((prevJobs) => {
            const newJobs = Object.values(data).map((job)=> job)
            const newJobsArray = Array.isArray(newJobs) ? newJobs : [];
            const newJobss = newJobsArray.flatMap(job => Array.isArray(job) ? job : []);
            // console.log("newJb",newJb);
            return [
              ...prevJobs,
              ...newJobss.map((job) => ({
                jdUid: job.jdUid,
                jbTitle: "Test Job",
                jdLink: job.jdLink,
                jobDetailsFromCompany: job.jobDetailsFromCompany,
                maxJdSalary: job.maxJdSalary,
                minJdSalary: job.minJdSalary,
                jbExp: "2",
              })),
            ];
          });
        setOffset((prevOffset) => prevOffset + 10); // Increment offset for next fetch
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
      setIsLoading(false);
    };

    // Fetch jobs when component mounts
    fetchJobs();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to run effect only once

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight &&
        !isLoading
      ) {
        // Detect when user reaches bottom of page
        // Load more jobs if not already loading
        // fetchJobs();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading]); // Run effect whenever isLoading state changes

  return (
    <>
      {jobs.map((job, index) => (
        <Box sx={{display:"flex", flexDirection:"row",flexWrap:'wrap',mb:'10px'}}>
        <Card sx={{ width: "245"}}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {job.jbTitle}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {job.jdLink} - {job.location}
            </Typography>
            <Typography component="p">
                {job.showMore ? job.jobDetailsFromCompany : `${job.jobDetailsFromCompany.slice(0, 50)}...`}
              </Typography>
            <Typography color="textSecondary" gutterBottom> 
              Experience Required: {job.jbExp}
            </Typography>
            <Button variant="contained" color="primary">
              Apply
            </Button>
            {/* Example of a favorite button */}
            <Button variant="outlined" color="secondary">
              Favorite
            </Button>
          </CardContent>
        </Card>
        
      </Box>
      ))}
      {isLoading && <p>Loading...</p>}
    </>
  );
};

export default InfiniteScroll;
