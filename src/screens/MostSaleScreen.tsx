import React, {FC} from 'react';

import {Dimensions, StyleSheet, View} from 'react-native';

//Components
import Header from '../components/Header';
import MostSale from '../components/MostSale';

const dimensions = Dimensions.get('window');
const screen = dimensions.height;

const MostSaleScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Header title="Most Sale" />
      <MostSale onScreen={true} />
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

export default MostSaleScreen;
