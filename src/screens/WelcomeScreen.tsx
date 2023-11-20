import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TouchableOpacity} from 'react-native';

interface Props extends NativeStackScreenProps<any, any> {}
const WelcomeScreen = ({navigation}: Props) => {
  const handleButtonPress = () => {
    navigation.navigate('LoginScreen');
  };

  const handleRegisterPress = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/banner.jpg')} />
      </View>
      <View style={styles.buttoncontainer}>
        <CustomButton
          label="Iniciar"
          onPress={handleButtonPress}
          color="skyblue"
        />
      </View>
      <TouchableOpacity onPress={handleRegisterPress}>
        <Text style={styles.parraph}>¿No eres Usuario? Registrate</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttoncontainer: {
    marginTop: 20,
  },
  imagemedium: {
    width: 400,
    height: 400,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  parraph: {
    textAlign: 'center',
    padding: 20,
    fontSize: 15,
  },
});

export default WelcomeScreen;
