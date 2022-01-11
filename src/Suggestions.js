import React from 'react';
import { Grid, TextField } from '@mui/material';

const Suggestions = () => {
  return (
    <Grid Container spacing={2} marginTop={4}>
      <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          label="Enter address"
          variant="outlined"
          sx={{ width: '529px' }}
        />
      </Grid>
    </Grid>
  );
};

export default Suggestions;
