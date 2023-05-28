import React from 'react';
import { StyleSheet } from 'react-native';
import TaskForm from '../components/blogPostForm';

const EditScreen = ({ navigation }) => {

    return (
       <TaskForm 
            onSubmit={() => {
                
            }}
       />
    );
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        margin: 5,
        marginBottom: 15,
        padding: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default EditScreen;