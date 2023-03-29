import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.textOneStyle}></View>
            <View style={styles.textTwoStyle}></View>
            <View style={styles.textThreeStyle}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 2
    },
    textOneStyle:{
        height: 70,
        width: 70,
        backgroundColor: 'red'
    },
    textTwoStyle:{
        alignSelf: 'center',
        height: 70,
        width: 70,
        backgroundColor: 'green',
        Top: 90
    },
    textThreeStyle:{
        height: 70,
        width: 70,
        backgroundColor: 'blue'
    }
});

export default BoxScreen;