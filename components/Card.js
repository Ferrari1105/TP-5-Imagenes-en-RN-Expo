import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default function Cards() {
  return (
    <View >
      <Text style={styles.texto}>Try some of our most popular flavors!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  texto:{
    color:"white",
    marginTop: "30px"
    
    //Font-size o algo asi
  }
});
