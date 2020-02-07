import React, {useState, useEffect} from 'react';
import {
  KeyboardAvoidingView,
  Image,
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Keyboard,
} from 'react-native';
import {Button, Text, Form, Item, Label, Input} from 'native-base';

export default function Users({navigation}) {
  function navigateToDashboard() {
    navigation.navigate('Home');
  }

  const [offset] = useState(new Animated.ValueXY({x: 0, y: 120}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x: 160, y: 155}));

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
      }),
    ]).start();
  }, [offset.y, opacity]);

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.logo}>
        <StatusBar backgroundColor="#08081c" barStyle="light-content" />
        <Animated.Image
          style={{
            borderRadius: 250,
            width: logo.x,
            height: logo.y,
          }}
          source={require('../../assets/drawable-xxxhdpi-icon.png')}
        />
      </View>
      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacity,
            transform: [{translateY: offset.y}],
          },
        ]}>
        <Form>
          <Item stackedLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item stackedLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
        </Form>
        <Button block light onPress={navigateToDashboard}>
          <Text style={{color: '#090533', fontWeight: 'bold'}}>Login</Text>
        </Button>
        <TouchableOpacity>
          <Text style={styles.textCadastro}>Criar conta</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d0e0ef',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  image: {
    borderRadius: 250,
  },
  textCadastro: {
    marginTop:10,
    color: '#fff',
    fontWeight: 'bold',
  },
});
