const initialState = {
    todos: JSON.parse(localStorage.getItem("todos")) || []
}

export const todoReducer = (state = initialState, action) => {

    switch(action.type){
        case "TODO_LIST":
            return action.payload

        case "SINGLE_TODO":
            return action.payload    

        default: return state;    
            
    }

}