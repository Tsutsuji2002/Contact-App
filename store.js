import { createSlice, configureStore } from "@reduxjs/toolkit";
import { fetchContacts } from "./utility/api";

const contactsSlide = createSlice({
    name: 'counter',
    initialState: {
        contacts: [],
        loading: false,
        error: false,
    },
    reducers: {
        fetchContactsLoading: (state, action) =>
        {
            state.loading = true;
            state.loading = false;
        },
        fetchContactsSuccess: (state, action) =>
        {
            state.contacts = action.payload;
            state.loading = true;
            state.loading = false;
        },
        fetchContactsError: (state, action) =>
        {
            return ({
                ...state,
                loading: false,
                error: true,
            });
        },
    }
})

export const {fetchContactsLoading, fetchContactsSuccess, fetchContactsError} = contactsSlide.actions;
export default Store = configureStore({
    reducer: contactsSlide.reducer,
})