import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

export default function Loading({ message = 'Cargando...' }) {
  return (
    <View style={styles.center}>
      <ActivityIndicator size="large" color="#9b4dca" />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { marginTop: 8, color: '#4b5563' },
});
