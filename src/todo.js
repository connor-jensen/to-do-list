const createTodo = (parentProject, title, description, dueDate, priority, notes, completed) => {
   return {
      parentProject,
      title,
      dueDate,
      completed
   }
}

export { createTodo };