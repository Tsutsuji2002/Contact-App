import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image, Linking } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { COLORS, SIZES, FONTS } from '../theme';

const ContactListItem = ({
    name, avatar, phone, onPress
}) => {
    const handleCallPress = () => {
        Linking.openURL(`tel:${phone}`);
    };

    return (
        <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        >
            <View style={styles.contactInfo}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: avatar,
                    }}
                />
                <View style={styles.details}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subtitle}>{phone}</Text>
                </View>
                <TouchableOpacity style={styles.callButton} onPress={handleCallPress}>
                    <MaterialIcons name="phone" size={24} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

ContactListItem.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    phone: PropTypes.string,
    onPress: PropTypes.func,
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding / 2,
        backgroundColor: COLORS.background,
    },
    contactInfo: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.textLight,
        borderRadius: SIZES.radius,
        padding: SIZES.padding / 2,
        elevation: 2,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    details: {
        justifyContent: 'center',
        flex: 1,
        marginLeft: SIZES.padding,
    },
    title: {
        ...FONTS.h3,
        color: COLORS.text,
    },
    subtitle: {
        ...FONTS.body4,
        color: COLORS.grey,
        marginTop: 4,
    },
    callButton: {
        padding: SIZES.base,
    },
});

export default ContactListItem;