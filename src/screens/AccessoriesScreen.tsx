import React, {FC} from 'react';

import {Dimensions, StyleSheet, View} from 'react-native';

//Components
import Header from '../components/Header';
import Accessories from '../components/Accessories';

const dimensions = Dimensions.get('window');
const screen = dimensions.height;

const AccessoriesScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Header title="Accessories" />
      <Accessories onScreen={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    minHeight: screen,
  },
});

export default AccessoriesScreen;
