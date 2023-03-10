import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
        <Text style={styles.text}>Hi There!</Text>
        <Button style={styles.buttonStyle}
          title="Go to Components Demo"
          onPress={() => navigation.navigate('Components')} 
        />
        <Button style={styles.buttonStyle}
          title="Go to List Demo"
          onPress={() => navigation.navigate('List')} 
        />
        <Button 
          title="Go to Image Demo"
          onPress={() => navigation.navigate('Image')}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  buttonStyle: {
    marginVertical: 20
  }
});

export default HomeScreen;
