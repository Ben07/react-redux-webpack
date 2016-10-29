const INCREMENT = 'seed/home/INCREMENT';

const initialState = {
    count: 0
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            }
        default:
            return state;
    }
}

export function increment() {
    return {
        type: INCREMENT
    };
}

export function incrementAsync() {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch(increment());
        }, 3000);
    }
}