import { ADD_TO_SAVE, REMOVE_FROM_SAVE } from "../CONSTANT";

interface actionType{
    type:string
    payload: string
}
type itemName = string
const initialState : string[] = []
export function colorReducers(state = initialState , action : actionType){
    switch (action.type) {
        case ADD_TO_SAVE:
            return[...state,action.payload]
        case REMOVE_FROM_SAVE:
            const newState : string [] = state.filter((item:itemName)=>{
                if(item.name != action.payload){
                    return item
                }
            })
            return [...newState]
        default:
            return [...state]
    }
}