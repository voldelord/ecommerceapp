import React, {useState} from 'react';
import {View, TextInput, Image, StyleSheet} from 'react-native';
import CustomButton from '../components/CustomButton';
import PhoneNumberInput from 'react-native-phone-number-input';

const ProfileEditScreen = ({route, navigation}) => {
  const [editedUser, setEditedUser] = useState(route.params.user);
  const [formattedValue, setFormattedValue] = useState('');

  const handleSave = () => {
    console.log('Información del usuario editada:', editedUser);
    navigation.goBack();
  };

  const handleButtonPress = () => {
    navigation.navigate('HomeScreen'); // Cambia el nombre a 'HomeDevices'
  };

  return (
    <View style={styles.container}>
      <Image source={editedUser.profileImage} style={styles.profileImage} />

      <TextInput
        style={styles.input}
        placeholder="Nuevo nombre de usuario"
        value={editedUser.username}
        onChangeText={text => setEditedUser({...editedUser, username: text})}
      />

      <TextInput
        style={styles.input}
        placeholder="Nuevo email"
        value={editedUser.email}
        onChangeText={text => setEditedUser({...editedUser, email: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de Nacimiento"
        value={editedUser.date}
        onChangeText={date => setEditedUser({...editedUser, date: date})}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de Nacimiento"
        value={editedUser.date}
        onChangeText={date => setEditedUser({...editedUser, date: date})}
      />

      <PhoneNumberInput
        defaultCode="US" // Cambia al código de país predeterminado deseado
        placeholder="Nuevo Teléfono"
        value={formattedValue}
        onChangeFormattedText={text => setFormattedValue(text)}
        textContainerStyle={styles.phoneInputContainer}
        textInputStyle={styles.phoneInputText}
      />

      <View style={styles.buttonContainer}>
        <CustomButton
          label="Guardar Cambios"
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginVertical: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  buttonContainer: {
    marginTop: 20,
    padding: 30,
  },
  phoneInputContainer: {
    height: 40,
    width: '20%',
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
  },

  phoneInputText: {
    fontSize: 16, // Ajusta el tamaño del texto según tu preferencia
    // Otros estilos de texto si es necesario
  },
});

export default ProfileEditScreen;
