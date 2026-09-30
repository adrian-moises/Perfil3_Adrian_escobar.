import { View, Text, StyleSheet } from 'react-native';

export default function InfoRow({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#e5e7eb' },
  label: { fontSize: 13, color: '#6b7280', textTransform: 'uppercase' },
  value: { fontSize: 20, fontWeight: '600', color: '#111827' },
});
