import React, { useState } from 'react';
import { TextField, Button, FormControlLabel, Checkbox, Typography } from '@material-ui/core';

const Filter = () => {
  const [minExperience, setMinExperience] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [remote, setRemote] = useState(false); // Checkbox state
  // Add state for other filters (tech stack, role, min base pay) as needed

  const handleFilter = () => {
    // Implement filter logic here
    // You can dispatch actions to update Redux store with filter values
  };

  return (
    <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>
      <TextField
        label="Min Experience"
        value={minExperience}
        onChange={(e) => setMinExperience(e.target.value)}
        fullWidth
        style={{ marginBottom: '10px' }}
      />
      <TextField
        label="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        fullWidth
        style={{ marginBottom: '10px' }}
      />
      <TextField
        label="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        fullWidth
        style={{ marginBottom: '10px' }}
      />
      <FormControlLabel
        control={<Checkbox checked={remote} onChange={(e) => setRemote(e.target.checked)} />}
        label="Remote"
        style={{ marginBottom: '10px' }}
      />
      {/* Add checkboxes for other filters */}
      <Button variant="contained" color="primary" onClick={handleFilter}>
        Apply Filters
      </Button>
    </div>
  );
};

export default Filter;
