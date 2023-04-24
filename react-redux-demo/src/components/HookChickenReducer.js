import React from 'react'
import { buyChicken } from '../redux/chicken/chickenActions'
import { useDispatch, useSelector } from 'react-redux'

const HookChickenReducer = () => {
    const numOfChicken = useSelector(state => state.chicken.numOfChicken)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Num of Hook Chicken - {numOfChicken}</h2>
            <button onClick={() => dispatch(buyChicken())}>Buy Hook Chicken</button>
        </div>
    )
}

export default HookChickenReducer