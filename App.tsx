import React, { JSXElementConstructor } from 'react';
import { Text, View } from 'react-native';

import CadastroMusica from './src/screens/CadastroMusica';
import VizualizarMusica from './src/screens/VizualizarMusica';
import UpdateMusica from './src/screens/UpdateMusica';

function App():JSX.Element{

  return(
    //<CadastroMusica/>
    //<VizualizarMusica/>
    <UpdateMusica/>
  );
}



export default App;