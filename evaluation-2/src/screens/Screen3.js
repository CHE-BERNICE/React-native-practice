import React, { useState } from 'react'
import { View, StyleSheet, FlatList, Button, Text, ScrollView } from 'react-native'

const Screen3 = () => {
    const cities = [
        { name: "Mumbai", key: '1'},
        { name: 'New york', key: '2'},
        { name: 'Los Angeles', key: '3'},
        { name: "Chicago", key: '4'},
        { name: "Houston", key: '5'},
        { name: "Phoenix", key: '6'},
        { name: "Philadelphia", key: '7'},
        { name: "London", key: '8'},
        { name: "Birmingham", key: '9'},
        { name: "Abuja", key: '10'},
        { name: "lagos", key: '11'},
        { name: "Buea", key: '12'},
        { name: "Yaounde", key: '13'},
        { name: "Douala", key: '14'}
    ];
    const [show, setShow] = useState(false);

    return (
        <View>
            <Button 
                title="SHOW"
                onPress={() => setShow(true)}
            />
            <Button 
                title="HIDE"
                onPress={() => setShow(false)}
            />
            { show?
                <ScrollView>
                    <View >
                        <FlatList 
                            keyExtractor={cities => cities.key}
                            data={cities}
                            renderItem={({item}) => {
                                return <Text style={styles.listStyle}>{item.name}</Text>
                            }}
                        />
                    </View>
                
                </ScrollView>
            :null
            }

            
        </View>
        
    );
}

const styles = StyleSheet.create({
    screenStyle:{
        flex: 1
        
    },
    listStyle:{
        backgroundColor: 'blue',
        padding: 6,
        height: 50,
        marginHorizontal: 12,
        marginVertical: 10,
        borderRadius: 10,
        color: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        flex: 1,
        paddingLeft: 115
    }
});

export default Screen3;