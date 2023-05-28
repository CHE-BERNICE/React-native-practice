import React, { useEffect, useState } from 'react';
import { Text, TextInput, View, StyleSheet, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Colors from '../misc/Colors';
//import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
//import { Keyboard } from 'react-native/types';
//import { Modal } from 'react-native/types';
import { AntDesign } from '@expo/vector-icons';


const NoteInputModal = ({visible, onClose, onSubmit, note, isEdit}) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const handleModalClose = () => {
        Keyboard.dismiss();
    };

    useEffect(() => {
        if(isEdit){
            setTitle(note.title);
            setDesc(note.desc);
        }
    }, [isEdit])

    const handleOnChangeText = (text, valueFor) => {
        if(valueFor === 'title') setTitle(text);
        if(valueFor === 'desc') setDesc(text);
    };
    const handleSubmit = () => {
        if(!title.trim() && !desc.trim()) return onClose();
        if(isEdit){
            onSubmit(title, desc, Date.now());
        }else{
            onSubmit(title, desc);
            setTitle('');
            setDesc('');
        }
        onClose();
    };
    const closeModal = () => {
        if(!isEdit){
            setTitle('');
            setDesc('');
        }  
        onClose();
    }

    return (
        <Modal visible={visible} animationType='fade'>
            <View style={styles.container}>
                <TextInput 
                    value={title}
                    onChangeText={(text) => handleOnChangeText(text, 'title')}
                    placeholder='Title'
                    style={[styles.input,styles.title]}
                />
                <TextInput
                    value={desc}
                    onChangeText={(text) => handleOnChangeText(text, 'desc')} 
                    multiline
                    placeholder='Note'
                    style={[styles.input,styles.desc]}
                />
                <View style={styles.btnContainer}>
                    <AntDesign size={15} name='check' style={styles.submit} onPress={handleSubmit}/>
                    {title.trim() || desc.trim() ?
                        (<AntDesign onPress={closeModal} size={15} name='close' style={[styles.submit,{marginLeft: 15}]}/>)
                     : null
                    }
                </View>
                
            </View>
            <TouchableWithoutFeedback onPress={handleModalClose}>
                <View style={[styles.modalBG, StyleSheet.absoluteFillObject]}/>
            </TouchableWithoutFeedback>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 15
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: Colors.PRIMARY,
        fontSize: 20,
        color: Colors.DARK
    },
    title: {
        height: 40,
        marginBottom: 15,
        fontWeight: 'bold'
    },
    desc: {
        height: 100
    },
    modalBG:{
        flex: 1,
        zIndex: -1
    },
    submit: {
        backgroundColor: Colors.PRIMARY,
        padding: 15,
        borderRadius: 50
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 15

    }
});

export default NoteInputModal;