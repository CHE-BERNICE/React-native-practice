import React from 'react';
import { Text, StyleSheet, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
  return (
    <>
        <Text>Signup Screen</Text>
        <Button  title= "Go to Signin" onPress={() => navigation.navigate('Signin')}/>
        <Button  title= "Go to mainFlow" onPress={() => navigation.navigate('mainFlow')}/>
    </>
  );
}

const styles = StyleSheet.create({

});

export default SignupScreen;