/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/*! exports provided: controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"controller\", function() { return controller; });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n// application logic\n\n\n\n\n\nconst controller = (function () {\n   let elements = new _elements__WEBPACK_IMPORTED_MODULE_0__[\"Elements\"];\n   let todayProject = Object(_project__WEBPACK_IMPORTED_MODULE_2__[\"createProject\"])(\"Today\");\n   let weekProject = Object(_project__WEBPACK_IMPORTED_MODULE_2__[\"createProject\"])(\"Next 7 Days\");\n   let projects = [todayProject, weekProject];\n   \n   const getProject = (projectTitle) => { \n      return projects.find(project => project.title === projectTitle) \n   }\n\n   const getTodo = (project, todoTitle) => {\n      return project.toDos.find(todo => todo.title === todoTitle);\n   }\n\n   const getSelectedProject = () => {\n      let selectedProjectDiv = elements.getSelectedProject();\n      let projectTitle = selectedProjectDiv.children[1].innerHTML;\n      return getProject(projectTitle);\n   }\n   \n   const selectProject = (project) => {\n      _render__WEBPACK_IMPORTED_MODULE_1__[\"renderer\"].clearTodos();\n      _render__WEBPACK_IMPORTED_MODULE_1__[\"renderer\"].selectProject(project);\n      _render__WEBPACK_IMPORTED_MODULE_1__[\"renderer\"].updateTodoHeading(project.title);\n      project.toDos.forEach(todo => {\n         addTodoDiv(todo);\n      });\n   }\n\n   const projectClickEvent = (event) => {\n      let projectDiv = event.currentTarget;\n      let projectTitle = projectDiv.children[1].innerHTML;\n      let project = getProject(projectTitle);\n      selectProject(project);\n   }\n\n   const todoClickEvent = (event) => {\n      let todoDiv = event.currentTarget;\n      todoDiv.classList.toggle('completed');\n      let todo = getTodo(getSelectedProject(), todoDiv.children[0].children[1].innerHTML);\n      todo.completed = !todo.completed;\n      console.log(todo);\n   }\n\n   const addProjectPressEnter = (event) => {\n      if (event.keyCode === 13) {\n         event.preventDefault();\n         let newProject = Object(_project__WEBPACK_IMPORTED_MODULE_2__[\"createProject\"])(event.currentTarget.value);\n         addProjectDiv(newProject);\n         event.currentTarget.value = null;\n         selectProject(newProject);\n      }\n   }\n\n   const addTodoPressEnter = (event) => {\n      if (event.keyCode === 13) {\n         event.preventDefault();\n         let currentProject = getSelectedProject();\n         let newTodo = Object(_todo__WEBPACK_IMPORTED_MODULE_3__[\"createTodo\"])(currentProject.title, event.currentTarget.value, 'no date specified', false); \n         currentProject.addTodo(newTodo);\n         event.currentTarget.value = null;\n         addTodoDiv(newTodo);\n         _render__WEBPACK_IMPORTED_MODULE_1__[\"renderer\"].updateProjectTodoCount(currentProject);\n      }\n   }\n\n   const addProjectDiv = (project) => {\n      let projectDiv = _render__WEBPACK_IMPORTED_MODULE_1__[\"renderer\"].addProject(project);\n      projectDiv.addEventListener('click', projectClickEvent);\n      projects.push(project);\n   }\n\n   const addTodoDiv = (todo) => {\n      let todoDiv = _render__WEBPACK_IMPORTED_MODULE_1__[\"renderer\"].addTodo(todo);\n      todoDiv.addEventListener('click', todoClickEvent);\n   }\n\n   let projectElements = elements.getProjects();\n   projectElements.forEach(project => {\n      project.addEventListener('click', projectClickEvent);\n   });\n\n   let todoElements = elements.getTodos();\n   todoElements.forEach(todo => {\n      todo.addEventListener('click', todoClickEvent);\n   })\n\n   \n   let addProjectInputField = elements.getAddProjectInputField();\n   addProjectInputField.addEventListener(\"keyup\", addProjectPressEnter);\n\n   let addTodoInputField = elements.getAddTodoInputField();\n   addTodoInputField.addEventListener(\"keyup\", addTodoPressEnter);\n\n   return {\n      addProjectDiv\n   }\n})();\n\n\n\n//# sourceURL=webpack:///./src/controller.js?");

/***/ }),

/***/ "./src/elements.js":
/*!*************************!*\
  !*** ./src/elements.js ***!
  \*************************/
/*! exports provided: Elements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Elements\", function() { return Elements; });\nclass Elements {\n   constructor() {}\n\n   getToday() {\n      return document.querySelector('#today');\n   }\n   getWeek() {\n      return document.querySelector('#week');\n   }\n   getProjects() {\n      return Array.from(document.querySelectorAll('.project'));\n   }\n   getProjectByName(title) {\n      return this.getProjects().find(projectDiv => projectDiv.children[1].innerHTML === title)\n   }\n   getProjectsContainer() {\n      return document.querySelector('#projects');\n   }\n   getTodosContainer() {\n      return document.querySelector('#todos');\n   }\n   getTodos() {\n      return Array.from(document.querySelectorAll('.todo'));\n   }\n   getTodoHeading() {\n      return document.querySelector('#todoHeading');\n   }\n   getAddProject() {\n      return document.querySelector('.addProject');\n   }\n   getAddProjectInputField() {\n      return document.querySelector('#addPInput');\n   }\n   getAddTodoInputField() {\n      return document.querySelector('#addTInput');\n   }\n   getAddTodo() {\n      return document.querySelector('.addTodo');\n   }\n   getSelectedProject() {\n      return document.querySelector('.selected');\n   }\n   getLineBreaks() {\n      return Array.from(document.querySelectorAll('.todoLB'));\n   }\n\n   createLineBreakDiv() {\n      let lineBreak = document.createElement('hr');\n      lineBreak.width = \"100%\";\n      lineBreak.noShade = true;\n      lineBreak.color=\"ebebeb\";\n      lineBreak.align=\"center\";\n      lineBreak.classList.add(\"todoLB\");\n      return lineBreak;\n   }\n}\n\n\n\n//# sourceURL=webpack:///./src/elements.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\n\n\n\nlet testProject = Object(_project__WEBPACK_IMPORTED_MODULE_3__[\"createProject\"])('This todo app');\n\nlet todo1 = Object(_todo__WEBPACK_IMPORTED_MODULE_0__[\"createTodo\"])(testProject.title, 'Add due date functionality', 'tomorrow', false);\nlet todo2 = Object(_todo__WEBPACK_IMPORTED_MODULE_0__[\"createTodo\"])(testProject.title, 'Add integration with Today / Next 7 Days', 'tomorrow', false);\nlet todo3 = Object(_todo__WEBPACK_IMPORTED_MODULE_0__[\"createTodo\"])(testProject.title, 'Make todos cross of when clicked', 'tomorrow', true);\nlet todo4 = Object(_todo__WEBPACK_IMPORTED_MODULE_0__[\"createTodo\"])(testProject.title, 'Make Projects/todos able to be deleted', 'tomorrow', false);\n\ntestProject.addTodo(todo1);\ntestProject.addTodo(todo2);\ntestProject.addTodo(todo3);\ntestProject.addTodo(todo4);\n\n_controller__WEBPACK_IMPORTED_MODULE_2__[\"controller\"].addProjectDiv(testProject);\n\n\n/*\nto-do object\n   title\n   description\n   dueDate\n   priority\n   notes\n   completed (boolean)\n\nproject object\n   array of to-do objects\n\nrender\n   render project\n   render to-dos from project\n   render to-do details\n   change to-do / project display properties\n      for example, strikethrough when completed\n\ncontroller\n   application logic\n*/\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: createProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createProject\", function() { return createProject; });\nconst createProject = (title) => {\n   return {\n      title,\n      toDos: [],\n      addTodo: function (todo) {\n         this.toDos.push(todo);\n      }\n   };\n};\n\n\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! exports provided: renderer, Elements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderer\", function() { return renderer; });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Elements\", function() { return _elements__WEBPACK_IMPORTED_MODULE_0__[\"Elements\"]; });\n\n/*\nrender\n   render project\n   render to-dos from project\n   render to-do details\n   change to-do / project display properties\n      for example, strikethrough when completed\n*/\n\n\nconst renderer = (function () {\n   let elements = new _elements__WEBPACK_IMPORTED_MODULE_0__[\"Elements\"];\n   \n   function selectProject(project) {\n      let projectDiv = elements.getProjectByName(project.title);\n      let currentSelection = elements.getSelectedProject();\n      currentSelection.classList.toggle('selected');\n      projectDiv.classList.toggle('selected');\n   }\n\n   function updateProjectTodoCount(project) {\n      let projectDiv = elements.getProjectByName(project.title);\n      projectDiv.children[2].innerHTML = project.toDos.length;\n   }\n\n   function updateTodoHeading(projectTitle) {\n      elements.getTodoHeading().innerHTML = projectTitle;\n   }\n\n   function createProjectDiv(project) {\n      console.log(project);\n      let projectDiv = document.createElement('div');\n      projectDiv.classList.add('project');\n      projectDiv.innerHTML = `<span class=\"dot\"></span>\n      <div class=\"pTitle\">${project.title}</div>\n      <div class=\"todoQuantity\">${project.toDos.length}</div>`\n      return projectDiv;\n   }\n\n   function createTodoDiv(todo) {\n      let todoDiv = document.createElement('div');\n      todoDiv.classList.add('todo');\n      todoDiv.innerHTML= \n            `<div class=\"todoLeft\">\n               <span class=\"todoDot\"></span>\n               <div class=\"pTitle\">${todo.title}</div>\n            </div>\n            <div class=\"todoRight\">\n              <div class=\"pType lighter\">${todo.parentProject}</div>\n               <span class=\"Dot\"></span>\n            </div>`;\n      if (todo.completed) {\n         todoDiv.classList.add('completed');\n      }\n      return todoDiv;\n   }\n\n   function addProject(project) {\n      let projectDiv = createProjectDiv(project);\n      elements.getProjectsContainer().appendChild(projectDiv);\n      return projectDiv;\n   }\n\n   function addTodo(todo) {\n      let todoDiv = createTodoDiv(todo);\n      elements.getTodosContainer().appendChild(todoDiv);\n      elements.getTodosContainer().appendChild(elements.createLineBreakDiv());\n\n      return todoDiv;\n   }\n\n   function clearTodos() {\n      elements.getTodos().forEach(element => {\n         element.parentNode.removeChild(element);\n      });\n      console.log(elements.getLineBreaks());\n      elements.getLineBreaks().forEach(element => {\n         element.parentNode.removeChild(element);\n      });\n   }\n   \n   return {\n      selectProject,\n      updateTodoHeading,\n      createProjectDiv,\n      createTodoDiv,\n      addProject,\n      addTodo,\n      clearTodos,\n      updateProjectTodoCount\n   }\n})();\n\n\n\n//# sourceURL=webpack:///./src/render.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/*! exports provided: createTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTodo\", function() { return createTodo; });\nconst createTodo = (parentProject, title, dueDate, completed) => {\n   return {\n      parentProject,\n      title,\n      dueDate,\n      completed\n   }\n}\n\n\n\n//# sourceURL=webpack:///./src/todo.js?");

/***/ })

/******/ });