const createProject = (title) => {
   return {
      title,
      toDos: [],
      addTodo: function (todo) {
         this.toDos.push(todo);
      }
   };
};

export { createProject };