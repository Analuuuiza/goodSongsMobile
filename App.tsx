import React, { JSXElementConstructor } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import PesquisarMusica from './src/screens/PesquisarMusica';
import CadastroMusica from './src/screens/CadastroMusica';
import VizualizarMusica from './src/screens/VizualizarMusica';

const Stack = createStackNavigator();

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='home' component={CadastroMusica} 
          options={{ headerShown: false }}/>

          <Stack.Screen name='list' component={VizualizarMusica} 
          options={{ headerShown: false }}/>

          <Stack.Screen name='lupa' component={PesquisarMusica} 
          options={{ headerShown: false }}/>

        </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;