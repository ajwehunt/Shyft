import axios from 'axios';
var config = require('../../config');

export function getLocation() {
  return axios.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyC1Re0Gw6OIAb7Y5_Ax81XkqJ_htai7_Jo')

}

var lyftToken = config.lyftToken;


export function getNearbyDrivers(cord) {
  return axios.get('https://api.lyft.com/v1/drivers?lat='+ cord.lat.toString() +'&lng='+ cord.lng.toString(), lyftToken)

}
