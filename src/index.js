import { createTodo } from './todo';
import { renderer, Elements } from './render';
import { controller } from './controller';
import { createProject } from './project';


let testProject = createProject('This todo app');

let todo1 = createTodo(testProject.title, 'Add due date functionality', 'tomorrow', false);
let todo2 = createTodo(testProject.title, 'Add integration with Today / Next 7 Days', 'tomorrow', false);
let todo3 = createTodo(testProject.title, 'Make todos cross of when clicked', 'tomorrow', true);
let todo4 = createTodo(testProject.title, 'Make Projects/todos able to be deleted', 'tomorrow', false);

testProject.addTodo(todo1);
testProject.addTodo(todo2);
testProject.addTodo(todo3);
testProject.addTodo(todo4);

controller.addProjectDiv(testProject);


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