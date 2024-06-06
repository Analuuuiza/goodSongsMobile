import React, { JSXElementConstructor } from 'react';
import { Text, View } from 'react-native';
import VisualizarMusica from './src/screens/VisualizarMusica';
import Editar from './src/screens/Editar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from './src/screens/Cadastro';

const Stack = createStackNavigator();

function App():JSX.Element{

  return(
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='list' component={VisualizarMusica} options={{headerShown:false}} />
      <Stack.Screen name='cadastro' component={Cadastro} options={{headerShown:false}} />
      <Stack.Screen name='update' component={Editar} options={{headerShown:false}} />
    </Stack.Navigator>
  </NavigationContainer>

  );
}



export default App;