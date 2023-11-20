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
      {/* Agregar dos botones con imágenes debajo del texto */}
      <View style={styles.imageRow}>
        <TouchableOpacity
          onPress={() => {
            // Navegar a la primera página deseada al hacer clic en la imagen
            navigation.navigate('HomeScreen');
          }}>
          <Image
            style={styles.additionalImage}
            source={require('../assets/leftarrow.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            // Navegar a la segunda página deseada al hacer clic en la imagen
            navigation.navigate('PaymentScreen');
          }}>
          <Image
            style={styles.additionalImage}
            source={require('../assets/payment.png')}
          />
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
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  // Estilos para la fila de botones con imágenes adicionales
  imageRow: {
    flexDirection: 'row',
    marginTop: 20,
  },
  additionalImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginHorizontal: 50,
  },
});

export default CartScreen;
