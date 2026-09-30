import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentScreen from '../screens/StudentScreen';
import CharactersScreen from '../screens/CharactersScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Student">
        <Stack.Screen name="Student" component={StudentScreen} options={{ title: 'Estudiante' }} />
        <Stack.Screen name="Characters" component={CharactersScreen} options={{ title: 'Rick and Morty' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
