import React from "react";

const AdditionalTasks =(props)=> {

  return (
       <div className='additional-type'>
         <div className='title-block' >{props.serviceType.toUpperCase()} TASKS</div>
          <div className='additional-type__container'>
             {props.adittionTypeArr.map((type, index)=>{
               return (
                 <div className={"additional-type__item" + (type === props.adittionType ? ' active' : '')}
                   onClick={()=> props.setAdittionType(type) } key={index}>{type}</div>
               )
             })}
         </div>
       </div>
   );
}

export default AdditionalTasks;
