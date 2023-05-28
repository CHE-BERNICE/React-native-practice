import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
        <View style={styles.buttonStyle}>
            <Button 
              title="View Friend list"
              onPress={() => navigation.navigate('Friends')} 
            />
        </View>
        <View style={styles.buttonStyle}>
            <Button 
              title="View Program Language list"
              onPress={() => navigation.navigate('Programs')} 
            />
        </View>
        <View style={styles.buttonStyle}>
            <Button 
              title="View City list"
              onPress={() => navigation.navigate('Cities')} 
            />
        </View>
        
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    margin: 5
  },
  buttonStyle: {
    marginVertical: 10
  }
});

export default HomeScreen;
