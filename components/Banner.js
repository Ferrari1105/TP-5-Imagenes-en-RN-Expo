import { StyleSheet, Text, View,Image } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
export default function Banner() {
  return (
    <View>
      <Text></Text>
        <Image
         style={styles.logo}
         source={require('../central_perk_logo.PNG')}
         />
         <Text style={styles.textoo}>Proba Nuestro Cafe</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textoo: {
    fontSize:"30px",
    color:"white",
    display:"flex",
    alignSelf:"center"
  },
  logo: {
    width: 400,
    height: 150,
  },
});
