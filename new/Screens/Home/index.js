import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Icon from 'react-native-feather';

const HomeScreen = () => {
  return (
    <View style={styles.main}>
      <View
        style={styles.container}>
        <Icon.ArrowLeft
          stroke={'grey'}
          width={20}
          height={20}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.title}>{`Back`}</Text>
        <Text></Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 20,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    textAlign: 'center'
  }
});
