export const reducer = (state, action) => {
    switch (action.type) {
        case "GET_DENTISTS":
            return { ...state, dentists: action.payload };
        case "ADD_FAV":
            //console.log("Adding favorite:", action.payload);
            return { ...state, favs: [ ...state.favs, action.payload ] };
        case "REMOVE_FAV":
            //console.log("Removing favorite:", action.payload);
            const filteredFavs = state.favs.filter(
                (fav) => fav.id !== action.payload.id
            );
            return { ...state, favs: filteredFavs };
        case "TOGGLE_THEME":
            return { ...state, theme: !state.theme };
        default:
            return state;
    }
};