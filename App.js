import { NativeBaseProvider, StatusBar } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screen/LoginScreen';
import ReisterScreen from './src/screen/RegisterScreen';
import OrderScreen from './src/screen/OrderScreen';
import BottomNav from './src/navigation/BottomNav';
import Text_callapi from './src/screen/Text_callapi';
import SearchResults from './src/components/SearchResults';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Stack.Navigator initialRouteName="Login" screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={ReisterScreen} />
          <Stack.Screen name="order" component={OrderScreen} />
          <Stack.Screen name="Bottom" component={BottomNav} />
          <Stack.Screen name="Text_callapi" component={Text_callapi} />
          <Stack.Screen name="SearchResults" component={SearchResults} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
