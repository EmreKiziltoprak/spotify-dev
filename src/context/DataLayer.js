import { createContext, useContext, useReducer } from "react";

//CONTEXT CREATED
export const DataLayerContext = createContext()

//MAIN CONTEXT COMPONENT
export const DataLayer = ({initialState, reducer, children }) => (
<DataLayerContext.Provider value={useReducer(reducer,initialState)}>
    {children}
    </DataLayerContext.Provider>
)


export const useDataLayerValue = () => useContext(DataLayerContext) 
//USE CONTEXT RETURNS VALUE AND DISPATCH OF CONTEXT

