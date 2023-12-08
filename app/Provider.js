'use client'
import { createContext, useReducer } from 'react'

export const ProgramContext = createContext()
const changeProgram = (state, action) => {
    console.log('state',state)
    const piece = action.payload
    const placeholder = state 
    const index = placeholder.indexOf(piece)
    // const index = placeholder.indexOf(piece) 
    switch(action.type){    
        case 'ADD':
            if (index < 0) 
                return [...state, piece]
        case 'REMOVE':
            placeholder.splice(index,1)
            return placeholder
        case 'RESET':
            return []
        default:
            return state
    }  
}

export default function Provider({children}) {
    const [items, dispatch] = useReducer(changeProgram, [])
    
    const onProgramChange = (piece, action) => {
        dispatch({
            type: action,
            payload: piece
        })
    }
    return (
        <ProgramContext.Provider value={{items, onProgramChange}}>
            {children}
        </ProgramContext.Provider>
    )
} 