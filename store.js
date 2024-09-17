import { createSlice, configureStore } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        loading: false,
        error: null,
        user: null,
    },
    reducers: {
        fetchContactsLoading: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchContactsSuccess: (state, action) => {
            state.contacts = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchContactsError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
    }
});

export const { fetchContactsLoading, fetchContactsSuccess, fetchContactsError, setUser } = contactsSlice.actions;

const Store = configureStore({
    reducer: contactsSlice.reducer,
});

export default Store;