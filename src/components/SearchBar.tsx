import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';

interface SearchBarProps {
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onChangeText, placeholder = 'Search Music' }) => {
  return (
    <View style={styles.searchBarContainer}>
      <Image source={require('../../assets/search-icon.webp')} style={styles.searchIcon} />
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 16, // Matches the corner radius of the AccountBar in the image
    paddingHorizontal: 15,
    paddingVertical: 8,
    width: '100%', // Stretches the search bar to fill the width
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
});

export default SearchBar;
