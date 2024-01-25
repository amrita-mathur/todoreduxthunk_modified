export const listTodos = (todos) => {

    return async function(dispatch){
        try{
            // const todos = JSON.parse(localStorage.getItem("todos"));
            if(todos){
                console.log("Todos in dispatch", todos)
                window.localStorage.setItem("todos", JSON.stringify(todos));
                dispatch({
                    type: "TODO_LIST",
                    payload: todos
                })
                return;
            }
            await fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((json) => {
               window.localStorage.setItem("todos", JSON.stringify(Object.values(json)));
               dispatch({
                type: "TODO_LIST",
                payload: json
               })
            })
        }
        catch(err){
            console.log(err.message);
        }
    }

}

export const fetchTodo = (id) => {
    return async function(dispatch){
        const todos = JSON.parse(localStorage.getItem("todos"));
            if(todos!== null){
                const todo = todos.filter(todo=> todo.id === id);
                dispatch({
                    type: "SINGLE_TODO",
                    payload: todo
                })
                return;
            }
        try{
            await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
                  .then((res)=> res.json())   
                  .then((json) => {
                    
                    dispatch({
                       type: "SINGLE_TODO",
                       payload: json
                    })
                  })

        }
        catch(err){
            console.log(err.message);

        }
    } 
}
