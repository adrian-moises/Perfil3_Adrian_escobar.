import { View, Text, StyleSheet } from 'react-native';
import InfoRow from '../components/InfoRow';
import PrimaryButton from '../components/PrimaryButton';
import useStudentNavigation from '../hooks/useStudentNavigation';
import { student } from '../data/student';

export default function StudentScreen() {
  const { goToCharacters } = useStudentNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Información del estudiante</Text>
      <InfoRow label="Nombre" value={student.nombre} />
      <InfoRow label="Carnet" value={student.carnet} />
      <InfoRow label="Sección y grupo" value={`${student.seccion} - ${student.grupo}`} />
      <PrimaryButton title="Ir a la pantalla 2" onPress={goToCharacters} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f0fb' },
  title: { fontSize: 24, fontWeight: '800', marginBottom: 16, color: '#111827' },
});
