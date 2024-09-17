import React from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from "react-native";
import ContactThumbnail from "../components/ContactThumbnails";
import { useSelector } from "react-redux";

const keyExtractor = ({phone}) => phone;

const Favorites = ({navigation}) => {
    const {contacts, loading, error} = useSelector((state) => state);

    const renderFavoriteThumbnail = ({item}) => {
        const {avatar, name} = item;
        return (
            <ContactThumbnail
                avatar={avatar}
                name={name}
                onPress={() => navigation.navigate('Profile', { contact: item })}
            />
        );
    };

    const favorites = contacts.filter(contact => contact.favorite);

    return (
        <View style={styles.container}>
            {loading && <ActivityIndicator size="large"/>}
            {error && <Text>Error: {error}</Text>}
            {!loading && !error && favorites.length === 0 && <Text>No favorites found</Text>}
            {!loading && !error && favorites.length > 0 && (
                <FlatList
                    data={favorites}
                    keyExtractor={keyExtractor}
                    numColumns={3}
                    contentContainerStyle={styles.list}
                    renderItem={renderFavoriteThumbnail}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        flex: 1,    
    },
    list: {
        alignItems: "center",   
    },
});

export default Favorites;