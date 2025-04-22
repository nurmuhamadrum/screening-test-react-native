import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ItemList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Testing</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {fontSize: 24, fontWeight: 'bold', marginBottom: 12},
});
