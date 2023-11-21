import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const UserProfileScreen = ({navigation}) => {
  const [user, setUser] = useState({
    username: 'UsuarioEjemplo',
    email: 'usuario@example.com',
    profileImage: require('../assets/profile.png'),
  });

  const handleEditProfile = () => {
    navigation.navigate('ProfileEdit', {user});
  };

  const handleLogout = () => {
    navigation.navigate('HomeScreen', {user});
  };

  const handleNotifications = () => {
    navigation.navigate('Notifications', {user});
  };

  const handleSecurity = () => {
    console.log('Seguridad');
  };

  return (
    <View style={styles.container}>
      <Image source={user.profileImage} style={styles.profileImage} />
      <Text>Nombre de usuario: {user.username}</Text>
      <Text>Email: {user.email}</Text>

      <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
        <Icon name="user" size={30} color="black" />
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSecurity}>
        <Icon name="shield" size={30} color="black" />
        <Text style={styles.buttonText}>Seguridad</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleNotifications}>
        <Icon name="bell" size={30} color="black" />
        <Text style={styles.buttonText}>Notificaciones</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Icon name="sign-out" size={30} color="black" />
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },

  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginVertical: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    padding: 10,
  },
  buttonText: {
    marginLeft: 10,
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default UserProfileScreen;
