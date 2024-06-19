import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        placeholder="Search a job or position"
        style={styles.searchInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 8,
  },
});

export default SearchBar;
