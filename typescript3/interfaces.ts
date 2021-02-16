
// function showTodo(todo: {title: string, text: string}):void {
//     console.log(todo.title + ": " + todo.text);
// };

let myTodo = {
    title: "trash",
    text: "take out trash"
}

// showTodo(myTodo)

interface Todo{
    title: string;
    text: string;
}

function showTodo(todo: Todo):void {
    console.log(todo.title + ": " + todo.text);
};


showTodo(myTodo)