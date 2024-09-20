import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Linking } from "react-native";
import ContactThumbnail from "../components/ContactThumbnails";
import DetailListItem from "../components/DetailListItem";
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../utility/colors';

const Profile = ({ route, navigation }) => {
    const { contact } = route.params;
    const { avatar, name, email, phone, cell } = contact;

    const handleEditPress = () => {
        navigation.navigate("EditContact", { contact });
    };

    const handlePhonePress = () => {
        Linking.openURL(`tel:${phone}`);
    };

    const handleCellPress = () => {
        Linking.openURL(`tel:${cell}`);
    };

    const handleGmailPress = () => {
        Linking.openURL(`mailto:${email}?subject=&body=`).catch(err => {
            console.error('An error occurred', err);
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.avatarSection}>
                <ContactThumbnail avatar={avatar} name={name} phone={phone} />
            </View>
            <View style={styles.detailSection}>
                <DetailListItem 
                    icon="phone" 
                    title="Work" 
                    subtitle={phone} 
                    onPress={handlePhonePress} 
                />
                <DetailListItem 
                    icon="smartphone" 
                    title="Personal" 
                    subtitle={cell} 
                    onPress={handleCellPress} 
                />
                <DetailListItem 
                    icon="mail" 
                    title="Email" 
                    subtitle={email} 
                    onPress={handleGmailPress} 
                />
            </View>
            <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
                <MaterialIcons name="edit" size={24} color="white" />
                <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatarSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue,
    },
    detailSection: {
        flex: 1,
        backgroundColor: 'white',
    },
    editButton: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        backgroundColor: colors.blue,
        borderRadius: 30,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    editButtonText: {
        color: 'white',
        fontSize: 12,
    },
});

export default Profile;