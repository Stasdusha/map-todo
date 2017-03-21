import React from "react";

const AdditionalTasks =(props)=> {

  return (
       <div className='plumber-task'>
         <div>{props.serviceType.toUpperCase()} TASKS</div>
          <div className='plumber-task-container'>
             {props.adittionTypeArr.map((type, index)=>{
               return (
                 <div className="plumber-task-item"
                   key={index}>{type}</div>
               )
             })}
         </div>
       </div>
   );
}

export default AdditionalTasks;
