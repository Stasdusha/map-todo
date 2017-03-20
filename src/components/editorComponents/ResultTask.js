import React from "react";

const ResultTask =(props)=> {

console.log(props);

const description = props.task.description;

  return (
       <div className='result-task'>
         <div>NEW TASK</div>
         <div>{ description }</div>
         <button onClick={ props.createTask }>CREATE</button>
       </div>
   );
}
ResultTask.prototype.shouldComponentUpdate = (nextProps, nextState) => {
  console.log(nextProps);
  return true;
}

export default ResultTask;
