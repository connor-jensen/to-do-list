import { createToDo, helloWorld } from './todo';

let testTodo = createToDo('go on a run', 'running is great for you! it releases endorphins', 'tomorrow', 'high', 'none', false);
console.log(testTodo);
/*
to-do object
   title
   description
   dueDate
   priority
   notes
   completed (boolean)

project object
   array of to-do objects

render
   render project
   render to-dos from project
   render to-do details
   change to-do / project display properties
      for example, strikethrough when completed

controller
   application logic
*/