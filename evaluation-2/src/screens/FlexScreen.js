import React from 'react'
import { View, StyleSheet } from 'react-native'

const FlexScreen = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.boxStyle, {backgroundColor: 'red', flex: 1 }]} />
            <View style={[styles.boxStyle,{backgroundColor: 'green', flex: 1}]} />
            <View style={[styles.boxStyle, {backgroundColor: 'blue', flex: 1}]} />
            <View style={[styles.boxStyle, {backgroundColor: 'grey', flex: 1}]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        flexDirection: 'column',
        //flexDirection: 'row',
        alignItems: 'stretch',
        //alignItems: 'flex-start',
        //justifyContent: 'flex-start',
        //justifyContent: 'space-between'
    },
    boxStyle: {
        //height: 100 ,
        //width: 100
    }  
});

export default FlexScreen;