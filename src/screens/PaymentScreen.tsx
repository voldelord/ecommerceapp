import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Picker} from '@react-native-picker/picker';

interface Props extends NativeStackScreenProps<any, any> {}

const PaymentScreen = ({navigation}: Props) => {
  const [paymentMethod, setPaymentMethod] = useState('Efectivo');
  const [cardType, setCardType] = useState('Visa');
  const [cardNumber, setCardNumber] = useState('');

  // Supongamos que tienes un arreglo de items en el carrito
  const cartItems = [
    {
      id: '1',
      name: 'Item 1',
      price: '$20.00',
      image: require('../assets/card-4.jpg'),
    },
    {
      id: '2',
      name: 'Item 2',
      price: '$15.00',
      image: require('../assets/card-4.jpg'),
    },
    // Agrega más items según sea necesario
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles del Carrito</Text>

      {/* Selector de tipo de pago */}
      <View style={styles.paymentSelector}>
        <Text>Tipo de Pago:</Text>
        <Picker
          selectedValue={paymentMethod}
          onValueChange={itemValue => {
            setPaymentMethod(itemValue);
            // Si elige tarjeta, reinicia el tipo de tarjeta y el número de tarjeta
            if (itemValue !== 'Tarjeta') {
              setCardType('Visa');
              setCardNumber('');
            }
          }}>
          <Picker.Item label="Efectivo" value="Efectivo" />
          <Picker.Item label="Tarjeta" value="Tarjeta" />
        </Picker>
      </View>

      {/* Selector de tipo de tarjeta (solo visible si se elige tarjeta) */}
      {paymentMethod === 'Tarjeta' && (
        <View style={styles.cardTypeSelector}>
          <Text>Tipo de Tarjeta:</Text>
          <Picker
            selectedValue={cardType}
            onValueChange={itemValue => setCardType(itemValue)}>
            <Picker.Item label="Visa" value="Visa" />
            <Picker.Item label="MasterCard" value="MasterCard" />
            {/* Agrega más opciones según sea necesario */}
          </Picker>
        </View>
      )}

      {/* Campo de entrada para el número de tarjeta (solo visible si se elige tarjeta) */}
      {paymentMethod === 'Tarjeta' && (
        <View style={styles.cardNumberInputContainer}>
          <Text>Número de Tarjeta:</Text>
          <TextInput
            style={styles.cardNumberInput}
            placeholder="Ingresa el número de tarjeta"
            value={cardNumber}
            onChangeText={text => setCardNumber(text)}
          />
        </View>
      )}

      {/* Lista de items en el carrito */}
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Image style={styles.itemImage} source={item.image} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
          </View>
        )}
      />

      {/* Total del carrito */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        {/* Puedes calcular el total sumando los precios de los items en el carrito */}
        <Text style={styles.totalAmount}>$35.00</Text>
      </View>

      {/* Botón de pago */}
      <TouchableOpacity
        style={styles.payButton}
        onPress={() => {
          // Puedes agregar lógica para realizar el pago
          // Aquí puedes navegar a la pantalla de confirmación de pago
          navigation.navigate('PaymentConfirmationScreen');
        }}>
        <Text style={styles.payButtonText}>Pagar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paymentSelector: {
    marginBottom: 20,
  },
  cardTypeSelector: {
    marginBottom: 20,
  },
  cardNumberInputContainer: {
    marginBottom: 20,
  },
  cardNumberInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  itemImage: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: '#666',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    color: 'green',
  },
  payButton: {
    backgroundColor: 'skyblue',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  payButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default PaymentScreen;
