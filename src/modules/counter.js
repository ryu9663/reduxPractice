//액션 타입 만들기
//Ducks 패턴을 따를땐 액션의 이름에 접두사를 넣는다. 이렇게 하면 다른 모듈과 액션이름이 중복되는것을 방지한다.
const SET_DIFF = 'counter/SETDIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//액션 생성함수 만들기. export키워드를 사용해서 내보내주세요.
export const setDiff = diff => ({ type : SET_DIFF,diff });
export const increase = () => ({ type : INCREASE });
export const decrease = () => ({ type : DECREASE });

//default state
const initialState = {
    number : 0,
    diff : 1
};

//declare reducer with 'export default'
export default function counter(state = initialState,action) {
    switch (action.type){
        case SET_DIFF :
            return {...state,diff : action.diff};
        case INCREASE :
            return {...state,number : state.number+state.diff};
        case DECREASE :
            return {...state,number : state.number-state.diff};
        default : return state;
    };
    
}