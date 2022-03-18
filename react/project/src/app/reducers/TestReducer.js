const INITIAL_STATE = {
    test: 'DA'
}

const testReducer = (state = INITIAL_STATE, action) => {
    switch(action.type)
    {
        case "TestingState":
            return {...state, test: action.payload}
        default:    
            return state;
    }
}

export default testReducer;