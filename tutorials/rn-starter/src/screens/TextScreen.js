import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

const TextScreen = () => {
    const [name, setName] = useState('');

    return (
        <View>
            <Text>Enter name:</Text>
            <TextInput 
                autoCapitalize = "none"
                autoCorrect={false}
                style={styles.input}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            <Text>My name is {name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    input:{
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;