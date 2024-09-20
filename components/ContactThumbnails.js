import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import PropTypes from 'prop-types';

const ContactThumbnail = ({
    name = '',
    phone = '',
    avatar,
    onPress = null
}) => {
    const ImageComponent = onPress ? TouchableOpacity : View;

    return (
        <View style={styles.container}>
            <ImageComponent onPress={onPress}>
                <Image 
                    source={{uri: avatar}} 
                    style={styles.avatar}
                    defaultSource={require('../assets/default-avatar.png')}
                />
            </ImageComponent>
            {name !== '' && <Text style={styles.name} numberOfLines={1}>{name}</Text>}
            {phone !== '' && (
                <View style={styles.phoneSection}>
                    <Icon name="phone" size={14} style={styles.phoneIcon}/>
                    <Text style={styles.phone} numberOfLines={1}>{phone}</Text>
                </View>
            )}
        </View>
    );
};

ContactThumbnail.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    phone: PropTypes.string,
    onPress: PropTypes.func,
};

const styles = StyleSheet.create({
    container: {
        width: 100,
        marginHorizontal: 8,
        marginBottom: 24,
        alignItems: 'center',
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 8,
        backgroundColor: '#e0e0e0',
    },
    name: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333333',
        textAlign: 'center',
        marginBottom: 4,
    },
    phoneSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    phoneIcon: {
        color: '#666666',
        marginRight: 4,
    },
    phone: {
        fontSize: 12,
        color: '#666666',
    },
});

export default ContactThumbnail;