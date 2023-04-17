const { createStore } = require("redux");

const BUY_EGG = 'BUY_EGG';

function buyEgg() {
    return {
        type: BUY_EGG
    }
}

const initialState = {
    numOfEggs: 100
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case BUY_EGG:
            return {
                ...state,
                numOfEggs: state.numOfEggs - 1
            }
        default: return state
    }
}

const store = createStore(reducer)
console.log('Initial State', store.getState());
store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyEgg())
store.dispatch(buyEgg())