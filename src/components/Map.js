import React, {PropTypes} from "react";
import GoogleMap from "react-google-map";
import GoogleMapLoader from "react-google-maps-loader";
import { MAP_API_KEY, CURENT_POSITION, ZOOM } from './../constants/constant';

import icon from './../image/icon.svg'

const Map = (props) => {

const marker = new props.googleMaps.Marker({ icon : icon });

  if(props.curentMarker.latLng){
    marker.setPosition(props.curentMarker.latLng);
    }

  const addMarker = (event, map) => {
    marker.setPosition(event.latLng);
    props.setLatLng(event.latLng);
  };

  return(<GoogleMap
              googleMaps={props.googleMaps}
              center={CURENT_POSITION}
              zoom={ZOOM}
              disableDefaultUI={true}
              onLoaded={(googleMaps, map) => {
                map.setMapTypeId(props.googleMaps.MapTypeId.ROADMAP);
                marker.setMap(map);
                props.googleMaps.event.addListener(map, "click", (event) => addMarker(event, map));
              }}
              />)
}

Map.propTypes = {
  googleMaps: PropTypes.object.isRequired,
}

export default GoogleMapLoader(Map, {
  libraries: ["places"],
  key: MAP_API_KEY,
});
