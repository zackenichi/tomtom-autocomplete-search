import axios from 'axios';

export default class PlaceFinder {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  // async getNearbyPlaces(query, lat, long, limit = 5, radius = 10000) {
  //   let baseUrl = "https://api.tomtom.com/search/2/poiSearch";
  //   let queryString = `limit=${limit}&lat=${lat}&lon=${long}&radius=${radius}&key=${this.apiKey}`;
  //   let response = await axios.get(`${baseUrl}/${query}.json?${queryString}`);
  //   return response.data.results;
  // }
  async getNearbyPlaces(
    query,
    language = 'en-AU',
    country = 'AU'
    // entity = 'Country, CountrySubdivision, CountrySecondarySubdivision ,CountryTertiarySubdivision, Municipality, MunicipalitySubdivision, Neighbourhood, PostalCodeArea'
  ) {
    // lat=25.2744&lon=133.7751&language=en-AU&extendedPostalCodesFor=Addr&view=Unified&relatedPois=off&key=*****
    let baseUrl = 'https://api.tomtom.com/search/2/nearbySearch/';
    // let queryString = `&limit=${limit}&lat=${lat}&lon=${long}&raduis=${radius}&countrySet=${country}&key=${this.apiKey}&idxSet=Geo&entityTypeSet=${entity}`;
    let queryString = `lat=25.2744&lon=133.7751&language=${language}&extendedPostalCodesFor=Addr&view=Unified&relatedPois=off&key=${this.apiKey}&&countrySet=${country}`;
    let response = await axios.get(`${baseUrl}/${query}.json?${queryString}`);
    return response.data.results;
  }
}
