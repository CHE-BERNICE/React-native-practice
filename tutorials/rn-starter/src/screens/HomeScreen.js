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
        <Button 
          title="Go to Counter Demo"
          onPress={() => navigation.navigate('Counter')}
        />
        <Button 
          title="Go to Color Demo"
          onPress={() => navigation.navigate('Color')}
        />
        <Button 
          title="Go to Square Demo"
          onPress={() => navigation.navigate('Square')}
        />
        <Button 
          title="Go to Input Demo"
          onPress={() => navigation.navigate('Text')}
        />
        <Button 
          title="Go to layout Demo"
          onPress={() => navigation.navigate('Box')}
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
