import { BUY_CHICKEN } from "./chickenTypes"

const initialChickenState = {
    numOfChicken: 10
}

const chickenReducer = (state=initialChickenState, action) => {
    switch (action.type) {
        case BUY_CHICKEN:
            return {
                ...state,
                numOfChicken: state.numOfChicken - 1
            }
        default: return state
    }
}

export default chickenReducer