import { createStore } from 'redux';
//createStore는 스토어를 만들어주는 함수인데 리액트 프로젝트에서는 단 하나의 스토어만 만든다.

//리덕스에서 관리 할 상태 정의
const initialState = {
    counter : 0,
    text : '',
    list : []
};

//액션 타입 정의
//액션타입은 주로 대문자로 작성한다.
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

//액션 생성함수 정의
//액션 생성함수는 주로 camelCase를 사용한다.
function increase() {
    return {
        type : INCREASE
    };
}

const decrease = () => {
    return {
        type : DECREASE
    }
}

const ChangeText = (text) => {
    return {
        type : CHANGE_TEXT,
        text
    }
}

const addToList = (item) => {
    return {
        type : ADD_TO_LIST,
        item
    }
}

//리듀서 만들기
//위 액션 생성함수들을 통해 만들어진 객체들을 참조하여 새로운 상태를 만드는 함수를 리듀서라 한다.
//! 리듀서에서는 immuatable한 성질이 꼭 지켜져야 한다.
function reducer(state = initialState, action) {
    switch (action.type){
        case INCREASE :
            return {...state,...{counter : state.counter+1}}
        case DECREASE :
            return {...state,counter:state.counter-1}
        case CHANGE_TEXT :
            return {...state,text:action.text}
        case ADD_TO_LIST :
            return {...state,list : [...state.list,action.item]}  
    
        default : return state
    }
}
//스토어 만들기, createStore는 store를 만들어주는 함수인데 reducer가 매개변수로 들어간다.
const store = createStore(reducer)
//현재 store에 있는 상태를 조회한다.
console.log(store.getState());

//스토어 안에 들어있는 상태가 바뀔 때 마다 listener함수가 호출된다.
const listener = () => {
    const state = store.getState();
    console.log(state);
}
//구독을 해제하고 싶을땐 unsubscribe()를 호출하면 된다.
const unsubscribe = store.subscribe(listener);

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(ChangeText('안녕하세요~'));
store.dispatch(addToList({id:1,text:'와우'}));

