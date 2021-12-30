
const initialState = {
    numofcake : 10
}


const cakeReducer = (state = initialState,action) => {
    switch(action.type)
    {
        case 'Buy_Cake': return {
            ...state,
            numofcake : state.numofcake -1
        }
        default: return state
    }
        }

export default cakeReducer;