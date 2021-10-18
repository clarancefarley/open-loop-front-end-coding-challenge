import { createContext, useReducer } from 'react';

const AppReducer = (state, action) => {
    switch(action.type) {
        case "ADD_USER":
            return {
                ...state,
                users: [...state.users, action.payload],
            }
        default:
            return state;
    }
}

const initialState = {
    users: [
        {
            id: 1254,
            firstname: "Clarance",
            lastname: "Farley",
            email: "clarance@clfa.com",
            note: `I'm loving this so far!`,
        },
        {
            id: 1754,
            firstname: "Edwin",
            lastname: "Isang",
            email: "edwinisang@amex.com",
            note: `Chief this look amazing sha!`,
        },
        {
            id: 1354,
            firstname: "Juju",
            lastname: "King",
            email: "juju@suppermd.com",
            note: `Okay cool!`,
        },
    ],
}

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    return (
        <AppContext.Provider
            value={{
                users: state.users,
                dispatch,
            }}
        >
            { props.children }
        </AppContext.Provider>
    )
}