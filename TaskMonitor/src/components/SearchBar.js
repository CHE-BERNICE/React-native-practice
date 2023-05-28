import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Colors from '../misc/Colors';

const SearchBar = () => {
  return (
    <View style={styles.container}>
        <TextInput 
            style={styles.searchBar}
            placeholder='Search here...'
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {

    },
    searchBar: {
        borderWidth: 0.5,
        borderColor: Colors.PRIMARY,
        borderRadius: 40,
        height: 40,
        paddingLeft: 15,
        fontSize:18
    }
});

export default SearchBar;
