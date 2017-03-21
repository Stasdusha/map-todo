import React from 'react';
import { connect } from 'react-redux'

import Map from './../components/Map';
import Header from './../components/Header';
import TaskList from './../components/TaskList';
import EditTaskComponent from './../components/EditTaskComponent';
import { SET_CURENT_MARKER } from './../constants/constant';
import getAdress from './../services/locationDetrminer';

 const App =(props)=> {


   const setLatLng =(latLng)=>{
     getAdress(latLng)
     .then((adress)=>{
        props.setMarker({
          latLng : latLng,
          adress : adress
        })}
    )
  };

  return (
    <div className='app-container'>
      <Header/>
      <div className='map-container'>
          <Map curentMarker={ props.curentMarker } setLatLng={setLatLng}/>
          <TaskList/>
          {props.canEditTask ? <EditTaskComponent/> : ''}
      </div>
      </div>
  );
}


export default connect(state => ({
    curentMarker: state.curentMarker,
    curentTask: state.curentTask,
    canEditTask: state.curentTask.active
    }),
    dispatch => ({
    setMarker: (marker) => {
      dispatch({ type: SET_CURENT_MARKER, marker: marker })
    }
  })
)(App);
