import {SET_CURENT_TASK,
   SET_CURENT_TASK_SERVICE_TYPE,
   SET_CURENT_TASK_DESCRIPTION,
   SET_CURENT_TASK_ADITTION_TYPE} from './../constants/constant'

export default function curentTask(state = {}, action) {
  switch (action.type) {
    case SET_CURENT_TASK:
      return Object.assign({}, action.task)

    case SET_CURENT_TASK_SERVICE_TYPE:
      return Object.assign({}, state,{serviceType : action.serviceType})

    case SET_CURENT_TASK_DESCRIPTION:
      return Object.assign({} ,state,{description : action.description})

    case SET_CURENT_TASK_ADITTION_TYPE:
       return Object.assign({} ,state,{adittionType : action.adittionType})

    default:
      return state;
  }

}
