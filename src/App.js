import { useState } from 'react';
import { Grid, Box } from '@mui/material';

import './styles.css';
import ReactSearchBox from 'react-search-box';
import PlaceFinder from './PlaceFinder';

export default function App() {
  const [searchResults, setSearchResults] = useState();

  async function onSearchChange(query) {
    if (query.length > 0) {
      let placeFinder = new PlaceFinder('6AWt7j9epEwcUx8BmOcjDGDmrFfvUV7U');
      let results = await placeFinder.getNearbyPlaces(query);
      setSearchResults(results);
      console.log(results);
    }
  }

  return (
    <div className="App">
      <Box sx={{ padding: '50px' }}>
        <Grid container>
          <Grid item xs={12}>
            <ReactSearchBox
              placeholder="Search for nearby places"
              matchedRecords={searchResults
                ?.map((result) => ({
                  key: result.id,
                  name: result?.address.municipalitySubdivision,
                  dist: result.dist,
                  value: `${result.address.municipalitySubdivision} | ${(
                    result.dist / 1000
                  ).toFixed(2)}km `,
                }))
                .sort((a, b) => a.dist - b.dist)}
              data={searchResults
                ?.map((result) => ({
                  key: result.id,
                  name: result.address.municipality,
                  dist: result.dist,
                  position: result.position,
                  value: `${result.address.municipalitySubdivision}, ${result.address.countrySecondarySubdivision}, ${result.address.countrySubdivision}`,
                }))
                .sort((a, b) => a.dist - b.dist)}
              onSelect={(place) => console.log(place)}
              autoFocus={true}
              onChange={(query) => onSearchChange(query)}
              fuseConfigs={{
                minMatchCharLength: 3,
                threshold: 2,
                distance: 1500000,
                sort: false,
              }}
              keys={['name']}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
