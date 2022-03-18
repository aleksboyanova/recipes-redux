const INITIAL_STATE = {
    dishes: []
}

const dishesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type)
    {
        case "setDishes":
            console.log('test')
            console.log(action.payload)
            return {...state, dishes: action.payload}
        default:    
            return state;
    }
}

export default dishesReducer;