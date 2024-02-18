import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import AppRoutes from './src/routes/AppRoutes';






function App() {
  return <SafeAreaView style={estilos.tela}>
     <StatusBar />
     <AppRoutes />
  </SafeAreaView>
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
  }
})


export default App;
