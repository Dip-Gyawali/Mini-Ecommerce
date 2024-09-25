import React, { createContext, useReducer } from 'react'

export const itemsContext = createContext();

export function Itemsreducer(state,action){
    switch(action.type){
        case 'SET_ITEMS':
            return{
                items: action.payload
            }
        
        case 'CREATE_ITEMS':
            return {
                items: [action.payload,...state.items]
            }

        case 'DELETE_ITEMS':
            return {
                items: state.items.filter((ele)=> ele._id!== action.payload._id)
            }

        default:
            return state
    }
}

export default function SellerContext({children}) {
    const [state,dispatch] = useReducer(Itemsreducer,{items:null})
  return (
    <itemsContext.Provider value={{...state,dispatch}}>
       {children}
    </itemsContext.Provider>
  )
}
