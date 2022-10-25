import { StatusBar } from 'react-native';
import { StyleSheet, View } from 'react-native';
import CardList_demo from './src/components/CardList_demo'
export default function App() {
  return (
    <View>
      <StatusBar />
      <CardList_demo />
    </View>
  );
}