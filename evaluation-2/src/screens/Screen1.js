import React from 'react'
import { View, StyleSheet, FlatList, Text, ScrollView } from 'react-native'

const Screen1 = () => {
    const friends = [
        { name: "Chinu", age: 21, key: '1'},
        { name: "Tony", age: 28, key: '2'},
        { name: "Harvard", age: 13, key: '3'},
        { name: "Stark", age: 32, key: '4'},
        { name: "Captian", age: 5, key: '5'},
        { name: "Rogers", age: 40, key: '6'},
        { name: "Winter", age: 26, key: '7'},
        { name: "Payback", age: 53, key: '8'}
    ];

    return (
        <ScrollView style={styles.screenStyle}>
            <Text style= {styles.textStyle}>Map Function</Text>
            <View >
                <FlatList 
                    keyExtractor={friends => friends.key}
                    data={friends}
                    renderItem={({item}) => {
                        return <Text style={styles.listStyle}>My name is : {item.name}</Text>
                    }}
                />
            </View>
            
            <View >
                <FlatList 
                    keyExtractor={friends => friends.key}
                    data={friends}
                    renderItem={({item}) => {
                        return <Text style={styles.listStyle}>My age is : {item.age}</Text>
                    }}
                />
            </View>
            
            <View >
                <FlatList 
                    keyExtractor={friends => friends.key}
                    data={friends}
                    renderItem={({item}) => {
                        return <Text style={styles.listStyle}>Key is : {item.key}</Text>
                    }}
                />
            </View>
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screenStyle:{
        backgroundColor: 'light-grey'
    },
    listStyle:{
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 10,
        padding: 6,
        marginVertical: 5,
        color: 'blue',
        fontSize: 22,
        marginHorizontal: 30
    },
    textStyle:{
        color: 'grey',
        justifyContent: 'center',
        fontSize: 30,
        alignItems: 'center',
        margin: 8,
        paddingLeft: 75
    }
});

export default Screen1;