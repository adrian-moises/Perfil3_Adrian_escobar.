import { useNavigation } from '@react-navigation/native';

export default function useStudentNavigation() {
  const navigation = useNavigation();
  return { goToCharacters: () => navigation.navigate('Characters') };
}
