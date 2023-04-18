const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

const BUY_EGG = 'BUY_EGG';
const BUY_CHICKEN = 'BUY_CHICKEN'

function buyEgg() {
    return {
        type: BUY_EGG
    }
}

function buyChicken() {
    return {
        type: BUY_CHICKEN
    }
}

const initialEggState = {
    numOfEggs: 100
}

const initialChickenState = {
    numOfChicken: 10
}

const eggReducer = (state=initialEggState, action) => {
    switch (action.type) {
        case BUY_EGG:
            return {
                ...state,
                numOfEggs: state.numOfEggs - 1
            }
        default: return state
    }
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

const rootReducer = combineReducers({
    egg: eggReducer,
    chicken: chickenReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial State', store.getState());
store.subscribe(() => {})
store.dispatch(buyEgg())
store.dispatch(buyEgg())
store.dispatch(buyChicken())