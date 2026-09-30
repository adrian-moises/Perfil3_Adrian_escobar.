import { View, Text, StyleSheet } from 'react-native';

export default function ErrorMessage({ message }) {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Error: {message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  text: { color: '#b91c1c', textAlign: 'center' },
});
