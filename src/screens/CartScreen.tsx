import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any> {}

const CartScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/cart.jpg')} />
      </View>
      <Text style={styles.title}>Artículo agregado al carrito</Text>
      <Text style={styles.description}>¡Listo para realizar tu compra!</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => {
            // Aquí puedes navegar a la página deseada al hacer clic en el botón
            navigation.navigate('HomeScreen'); // Reemplaza 'OtroScreen' con el nombre de tu pantalla destino
          }}>
          <Text style={styles.buttonText}>Ir al Carrito</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => {
            // Aquí puedes navegar a la página deseada al hacer clic en el botón
            navigation.navigate('HomeScreen'); // Reemplaza 'OtroScreen' con el nombre de tu pantalla destino
          }}>
          <Text style={styles.buttonText}>Volver a Comprar</Text>
        </TouchableOpacity>
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
  description: {
    fontSize: 18,
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  checkoutButton: {
    backgroundColor: 'skyblue',
    padding: 15,
    borderRadius: 8,
    marginRight: 10,
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

export default CartScreen;
