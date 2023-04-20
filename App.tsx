import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { api } from './apiSlice';
import { UserList } from './GetUsers';

function AppWrapper() {
  return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <UserList />
      </View>
  );
}

export default function App(){
   return (
    <ApiProvider api={api}>
        <AppWrapper/>
    </ApiProvider>
   )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});