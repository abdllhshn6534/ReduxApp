import { configureStore } from "@reduxjs/toolkit";
import  themeSlice  from "./slices/theme";
import  localeSlice  from "./slices/locale";


export default configureStore({
    reducer: {
        theme: themeSlice,
        locale: localeSlice
    },
});