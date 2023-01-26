import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Addition from './components/Addition';
import Numbers from './components/Numbers';
import Total from './components/Total';

export default function App() {
  return (
    <View style={{padding:40}}>
      <Total/>
      <Addition/>
      <Text>Name</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Numbers/>
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
