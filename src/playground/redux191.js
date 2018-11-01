import { createStore } from 'redux';

const increment = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrement = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

class IncrementCount {
    type = 'INCREMENT';

    constructor(incrementBy = 1) {
        this.incrementBy = incrementBy;
    }
}

const countReducer = (state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

const subscription = store.subscribe(
    () => {
        console.log('store getState', store.getState());
    }
)

store.dispatch(increment({ incrementBy: 5 }));
store.dispatch(increment());

store.dispatch(resetCount());


store.dispatch(decrement());

store.dispatch(decrement({ decrementBy: 3 }));

store.dispatch(setCount({count: 191}));