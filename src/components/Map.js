import React, {PropTypes} from "react";
import GoogleMap from "react-google-map";
import GoogleMapLoader from "react-google-maps-loader";
import { MAP_API_KEY, CURENT_POSITION, ZOOM } from './../constants/constant';

import icon from './../image/icon.svg'

class Map extends React.Component {
  constructor(props) {
     super(props);
     this.state = {marker: new this.props.googleMaps.Marker({ icon : icon })};
   };

  componentWillReceiveProps(nextProps){
    this.state.marker.setPosition(
    {lat : nextProps.curentMarker.lat,
    lng : nextProps.curentMarker.lng})
  };

  addMarker(event, map){
    this.state.marker.setPosition(event.latLng);
    this.props.setLatLng(event.latLng);
  };

render(){
  return(<GoogleMap

              googleMaps={this.props.googleMaps}
              center={CURENT_POSITION}
              zoom={ZOOM}
              disableDefaultUI={true}
              onLoaded={(googleMaps, map) => {
                this.setState({ map: map })
                map.setMapTypeId(this.props.googleMaps.MapTypeId.ROADMAP);
                this.state.marker.setMap(map);
                this.props.googleMaps.event.addListener(map, "click", (event) => this.addMarker(event, map));
              }}
              />)
  }
}

Map.propTypes = {
  googleMaps: PropTypes.object.isRequired,
}

export default GoogleMapLoader(Map, {
  libraries: ["places"],
  key: MAP_API_KEY,
});
