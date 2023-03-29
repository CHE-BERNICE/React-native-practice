import React from 'react'
import { View, StyleSheet, Button } from 'react-native'

const HomeScreen = ({navigation}) =>{
    return (
        <View style = {styles.viewStyle}>
            <Button 
                title="Go to Friends List"
                onPress={() => navigation.navigate('Screen1')}
            />
            <Button 
                title="Go to Program List"
                onPress={() => navigation.navigate('Screen2')}
            />
            <Button 
                title="Go to City List"
                onPress={() => navigation.navigate('Screen3')}
            />
            <Button 
                title="Go to Flex Screen"
                onPress={() => navigation.navigate('Flex')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle:{
        paddingVertical: 5
    }
});

export default HomeScreen;