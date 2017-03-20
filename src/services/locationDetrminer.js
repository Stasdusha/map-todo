import geocoder from 'google-geocoder';
import { GEOCODER_API_KEY } from './../constants/constant';

const geo = geocoder({
  key: GEOCODER_API_KEY
});


const getAdress = (latLng) => {

  let promis = new Promise((resolve, reject) => {
    geo.reverseFind(latLng.lat(), latLng.lng() , (err, res) =>{
      resolve (res[0].formatted_address);
    })
  })
  return promis;
}

export default getAdress;
