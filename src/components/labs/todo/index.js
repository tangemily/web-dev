import TodoList from "./todo-list.js";

$('#wd-todo').append(`
    <div class="container">
        <h1>Todo Example</h1>
        ${TodoList()}
    </div>
`);
