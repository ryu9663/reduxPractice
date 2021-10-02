import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

//현재까지 counter,todos 두개의 리듀서 모듈을 만들었기 때문에 다수의 리듀서를 한 리듀서로 합쳐서 사용한다.
//리듀서를 합치는 작업은 combineReducers라는 함수를 사용한다.



const rootReducer = combineReducers({
    counter,
    todos
});

export default rootReducer;

//Now we combined reducers to one. then let's make store 
//The operation of creating the redux store will be done in 'src/index.js'