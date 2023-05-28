import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({navigation}) => {
   

    return (
        <View>
            <Text>title</Text>
        </View>
    );
}

ShowScreen.navigationOptions = () => {
    return {
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
            <EvilIcons name='pencil' size={35}/>
        </TouchableOpacity>
    };
}

const styles = StyleSheet.create({

});

export default ShowScreen;