import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {
    const friends = [
        {name: 'friend #1', age: 20, key: 1},
        {name: 'friend #2', age: 21, key: 2},
        {name: 'friend #3', age: 34, key: 3},
        {name: 'friend #4', age: 42, key: 4},
        {name: 'friend #5', age:52, key:5},
        {name: 'friend #6', age: 22, key: 6},
        {name: 'friend #7', age: 31, key: 7},
        {name: 'friend #8', age: 40, key: 8},
        {name: 'friend #9', age: 38, key: 9}
    ];

    return (
        <FlatList
            data={friends}
            renderItem={({item}) => {
                return <Text style={styles.textStyle}>{item.name}- Age {item.age}</Text>
            }}
        />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 15
    }
});

export default ListScreen;