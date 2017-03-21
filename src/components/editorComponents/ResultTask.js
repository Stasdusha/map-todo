import React from "react";

const ResultTask =(props)=> {


  return (
       <div className='result-task'>
         <div className='title-block'>NEW TASK</div>
         <div className='result-info' >I need a <b>
           { props.task.serviceType }</b> to <b>
           { props.task.adittionType }</b>
         { props.task.description ? ', ' : ''}
         <b>{ props.task.description }</b>. </div>
        <div>My adress is { props.adress }</div>
        <button className="button-blue" onClick={ props.createTask }>CREATE TASK</button>
       </div>
   );
}
ResultTask.prototype.shouldComponentUpdate = (nextProps, nextState) => {
  console.log(nextProps);
  return true;
}

export default ResultTask;
