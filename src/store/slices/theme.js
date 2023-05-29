import { createSlice } from "@reduxjs/toolkit";



export const themeSlice = createSlice({
    name: "theme",
    initialState: {/*Statemizin içinde ne olacağını belirlediğimiz kısımdır*/
        darkMode: false
    },
    reducers: {
        setDarkMode: (state, action) => {
            state.darkMode = action.payload;
        }
    }
});
 
export const { setDarkMode } = themeSlice.actions
export default  themeSlice.reducer