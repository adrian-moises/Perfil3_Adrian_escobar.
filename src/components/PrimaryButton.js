import { Pressable, Text, StyleSheet } from 'react-native';

export default function PrimaryButton({ title, onPress }) {
  return (
    <Pressable style={({ pressed }) => [styles.btn, pressed && styles.pressed]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: { backgroundColor: '#9b4dca', paddingVertical: 14, borderRadius: 10, alignItems: 'center', marginTop: 24 },
  pressed: { opacity: 0.8 },
  text: { color: '#fff', fontSize: 16, fontWeight: '700' },
});
