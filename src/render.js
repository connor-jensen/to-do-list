/*
render
   render project
   render to-dos from project
   render to-do details
   change to-do / project display properties
      for example, strikethrough when completed
*/
import { Elements } from './elements';

const renderer = (function () {
   let elements = new Elements;
   
   function selectProject(project) {
      let projectDiv = elements.getProjectByName(project.title);
      let currentSelection = elements.getSelectedProject();
      currentSelection.classList.toggle('selected');
      projectDiv.classList.toggle('selected');
   }

   function updateTodoHeading(projectTitle) {
      elements.getTodoHeading().innerHTML = projectTitle;
   }

   function createProjectDiv(project) {
      console.log(project);
      let projectDiv = document.createElement('div');
      projectDiv.classList.add('project');
      projectDiv.innerHTML = `<span class="dot"></span>
      <div class="pTitle">${project.title}</div>
      <div class="todoQuantity">${project.toDos.length}</div>`
      return projectDiv;
   }

   function createTodoDiv(todo) {
      let todoDiv = document.createElement('div');
      todoDiv.classList.add('todo');
      todoDiv.innerHTML= 
            `<div class="todoLeft">
               <span class="todoDot"></span>
               <div class="pTitle">${todo.title}</div>
            </div>
            <div class="todoRight">
              <div class="pType lighter">${todo.parentProject}</div>
               <span class="Dot"></span>
            </div>`;
      return todoDiv;
   }

   function addProject(project) {
      let projectDiv = createProjectDiv(project);
      elements.getProjectsContainer().appendChild(projectDiv);
      return projectDiv;
   }

   function addTodo(todo) {
      let todoDiv = createTodoDiv(todo);
      elements.getTodosContainer().appendChild(todoDiv);
      elements.getTodosContainer().appendChild(elements.createLineBreakDiv());

      return todoDiv;
   }

   function clearTodos() {
      elements.getTodos().forEach(element => {
         element.parentNode.removeChild(element);
      });
      console.log(elements.getLineBreaks());
      elements.getLineBreaks().forEach(element => {
         element.parentNode.removeChild(element);
      });
   }
   
   return {
      selectProject,
      updateTodoHeading,
      createProjectDiv,
      createTodoDiv,
      addProject,
      addTodo,
      clearTodos
   }
})();

export { renderer, Elements };