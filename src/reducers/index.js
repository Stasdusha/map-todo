import { combineReducers } from 'redux'
import curentMarker from './curentMarker'
import curentTask from './curentTask'
import tasks from './tasks'

export default combineReducers({
  curentMarker,
  curentTask,
  tasks
})
