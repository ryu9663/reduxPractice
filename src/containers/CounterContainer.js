import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter'
import { increase, decrease, setDiff } from '../modules/counter';

function CounterContainer() {
    //useSelector는 리덕스 스토어의 상태를 조회하는 Hook이다.
    //state의 값은 store.getState() 함수를 호출헀을 때 나타나는 결과물과 동일하다.
    const { number, diff } = useSelector(state=>({
        number : state.counter.number,
        diff : state.counter.diff
    }));
    //useDispatch는 리덕스 스토어의 dispatch를 함수에서 사용할 수 있게 해주는 Hook이다.
    const dispatch = useDispatch();
    //각 액션들을 디스패치하는 함수들을 만든다.

    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));

    return (
        <Counter number = {number} diff = {diff} onIncrease = {onIncrease} onDecrease = {onDecrease} onSetDiff = {onSetDiff} />
    );
}

export default CounterContainer;