import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from "react-native";
import { fetchContacts } from "../utility/api";
import ContactListItem from "../components/ContactListItem";
import { fetchContactsLoading, fetchContactsSuccess, fetchContactsError } from "../store";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";

const keyExtractor = ({ phone }) => phone;

const Contacts = ({ navigation }) => {
    const { contacts, loading, error } = useSelector((state) => state);
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        if (contacts.length === 0 && !loading && !error) {
            dispatch(fetchContactsLoading());
            fetchContacts()
                .then((fetchedContacts) => {
                    dispatch(fetchContactsSuccess(fetchedContacts));
                })
                .catch((error) => {
                    dispatch(fetchContactsError(error.message));
                });
        }
    }, [dispatch, contacts.length, loading, error]);

    const filteredContacts = useMemo(() => {
        return contacts.filter(contact => 
            contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            contact.phone.includes(searchQuery)
        );
    }, [contacts, searchQuery]);

    const sortedContacts = useMemo(() => {
        return [...filteredContacts].sort((a, b) => a.name.localeCompare(b.name));
    }, [filteredContacts]);

    const renderContact = ({ item }) => {
        const { name, avatar, phone } = item;
        return (
            <ContactListItem
                name={name}
                avatar={avatar}
                phone={phone}
                onPress={() => navigation.navigate("Profile", { contact: item })}
            />
        );
    };

    return (
        <View style={styles.container}>
            <SearchBar value={searchQuery} onChangeText={setSearchQuery} />
            {loading && <ActivityIndicator color="blue" size="large" />}
            {error && <Text>{error || 'Error loading contacts...'}</Text>}
            {!loading && !error && sortedContacts.length === 0 && <Text>No contacts found</Text>}
            {!loading && !error && sortedContacts.length > 0 && (
                <FlatList 
                    data={sortedContacts} 
                    keyExtractor={keyExtractor} 
                    renderItem={renderContact} 
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        justifyContent: "center",
        flex: 1,
    },
});

export default Contacts;