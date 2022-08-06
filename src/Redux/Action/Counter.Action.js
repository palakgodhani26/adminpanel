import * as ActionTypes from '../ActionTypes'


export const incrementAction = () => (dispatch) => {
    dispatch({ type: ActionTypes.INCREMENT_COUNTER})
    
}

export const decrementAction = () => (dispatch) => {
    dispatch({type: ActionTypes.DECREMENT_COUNTER})
}