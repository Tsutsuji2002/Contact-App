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
        addContact: (state, action) => {
            state.contacts.push(action.payload);
        },
        updateContact: (state, action) => {
            const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
            if (index !== -1) {
              state.contacts[index] = action.payload;
            }
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        },
    }
});

export const { fetchContactsLoading, fetchContactsSuccess, fetchContactsError, setUser, addContact, updateContact, deleteContact } = contactsSlice.actions;

const Store = configureStore({
    reducer: contactsSlice.reducer,
});

export default Store;