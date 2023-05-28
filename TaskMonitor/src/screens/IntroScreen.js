import React, { useState } from 'react'
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../misc/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const IntroScreen = ({onFinish, navigation}) => {
    const [name, setname] = useState('');
    const handleOnChangeText = (text) => {
        setname(text);
    };
    const handleSubmit = async () => {
        const user = {name: name};
        await AsyncStorage.setItem('user', JSON.stringify(user));
        if(onFinish) onFinish();
        console.log(onFinish);
        //navigation.navigate('NoteScreen', {user});
    };

    return (
        <View style = {styles.container}>
            <Text style={styles.text}>Enter your name to continue</Text>
            <TextInput 
                value = {name}
                onChangeText={handleOnChangeText}
                placeholder='Enter name' 
                style= {styles.textInput} 
            />
            {name !== "" && 
                <AntDesign 
                    name= "arrowright"  
                    size={24} 
                    color= {Colors.LIGHT} 
                    style={styles.icon} 
                    onPress={handleSubmit}
                />
            }
        </View>
    );
}

const width = Dimensions.get('window').width - 50;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 22,
        alignSelf: 'flex-start',
        paddingLeft: 25,
        marginBottom: 5 
    },
    textInput: {
        borderWidth: 2,
        borderColor: Colors.PRIMARY,
        width,
        height: 45,
        borderRadius: 10,
        padding: 8,
        paddingLeft: 12,
        fontSize: 23,
        marginBottom: 15
    },
    icon: {
        backgroundColor: Colors.PRIMARY,
        padding: 15,
        borderRadius: 50
    }
});

export default IntroScreen;