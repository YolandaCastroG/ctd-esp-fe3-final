import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { reducer } from "../Reducers/Reducer";

const DentistStates = createContext();
const lcsFavs = JSON.parse(localStorage.getItem("favs")) || [];
const lcsTheme = JSON.parse(localStorage.getItem("theme")) || false;

const initialState = {
    dentists: [],
    favs: lcsFavs,
    theme: lcsTheme,
};

const Context = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const url = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        axios(url).then((res) => {
            dispatch({ type: "GET_DENTISTS", payload: res.data });
        })
        .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        localStorage.setItem("favs", JSON.stringify(state.favs));
    }, [state.favs]);

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(state.theme));
        document.body.classList.toggle("dark", state.theme);
    }, [state.theme]);

    const contextValue = useMemo(() => ({ state, dispatch }), [state]);

    return (
        <DentistStates.Provider value={contextValue} >
            {children}
        </DentistStates.Provider>
    );
};
export default Context;

export const useDentistStates = () => {
    return useContext(DentistStates);
};