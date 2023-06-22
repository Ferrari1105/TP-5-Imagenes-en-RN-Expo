import { StyleSheet, Text, View,Image } from 'react-native';
export default function Banner() {
  return (
    <View>
      <Text></Text>
        <Image
         style={styles.logo}
         source={require('../central_perk_logo.jpeg')}
         />
    </View>
  );
}

const styles = StyleSheet.create({
  textoo: {
    fontSize:"20px"
  },
  logo: {
    width: 400,
    height: 150
  },
});
