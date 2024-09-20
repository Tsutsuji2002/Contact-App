import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../utility/colors';

const SearchBar = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="search" size={24} color={colors.grey} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search contacts..."
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.greyLight,
    borderRadius: 20,
    margin: 10,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
});

export default SearchBar;