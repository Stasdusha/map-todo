import React from "react";
import { connect } from 'react-redux'
import ResultTask from './editorComponents/ResultTask';
import LocationTask from './editorComponents/LocationTask';
import ServiceType from './editorComponents/ServiceType';
import AdditionalTasks from './editorComponents/AdditionalTasks';
import TaskDescription from './editorComponents/TaskDescription';
import Line from './editorComponents/Line';
import  structs  from './../structs/structs'
import { SET_CURENT_TASK,
        CREATE_TASK,
        SET_CURENT_TASK_SERVICE_TYPE,
        SET_CURENT_TASK_DESCRIPTION,
        SET_CURENT_TASK_ADITTION_TYPE } from './../constants/constant';


const EditTaskComponent =(props)=> {

  const createNewTask =()=>{
    const newTask = props.curentTask;
    newTask.marcer = props.curentMarker;
    props.createTask(newTask);
  };

  const setServiceType = (type) =>{
    props.setServiceType(type);
  };

  const changeDescription =(desc)=>{
    props.setDescription(desc);
  };

  const setAdittionType =(adittionType)=>{
    props.setAdittionType(adittionType);
  };

  return (
       <div className="task-editor">
         <ResultTask createTask={ createNewTask } task={ props.curentTask } />
         <LocationTask adress={ props.curentMarker.adress }/>
         <Line/>
         <ServiceType typeArr={ structs.typeArr } setServiceType={ setServiceType }
            serviceType={ props.curentTask.serviceType }/>
         <Line/>
         <AdditionalTasks adittionTypeArr={ structs.adittionType[props.curentTask.serviceType] }
            setAdittionType={ setAdittionType }
            serviceType={ props.curentTask.serviceType }
            adittionType = {props.curentTask.adittionType}/>
         <Line/>
         <TaskDescription changeDescription={ changeDescription }/>
         <Line/>
       </div>
   );
}

export default connect(state => ({
    curentMarker: state.curentMarker,
    curentTask: state.curentTask,
  }),
    dispatch => ({
    setTask: (task) => {
      dispatch({ type: SET_CURENT_TASK, task: task })
    },
    createTask: (task) => {
      dispatch({ type: CREATE_TASK, task: task })
    },
    setServiceType: (serviceType) => {
      dispatch({ type: SET_CURENT_TASK_SERVICE_TYPE, serviceType: serviceType })
    },
    setDescription: (desc) => {
      dispatch({ type: SET_CURENT_TASK_DESCRIPTION, description: desc })
    },
    setAdittionType: (adittionType) => {
      dispatch({ type: SET_CURENT_TASK_ADITTION_TYPE, adittionType: adittionType })
    },
  })
)(EditTaskComponent);
