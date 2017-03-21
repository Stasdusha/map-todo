import React from "react";
import NewTask from "./NewTask";
import Task from "./Task";
import { connect } from 'react-redux';
import { SET_CURENT_TASK , SET_CURENT_MARKER} from './../constants/constant';

const TaskList =(props)=> {

const setCurentTask =()=>{
  const activeTask = {
    active : true,
    serviceType : 'Electrican',
    adittionType : 'Screw in a light bulb'
    };
  props.setTask(activeTask);
}

  return (
       <div className='task-list'>
         { props.curentMarker.latLng ? <NewTask setCurentTask={setCurentTask}/> :"" }
         { props.tasks.map((task, index)=>{
           return(
           <Task key={index} task={task} setMarker={props.setMarker} editTask={ props.setTask }/>
           )})}
       </div>
   );
}


export default connect(state => ({
    curentMarker: state.curentMarker,
    curentTask: state.curentTask,
    tasks  : state.tasks
  }),
    dispatch => ({
    setTask: (task) => {
      dispatch({ type: SET_CURENT_TASK, task: task })
    },
    setMarker: (marker) => {
      dispatch({ type: SET_CURENT_MARKER, marker: marker })
    }
  })
)(TaskList);
