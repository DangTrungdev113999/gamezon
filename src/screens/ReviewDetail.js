import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles  } from '../styles/global';

function ReviewDetail() {
  return (
    <View style={globalStyles.container} >
      <Text>ReviewDetail</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  }
})

export default ReviewDetail;
