import React, { useState, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createAppContainer } from "react-navigation";
//import { createStackNavigator } from "react-navigation-stack";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet} from 'react-native';
import IntroScreen from "./src/screens/IntroScreen";
import NoteScreen from './src/screens/NoteScreen';
import NoteDetail from './src/components/NoteDetail';
import NoteProvider from './src/context/NoteProvider';

const Stack = createStackNavigator();

export default function App() {
    const[user, setUser] = useState({});
    const findUser = async () => {
      const result = await AsyncStorage.getItem('user');
      if(result !== null){
        setUser(JSON.parse(result));
        return <RenderNoteScreen />;
      }

    };
    const RenderNoteScreen = (props) => <NoteScreen {...props} user={user} />;

    useEffect(() => {
        findUser();
        //AsyncStorage.clear()
    }, []);
    if(!user.name) return <IntroScreen onFinish={findUser} />
    //const StackApp = createAppContainer(navigator);
    
    return <NavigationContainer>
      <NoteProvider>
        <Stack.Navigator>
          <Stack.Screen component={IntroScreen} name="IntroScreen"/>
          <Stack.Screen component={RenderNoteScreen} name="NoteScreen"/>
          <Stack.Screen component={NoteDetail} name="NoteDetail"/>
        </Stack.Navigator>
      </NoteProvider>
    </NavigationContainer>
    
}

const styles = StyleSheet.create({

});


