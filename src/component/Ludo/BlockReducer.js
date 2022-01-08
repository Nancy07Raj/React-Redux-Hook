const initialValue = {
    red : [1,2,3,4,5],
    blue : [1,2,3,4,5],
    green : [1,2,3,4,5],
    hold : []
}

const BlockReducer =(state=initialValue,action)=>{
    switch(action.type){
        case 'RED_Push' :
            return{
                ...state,
                red: action.payload.color,
                hold: action.payload.stack
            }
        case 'RED_Pop':
            return{
                ...state,
                red: action.payload.color,
                hold: action.payload.stack
            }
        case 'BLUE_Push' :
                return{
                    ...state,
                    blue: action.payload.color,
                    hold: action.payload.stack
                }
        case 'BLUE_Pop':
                return{
                    ...state,
                    blue: action.payload.color,
                    hold: action.payload.stack
                }
        case 'GREEN_Push' :
                    return{
                        ...state,
                        green: action.payload.color,
                        hold: action.payload.stack
                    }
        case 'GREEN_Pop':
                    return{
                        ...state,
                        green: action.payload.color,
                        hold: action.payload.stack
                    }
                default: return state;
    }

}
export default BlockReducer;