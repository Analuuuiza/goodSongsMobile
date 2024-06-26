import React, { JSXElementConstructor } from 'react';
import { Text, View } from 'react-native';
import VisualizarMusica from './src/screens/VisualizarMusica';
import Editar from './src/screens/Editar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from './src/screens/Cadastro';
import Welcome from './src/screens/Welcome';
import DetalhesMusica from './src/screens/DetalhesMusica';

const Stack = createStackNavigator();

function App():JSX.Element{

  return(
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='welcome' component={Welcome} options={{headerShown:false}} />
    <Stack.Screen name='list' component={VisualizarMusica} options={{headerShown:false}} />
      <Stack.Screen name='cadastro' component={Cadastro} options={{headerShown:false}} />
      <Stack.Screen name='update' component={Editar} options={{headerShown:false}} />
      <Stack.Screen name='DetalhesMusica' component={DetalhesMusica} options={{headerShown:false}} />
    </Stack.Navigator>
  </NavigationContainer>

  );
}



export default App;