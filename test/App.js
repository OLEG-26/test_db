import { StyleSheet, Text, View } from 'react-native';
import StudentInsert from './screens/StudentInsert.js';

export default function App() {
  return (
    <View style={styles.container}>
      <StudentInsert/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
