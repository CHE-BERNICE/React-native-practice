import React from 'react'
import { View, StyleSheet, FlatList, Text, ScrollView } from 'react-native'

const Screen2 = () => {
    const programs = [
        { name: "C", key: '1'},
        { name: "C++", key: '2'},
        { name: "Java", key: '3'},
        { name: "JavaScript", key: '4'},
        { name: "Go", key: '5'},
        { name: "Kotlin", key: '6'},
        { name: "Swift", key: '7'},
        { name: "Python", key: '8'},
        { name: "PHP", key: '9'},
        { name: "Perl", key: '10'}
    ];

    return (
        <ScrollView style={styles.screenStyle}>
            <View >
                <FlatList 
                    keyExtractor={programs => programs.key}
                    data={programs}
                    renderItem={({item}) => {
                        return <Text style={styles.listStyle}>{item.name}</Text>
                    }}
                />
            </View>
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screenStyle:{
        flex: 1
        
    },
    listStyle:{
        backgroundColor: 'yellow',
        padding: 6,
        paddingLeft: 25,
        marginVertical: 10,
        fontSize: 22,
        height: 50
    }
});

export default Screen2;