class Elements {
   constructor() {}

   getToday() {
      return document.querySelector('#today');
   }
   getWeek() {
      return document.querySelector('#week');
   }
   getProjects() {
      return Array.from(document.querySelectorAll('.project'));
   }
   getProjectByName(title) {
      return this.getProjects().find(projectDiv => projectDiv.children[1].innerHTML === title)
   }
   getProjectsContainer() {
      return document.querySelector('#projects');
   }
   getTodosContainer() {
      return document.querySelector('#todos');
   }
   getTodos() {
      return Array.from(document.querySelectorAll('.todo'));
   }
   getTodoHeading() {
      return document.querySelector('#todoHeading');
   }
   getAddProject() {
      return document.querySelector('.addProject');
   }
   getAddProjectInputField() {
      return document.querySelector('#addPInput');
   }
   getAddTodoInputField() {
      return document.querySelector('#addTInput');
   }
   getAddTodo() {
      return document.querySelector('.addTodo');
   }
   getSelectedProject() {
      return document.querySelector('.selected');
   }
   getLineBreaks() {
      return Array.from(document.querySelectorAll('.todoLB'));
   }

   createLineBreakDiv() {
      let lineBreak = document.createElement('hr');
      lineBreak.width = "100%";
      lineBreak.noShade = true;
      lineBreak.color="ebebeb";
      lineBreak.align="center";
      lineBreak.classList.add("todoLB");
      return lineBreak;
   }
}

export { Elements };