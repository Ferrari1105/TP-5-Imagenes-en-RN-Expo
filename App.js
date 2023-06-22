import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import Banner from './components/Banner';
import Card from './components/Card'
const image  = {uri: 'https://s1.1zoom.me/big0/892/Coffee_Grain_Wood_planks_564164_1280x720.jpg'};
export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.container}>
      <Banner/>
      <Card/>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: "100%"
  }
});
