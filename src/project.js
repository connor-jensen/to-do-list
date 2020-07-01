const createProject = (title) => {
   return {
      title,
      toDos: [],
      addToDo: function (todo) {
         this.toDos.push(todo);
      }
   };
};

export { createProject };