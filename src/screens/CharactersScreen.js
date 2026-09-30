import { FlatList, StyleSheet } from 'react-native';
import CharacterCard from '../components/CharacterCard';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import useCharacters from '../hooks/useCharacters';

export default function CharactersScreen() {
  const { characters, loading, error } = useCharacters();

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={characters}
      keyExtractor={(c) => String(c.id)}
      renderItem={({ item }) => <CharacterCard character={item} />}
    />
  );
}

const styles = StyleSheet.create({
  list: { padding: 16 },
});
