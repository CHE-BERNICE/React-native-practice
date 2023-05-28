import React, { useState } from 'react'
import { Text, TextInput, View, StyleSheet, FlatList, ScrollView, TouchableOpacity, Alert } from 'react-native'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'

const ToDoScreen = () => {
    const [todo, setTodo] = useState([]);
    const [textInput, setTextInput] = useState('');

    const addTodo = () => {
        if(textInput == ''){
            Alert.alert('Error', 'Please input todo');
        }else{
            const newTodo = {
                id: Math.random(),
                task: textInput,
                completed: false
            }
            setTodo([...todo, newTodo]);
            setTextInput('');
        }
       
    }

    const markTodoComplete = (todoId) => {
        const newTodo = todo.map((item) => {
            if(item.id == todoId){
                return {...item, completed: true};
            }
            return item;
        })
        setTodo(newTodo);
    }

    const deleteTodo = (todoId) => {
        const newTodo = todo.filter(item => item.id != todoId);
        setTodo(newTodo);
    }

    const clearTodos = () => {
        Alert.alert('Confirm', 'Clear todos?', [
            {
                text: 'Yes',
                onPress:() => setTodo([])
            },
            {
                text: 'No'
            }
        ])
        
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTextStyle}>TODO APP</Text>
                <MaterialIcons onPress={clearTodos} name='delete' size={35} style={{color: 'red'}} />
            </View>
            <ScrollView>
                <FlatList
                    keyExtractor={todo => todo.id} 
                    data={todo}
                    renderItem={({item}) => 
                        <View style={styles.listStyle}>
                            <Text style={{flex: 1, fontSize: 20, textDecorationLine: item.completed?'line-through':'none'}}>{item.task}</Text>
                           {!item.completed &&
                                <TouchableOpacity onPress={() => markTodoComplete(item.id)} style={{height: 25, width: 25, backgroundColor: 'green', margin: 5}}>
                                    <MaterialIcons name='done' size={20} style={{color: 'white', alignSelf: 'center'}}/>
                                </TouchableOpacity>
                            }
                            
                            <TouchableOpacity onPress={() => deleteTodo(item.id)} style={{height: 25, width: 25, backgroundColor: 'red', margin: 5}}>
                                <MaterialIcons name='delete' size={20} style={{color: 'white', alignSelf: 'center'}}/>
                            </TouchableOpacity>
                        </View>
                    }
                />
            </ScrollView>
            
            <View style={styles.footer}>
                <TextInput 
                    style={{flex: 1,padding: 10, elevation: 8, height: 50, fontSize: 16, borderRadius: 20,  backgroundColor: 'white',}}
                    placeholder='Add a TO DO'
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={textInput}
                    onChangeText={(text) => setTextInput(text)}
                />
                <TouchableOpacity onPress={addTodo} style={styles.addStyle}>
                    <Ionicons name='add' size={31} style={{color: 'white', alignSelf: 'center'}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flex: 1
    },
    header:{
        flexDirection:'row',
        paddingVertical: 15,
        backgroundColor: 'white',
        paddingHorizontal: 8
    },
    footer:{
        flexDirection: 'row',
        bottom:0,
        position: 'absolute',
        height: 80,
        width: '100%',
        paddingHorizontal: 9,
        paddingVertical: 15,
        alignItems: 'center'
    },
    headerTextStyle:{
        fontSize: 25,
        fontWeight: 'bold',
        flex: 1
    },
    addStyle:{
        height: 42,
        width: 42,
        borderRadius: 20,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        //padding: 4,
        backgroundColor: 'rgb(123,23,165)'
    },
    listStyle:{
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingVertical: 14,
        marginVertical: 10,
        marginHorizontal: 16,
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 18
    }

});

export default ToDoScreen;