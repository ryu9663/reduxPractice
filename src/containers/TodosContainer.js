import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';

function TodosContainer() {
    //useSelector에서 꼭 객체를 반환할 필요는 없다.
    //한 종류의 값만 조회하고 싶으면 그냥 원하는 값만 바로 반환하면 됨.
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const onCreate = text => dispatch(addTodo(text));
    // 최적화를 위해 useCallback 사용
    //함수를 memoization하기 위해 사용되는 hook 함수입니다. 매개변수는 useEffect와 같다.
    //해당 컴포넌트가 렌더링될때 함수(첫매개변수)가 바뀌지 않는 한 기존 함수를 계속해서 반환한다.-> 불필요한 렌더링시간을 단축한다.
    const onToggle = useCallback(id => dispatch(toggleTodo(id)),[dispatch])
    
    return <Todos todos = {todos} onCreate = {onCreate} onToggle = {onToggle} />;
}

export default TodosContainer;