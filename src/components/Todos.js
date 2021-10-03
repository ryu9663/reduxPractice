import React, { useState } from 'react'


function TodoItem({ todo, onToggle }){
    return (
        <li
            style = {{ textDecoration : todo.done ? 'line-through' : 'none'}}
            onClick = {() => onToggle(todo.id)}
        >
            {todo.text}
        </li>
    );
}
function TodoList({ todos, onToggle}){
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key = {todo.id} todo = {todo} onToggle = {onToggle} />
            ))}
        </ul>
    )
}

//컴포넌트 최적화를 위해 React.memo를 사용한다.
//TodoItem의 렌더링 결과는 메모이징되어 있다. 만약 todo나 onToggle같은 props가 변경되지 않는다면 다음 렌더링때 메모이징 된 내용을 그대로 사용한다.
//이는 UI 응답 성능을 증가시킨다.
TodoItem = React.memo(TodoItem);


TodoList = React.memo(TodoList)


function Todos ({ todos, onCreate, onToggle }) {
    const [text, setText] = useState('');
    const onChange = e => setText(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        onCreate(text);
        setText('');
    }
    return (
        <div>
            <form onSubmit = {onSubmit}>
                <input value = {text} placeholder = "할 일을 입력하세요" onChange = {onChange} />
                <button type = 'submit'>등록</button>
            </form>
            <TodoList todos = {todos} onToggle = {onToggle} />
        </div>
    )
}

export default Todos;