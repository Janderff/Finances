import React from 'react';
import {Text, View, Button, StatusBar} from 'react-native';

export default function Users({navigation}) {
  function navigateToDashboard() {
    navigation.navigate('Home');
  }
  return (
    <View>
      <StatusBar
        barStyle="default"
        hidden={false}
        backgroundColor="#08081c"
        translucent={true}
      />
      <Text>Users</Text>
      <Button title="Navigate to Dashboard" onPress={navigateToDashboard} />
    </View>
  );
}
