import React from 'react';
import {Text, View, Button} from 'react-native';

export default function Home({navigation}) {
  function navigateToUsers() {
    navigation.navigate('Users');
  }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
      <Text>Home</Text>
      <Button title="Navigate to users" onPress={navigateToUsers} />
    </View>
  );
}
