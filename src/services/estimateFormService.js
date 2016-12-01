import axios from 'axios';
var config = require('../../config');


var lyftToken = config.lyftToken;

export function getLyftEstimate(pickupLat, pickupLng, destLat, destLng) {
  return axios.get('https://api.lyft.com/v1/cost?start_lat='+ pickupLat.toString() +'&start_lng='+ pickupLng.toString() +'&end_lat='+ destLat.toString() +'&end_lng='+ destLng.toString(), lyftToken)
  .then(function (res){
    var lyftPlusPrice = Math.floor((res.data.cost_estimates[0].estimated_cost_cents_min + 400)/100);
    var lyftPrice = Math.floor((res.data.cost_estimates[1].estimated_cost_cents_min + 400)/100);
    return [lyftPlusPrice, lyftPrice];
  })

}
