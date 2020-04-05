import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';

function Home() {
  return (
    <View style={globalStyles.container} >
      <Text style={globalStyles.titleText} >Home</Text>
    </View>
  )
}

export default Home;
