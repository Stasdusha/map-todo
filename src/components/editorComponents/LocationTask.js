import React from "react";

const LocationTask =(props)=> {

  return (
       <div className='location-task'>
         <div className='title-block'>LOCATION</div>
         <div>{props.adress}</div>
       </div>
   );
}

export default LocationTask;
