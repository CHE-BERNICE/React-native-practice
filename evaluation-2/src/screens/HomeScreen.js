import React from 'react'
import { View, StyleSheet, Button } from 'react-native'

const HomeScreen = ({navigation}) =>{
    return (
        <View style = {styles.viewStyle}>
            <View style={styles.buttonStyle}>
                <Button 
                    title="Go to Friends List"
                    onPress={() => navigation.navigate('Screen1')}
                />
            </View>
            <View style={styles.buttonStyle}>
                <Button 
                    title="Go to Program List"
                    onPress={() => navigation.navigate('Screen2')}
                />
            </View>
            <View style={styles.buttonStyle}>
                <Button 
                    title="Go to City List"
                    onPress={() => navigation.navigate('Screen3')}
                />
            </View>
            <View style={styles.buttonStyle}>
                <Button 
                    title="Go to Flex Screen"
                    onPress={() => navigation.navigate('Flex')}
                />
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle:{
        paddingVertical: 5
    },
    buttonStyle:{
        marginVertical: 10
    }
});

export default HomeScreen;