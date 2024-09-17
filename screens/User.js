import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import ContactThumbnail from "../components/ContactThumbnails";
import colors from '../utility/colors';
import { fetchUserContact } from "../utility/api";
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../store';

const User = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadUser = async () => {
            try {
                setLoading(true);
                const userData = await fetchUserContact();
                dispatch(setUser(userData));
                setError(null);
            } catch (e) {
                setError('Error loading user data');
                console.error(e);
            } finally {
                setLoading(false);
            }
        };

        loadUser();
    }, [dispatch]);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color={colors.blue} />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.error}>{error}</Text>
            </View>
        );
    }

    if (!user) {
        return (
            <View style={styles.container}>
                <Text>No user data available</Text>
            </View>
        );
    }

    const { avatar, name, phone } = user;

    return (
        <View style={styles.container}>
            <ContactThumbnail avatar={avatar} name={name} phone={phone} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.blue,
    },
    error: {
        color: 'red',
        fontSize: 18,
    },
});

export default User;