import React, {useState, useEffect} from "react";
import { StyleSheet, View, Text } from "react-native";
import { fetchRandomContact } from "../utility/api";
import ContactThumbnail from "../components/ContactThumbnails";
import DetailListItem from "../components/DetailListItem";
import colors from '../utility/colors';

const Profile =({route})=>
{
    // const [contact, setContact] = useState({});
    // useEffect(()=>
    //     {
    //         fetchRandomContact().then(
    //             contact => setContact(contact)
    //         )   
    //     }
    // ,[]);
    const {contact} = route.params;
    const {avatar, name, email, phone, cell} = contact;
    return (
        <View style={styles.container}>
            <View style={styles.avatarSection}>
                <ContactThumbnail avatar={avatar} name={name} phone={phone}/>
            </View>
            <View style={styles.detailSection}>
                <DetailListItem icon="email" title="email" subtitle={email}/>
                <DetailListItem icon="phone" title="work" subtitle={phone}/>
                <DetailListItem icon="smartphone" title="personal" subtitle={cell}/>
            </View>
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
    }
})

export default Profile;
