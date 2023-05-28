import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, Keyboard, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../misc/Colors';
import Note from '../components/Note';
import NoteInputModal from '../components/NoteInputModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNotes } from '../context/NoteProvider';

const NoteScreen = ({user, navigation}) => {
    const [greet, setGreet] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const {notes, setNotes} = useNotes();

    const findGreet = () => {
      const hrs = new Date().getHours();
      if(hrs === 0 || hrs < 12) return setGreet('Morning');
      if(hrs === 1 || hrs < 17) return setGreet('Afternoon');
      setGreet('Evening');
    };
    const handleOnSubmit = async (title, desc) => {
        const note = {id: Date.now(), title, desc, time: Date.now()};
        const updatedNotes = [...notes, note];
        setNotes(updatedNotes);
        await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
    };
    const openNote = (note) => {
      navigation.navigate('NoteDetail', {note});
  };

    useEffect(() => {
      findGreet();
    }, []);

    return (
      <>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Text style={styles.header}>{`Good ${greet} ${user.name}`}</Text>
            {notes.length ? <SearchBar /> : null}
            <FlatList 
              data={notes}
              numColumns={2}
              columnWrapperStyle={{justifyContent: 'space-between', marginBottom: 15}}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => <Note onPress={() => openNote(item)} item={item}/>}
            />
            {!notes.length ? <View style={styles.emptyHeaderContainer}>
              <Text style={styles.emptyHeader}>Add notes</Text>
              
            </View> : null}
          </View>
        </TouchableWithoutFeedback>
        <AntDesign 
                name='plus' 
                size={24} 
                color= {Colors.LIGHT} 
                style={styles.addBtn}
                onPress={() => setModalVisible(true)}
          />
        <NoteInputModal 
          visible={modalVisible} 
          onClose={()=> setModalVisible(false)}
          onSubmit={handleOnSubmit}
        />
      </>
    );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 28
  },
  emptyHeaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyHeader: {
    fontSize: 30,
    textTransform: 'uppercase', 
    fontWeight: 'bold',
    opacity: 0.2
  },
  addBtn: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 50,
    position:'absolute',
    right: 15,
    bottom: 50,
    zIndex: 1
  }
});
export default NoteScreen;
