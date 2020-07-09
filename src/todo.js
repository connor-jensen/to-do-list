const createTodo = (parentProject, title, dueDate, completed) => {
   return {
      parentProject,
      title,
      dueDate,
      completed
   }
}

export { createTodo };