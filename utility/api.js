import 'react-native-get-random-values';
import {v4} from 'uuid';

const mapContact = contact => {
    const {
        name, picture, phone, cell, email,
    } = contact;
    return {
        id: v4(),
        name: name.first + ' ' + name.last,
        avatar: picture.large,
        phone,
        cell,
        email,
        favorite: Math.random() >= 0.5,
    };
};

const fetchContacts = async () => {
    try {
        const response = await fetch('https://randomuser.me/api/?results=100&seed=fullstackio');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const contactData = await response.json();
        return contactData.results.map(mapContact);
    } catch (e) {
        console.error('Error fetching contacts:', e);
        throw e;
    }
}

const fetchUserContact = async() => {
    try {
        const response = await fetch('https://randomuser.me/api/?seed=fullstackio');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const userData = await response.json();
        return mapContact(userData.results[0]);
    } catch (e) {
        console.error('Error fetching user contact:', e);
        throw e;
    }
}

const fetchRandomContact = async() => {
    try {
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const userData = await response.json();
        return mapContact(userData.results[0]);
    } catch (e) {
        console.error('Error fetching random contact:', e);
        throw e;
    }
}

export {fetchContacts, fetchUserContact, fetchRandomContact};