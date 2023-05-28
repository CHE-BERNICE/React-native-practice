import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name='search' size={30}/>
            <TextInput 
                style={styles.inputStyle}
                autoCapitalize= "none"
                autoComplete={false}
                placeholder='Search'
                value={term}
                onChangeText={(newTerm) => onTermChange(newTerm)}
                onEndEditing={() =>onTermSubmit()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 10
    },
    inputStyle:{
        fontSize: 18,
        flexDirection: 'row',
        flex: 1
    },
    iconSiyle:{
        fontSize: 35,
        marginHorizontal: 15,
        alignSelf: 'center'
    }
});

export default SearchBar;