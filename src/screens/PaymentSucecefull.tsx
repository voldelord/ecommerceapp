import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import LottieView from 'lottie-react-native';
import CustomButton from '../components/CustomButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
interface Props extends NativeStackScreenProps<any, any> {}

const PaymentSucecefull = ({navigation}: Props) => {
  const handleButtonPress = () => {
    navigation.navigate('HomeScreen');
  };
  return (
    <View style={styles.container}>
      <LottieView
        style={{width: 500, height: 500}}
        source={require('../constants/Animation_1700585977442.json')}
        autoPlay
        loop
      />
      <View style={styles.buttoncontainer}>
        <CustomButton
          label="Volver al Home"
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
  buttoncontainer: {
    marginTop: 20,
  },
});
export default PaymentSucecefull;
