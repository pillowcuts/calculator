import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch, SafeAreaView } from 'react-native';
import { themeContext } from './src/context/themeContext';
import { myColors } from './src/styles/colors';
import Button from './src/components/Button';
import MyKeyboard from './src/components/MyKeyboard';

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <themeContext.Provider value={theme}> 
   

    <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: myColors.drkPurple}]}>
      <StatusBar style="auto"/>

      <Switch
        value={theme === 'light'}
        onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
      <MyKeyboard />

      
    
    </SafeAreaView>
    </themeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.medPink,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
