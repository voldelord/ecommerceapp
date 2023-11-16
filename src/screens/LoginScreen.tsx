import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import CustomButton from '../components/CustomButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any> {}

const LoginScreen = ({navigation}: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleButtonPress = () => {
    navigation.navigate('HomeScreen');
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/banner.jpg')} />
      </View>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={text => setPassword(text)}
        value={password}
      />

      <View style={styles.buttoncontainer}>
        <CustomButton
          label="Iniciar"
          onPress={handleButtonPress}
          color="skyblue"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttoncontainer: {
    marginTop: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 20,
    margin: 20,
  },
  button: {
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default LoginScreen;
