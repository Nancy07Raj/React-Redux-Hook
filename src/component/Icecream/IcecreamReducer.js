const initialState = {
    numofIce : 20
}

const IceReducer = (state = initialState,action) =>
{
    switch(action.type){
        case 'Buy_Ice': return {
            ...state,
            numofIce : state.numofIce - 1
        }
        default : return state
    }
}

export default IceReducer