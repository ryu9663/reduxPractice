import React from 'react';

function Counter({number,diff,onIncrease,onDecrease,onSetDiff}){
    const onChange = e => {
        onSetDiff(parseInt(e.target.value,10));
    };
    return (
        <div>
            <h1>{number}</h1>
            <div>
                <input type = "number" value = {diff} mid = "1" onChange = {onChange} />
                <button onClick = {onIncrease}>+</button>
                <button onClick = {onDecrease}>-</button>
            </div>
        </div>
    )
}
export default Counter;

//presentational components 는 리덕스 스토어에 직접 접근하지 않고 props로 필요한 값이나 함수를 받아와서 사용하는 컴포넌트이다.
//주로 UI를 선언하는것에 집중하며 필요한 값이나 함수는 props로 받아와서 사용한다.