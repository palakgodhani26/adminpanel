import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementAction } from '../../Redux/Action/Counter.Action';

function Counter(props) {
    const co = useSelector( state => state.counter);
    const dispatch =useDispatch();

    const handleIncrement=() => {
        dispatch(incrementAction())
    }

    const handleDecrement=() => {
        dispatch(decrementAction())
    }
    return (
        <div>
            <button onClick={()=> handleIncrement()}>+</button>
            <p>{co.count}</p>
            <button onClick={()=> handleDecrement()}>-</button>
        </div>
    );
}

export default Counter;