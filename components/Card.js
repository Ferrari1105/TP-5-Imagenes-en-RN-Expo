import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { ImageBackground } from 'react-native-web';

export default function Cards() {
  return (
    <View style={styles.view}>
      <Card title="CARD WITH DIVIDER" style={styles.card}>
          <Image
            style={styles.image}
            source={require('../coffee1.jpeg')}
          />
          <div style={styles.division}>
          <Text style={styles.texto}>Try some of our most popular flavors!</Text>
          </div>
        </Card>
      </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 400,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  card: {
    backgroundcolor: "transparent",
     borderwidth: "0px"
  },
  division: {
    backgroundColor:'green',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  texto:{
    color:'white', 
    display: 'flex', 
    justifyContent:"center", 
    alignItems:"center", 
    margin:'1rem', 
    fontSize:'1.2rem', 
    fontWeight: 'bold',
  },view:{
    backgroundColor:"transparent"
  }
});
