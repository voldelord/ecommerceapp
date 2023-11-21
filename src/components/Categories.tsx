import React, {FC} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {categories} from '../constants';

interface CategoriesProps {
  onScreen?: boolean;
}

interface CategoriesCardProps {
  label: string;
  src: any;
  onPress: () => void;
}

const Categories: FC<CategoriesProps> = ({onScreen}) => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <View style={onScreen ? {display: 'none'} : styles.textContainer}>
        <Text style={styles.textHeadtitle}>Categories</Text>
        <Text
          testID="categories-nav"
          style={styles.textSubtitle}
          onPress={() => navigation.navigate('Categories')}>
          Show all
        </Text>
      </View>
      <FlatList
        data={categories}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              // Handle onPress for each category here
              console.log(`Category ${item.label} pressed`);
            }}>
            <CategoriesCard
              label={item.label}
              src={item.src}
              onPress={() => {}}
            />
          </TouchableOpacity>
        )}
        style={{marginLeft: 16, marginRight: 16}}
      />
    </View>
  );
};

const CategoriesCard: FC<CategoriesCardProps> = ({label, src, onPress}) => {
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={onPress}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={src} style={{width: 32, height: 32}} />
          <Text style={{fontSize: 18, fontWeight: '600', marginLeft: 16}}>
            {label}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{alignItems: 'center'}}>
        <Image
          style={{width: 32, height: 32}}
          source={require('../assets/right-arrow.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 24,
    paddingBottom: 24,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 12,
  },
  textHeadtitle: {
    color: '#666',
    fontSize: 22,
    fontWeight: '600',
  },
  textSubtitle: {
    color: '#1c85fc',
    fontWeight: '700',
    fontSize: 16,
  },
  cardContainer: {
    width: '95%',
    height: 55,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 6,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 18,
    paddingRight: 18,
    borderRadius: 6,
    elevation: 2,
  },
});

export default Categories;
