import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Alert } from 'react-native';
import Colors from '../misc/Colors';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNotes } from '../context/NoteProvider';
import NoteInputModal from './NoteInputModal';

const formatDate = ms => {
   const date =  new Date(ms);
   const day = date.getDate();
   const month = date.getMonth() + 1;
   const year = date.getFullYear();
   const hrs = date.getHours();
   const min = date.getMinutes();
   const sec = date.getSeconds();

   return `${day}/${month}/${year} - ${hrs}:${min}:${sec}`;
};

const NoteDetail = (props) => {
    const [note, setNote] = useState(props.route.params.note);
    const {setNotes} = useNotes();
    const [showModal, setShowModal] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const deleteNote = async () => {
        const result = await AsyncStorage.getItem('notes');
        let notes = [];
        if(result !== null) notes = JSON.parse(result)
        const newNotes = notes.filter(n =>n.id !== note.id);
        setNotes(newNotes);
        await AsyncStorage.setItem('notes', JSON.stringify(newNotes));
        props.navigation.goBack();
    }

    const displayDeleteAlert = () => {
        Alert.alert('Are you  sure!', 'This action will delete your note permanently!', [
            {
                text: 'Delete',
                onPress: () => deleteNote
            },
            {
                text: 'No thanks',
               
            }
        ],
        {
            cancelable: true
        })
    };

    const handleUpdate = async (title, desc, time) => {
        const result = await AsyncStorage.getItem('notes');
        let notes = [];
        if(result !== null) notes = JSON.parse(result)
        const newNotes = notes.filter(n => {
            if(n.id === note.id){
                n.title = title;
                n.desc = desc;
                n.isUpdated = true;
                n.time = time;

                setNote(n);
            }
            return n;
        })
        setNotes(newNotes);
        await AsyncStorage.setItem('notes', JSON.stringify(newNotes));
    };
    const handleOnClose = () => setShowModal(false)

    return (
        <>
            <ScrollView style={styles.container}>
                <Text style={styles.time}>{note.isUpdated ? `Updated At ${formatDate(note.time)}` : `Created At ${formatDate(note.time)}`}</Text>
                <Text style = {styles.title}>{note.title}</Text>
                <Text style = {styles.desc}>{note.desc}</Text>
            </ScrollView>
            <View style={styles.btnContainer}>
                    <AntDesign 
                        onPress={displayDeleteAlert}
                        name= 'delete' 
                        style={styles.icon}
                    />
                    <AntDesign 
                        onPress={() => {
                            setShowModal(true),
                            setIsEdit(true)
                        }}
                        name= 'edit' 
                        style={[styles.icon, {backgroundColor: Colors.PRIMARY, marginTop: 15}]}/>
            </View>
            <NoteInputModal 
                isEdit={isEdit}
                note={note}
                onClose={handleOnClose} 
                onSubmit={handleUpdate} 
                visible={showModal}/>
        </>
        
    );
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        paddingHorizontal: 15
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.LIGHT
    },
    desc: {
        fontSize: 20,
        opacity: 0.7
    },
    time: {
        textAlign: 'right',
        fontSize: 12,
        opacity: 0.5
    },
    icon: {
        backgroundColor: Colors.ERROR,
        padding: 15,
        borderRadius: 50
    },
    btnContainer: {
        position: 'absolute',
        right: 15,
        bottom: 50
    }
});

export default NoteDetail;