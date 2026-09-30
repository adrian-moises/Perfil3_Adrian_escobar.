import { View, Text, Image, StyleSheet } from 'react-native';

const STATUS_COLOR = { Alive: '#16a34a', Dead: '#dc2626', unknown: '#6b7280' };

export default function CharacterCard({ character }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{character.name}</Text>
        <Text style={[styles.status, { color: STATUS_COLOR[character.status] }]}>
          {character.status} - {character.species}
        </Text>
        <Text style={styles.line}>Origen: {character.origin.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 10, marginBottom: 10, overflow: 'hidden', elevation: 2 },
  image: { width: 96, height: 96 },
  info: { flex: 1, padding: 10, justifyContent: 'center' },
  name: { fontSize: 17, fontWeight: '700', color: '#111827' },
  status: { fontWeight: '600', marginTop: 2 },
  line: { color: '#4b5563', marginTop: 2 },
});
