//declare action type
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

//declare action function
let nextId = 1;//     todo데이터에서 사용할 고유 id
export const addTodo = text => ({
    type : ADD_TODO,
    todo : {
        id:nextId++,
        text
    }
});
export const toggleTodo = id => ({
    type : TOGGLE_TODO,
    id
})

//declare default
//default of reducer don't need to be object type
//it can be array, primitive type
const initialState = [
    /* 
    we'll put the following object in this array
    { id : 1, text : '예시', done : false }
    */
]

export default function todos(state= initialState,action){
    switch (action.type){
        case ADD_TODO :
            return [...state,action.todo]
        case TOGGLE_TODO : 
            return state.map(todo=>todo.id === action.id 
                ? {...todo,done:!todo.done}
                :todo   
            );
        default : return state;
    }
}