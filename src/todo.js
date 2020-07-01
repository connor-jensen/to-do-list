const createToDo = (title, description, dueDate, priority, notes, completed) => {
   return {
      title,
      description,
      dueDate,
      priority,
      notes,
      completed
   }
}

export { createToDo };