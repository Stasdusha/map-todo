import React from "react";
import { connect } from 'react-redux'
import ResultTask from './../components/editorComponents/ResultTask';
import LocationTask from './../components/editorComponents/LocationTask';
import ServiceType from './../components/editorComponents/ServiceType';
import AdditionalTasks from './../components/editorComponents/AdditionalTasks';
import TaskDescription from './../components/editorComponents/TaskDescription';
import Line from './../components/editorComponents/Line';
import  structs  from './../structs/structs';
import fireWorker from './../services/firebaseWorker';
import { SET_CURENT_TASK,
        CREATE_TASK,
        EDIT_TASK,
        SET_CURENT_TASK_SERVICE_TYPE,
        SET_CURENT_TASK_DESCRIPTION,
        SET_CURENT_TASK_ADITTION_TYPE } from './../constants/constant';


const EditTaskComponent =(props)=> {

  const createNewTask =()=>{
    if(!props.curentTask.id){
        const newTask = props.curentTask;
        newTask.id = fireWorker.getId();
        newTask.marker = props.curentMarker;
        newTask.date = new Date().toLocaleString();
        fireWorker.createOrEditTask(newTask).then(props.createTask(newTask));
    }else{
        fireWorker.createOrEditTask(props.curentTask).then(props.editTask(props.curentTask));
    }
    props.setTask({});
  };

  const setServiceType = (type) =>{
    props.setServiceType(type);
    props.setAdittionType(structs.adittionType[type][0]);
  };

  const changeDescription =(desc)=>{
    props.setDescription(desc);
  };

  const setAdittionType =(adittionType)=>{
    props.setAdittionType(adittionType);
  };

  return (
       <div className="task-editor">
         <ResultTask createTask={ createNewTask } task={ props.curentTask }
           adress={ props.curentMarker.adress }/>
         <LocationTask adress={ props.curentMarker.adress }/>
         <Line/>
         <ServiceType typeArr={ structs.typeArr } setServiceType={ setServiceType }
            serviceType={ props.curentTask.serviceType }/>
         <Line/>
         <AdditionalTasks adittionTypeArr={ structs.adittionType[props.curentTask.serviceType] }
            setAdittionType={ setAdittionType }
            serviceType={ props.curentTask.serviceType }
            adittionType={ props.curentTask.adittionType }/>
         <Line/>
         <TaskDescription changeDescription={ changeDescription }/>
         <Line/>
       </div>
   );
}

export default connect(state => ({
    curentMarker: state.curentMarker,
    curentTask: state.curentTask,
    tasks: state.tasks
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
    editTask: (task) => {
      dispatch({ type: EDIT_TASK, task: task})
    }
  })
)(EditTaskComponent);
