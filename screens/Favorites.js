import React from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator, SafeAreaView, Dimensions } from "react-native";
import ContactThumbnail from "../components/ContactThumbnails";
import { useSelector } from "react-redux";

const { width } = Dimensions.get('window');

const keyExtractor = ({ phone }) => phone;

const Favorites = ({ navigation }) => {
    const { contacts, loading, error } = useSelector((state) => state);

    const renderFavoriteThumbnail = ({ item }) => {
        const { avatar, name, phone } = item;
        return (
            <ContactThumbnail
                avatar={avatar}
                name={name}
                phone={phone}
                onPress={() => navigation.navigate('Profile', { contact: item })}
            />
        );
    };

    const favorites = contacts.filter(contact => contact.favorite);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.centerContent}>
                {loading && <ActivityIndicator size="large" color="#0000ff" />}
                {error && <Text style={styles.errorText}>Error: {error}</Text>}
                {!loading && !error && favorites.length === 0 && (
                    <Text style={styles.emptyStateText}>No favorites found</Text>
                )}
                {!loading && !error && favorites.length > 0 && (
                    <FlatList
                        data={favorites}
                        keyExtractor={keyExtractor}
                        numColumns={3}
                        contentContainerStyle={styles.list}
                        renderItem={renderFavoriteThumbnail}
                        columnWrapperStyle={styles.columnWrapper}
                    />
                )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    centerContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    list: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 0,
    },
    columnWrapper: {
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    emptyStateText: {
        fontSize: 18,
        color: '#666666',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    errorText: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
});

export default Favorites;
