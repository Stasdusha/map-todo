import * as firebase from 'firebase';

var config = {
  apiKey: " AIzaSyCIKkobRAMwv82wlBVTwRrb6-iKtWiVjzQ",
  authDomain: "map-todo.firebaseapp.com",
  databaseURL: "https://map-todo.firebaseio.com/",
  storageBucket: "map-todo.appspot.com"
};

firebase.initializeApp(config);
const db = firebase.database();

const fireWorker = {

  createOrEditTask : (task)=>{
    task.marker = null;
    return db.ref('tasks/'+task.id).set({
      task: task
    });
  },

  deleteTask : (task)=>{
    return db.ref('tasks/'+task.id).set(null);
  },

  getTasks : ()=>{
    return db.ref('tasks').once("value");
  }
}


export default fireWorker;
