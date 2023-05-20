import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'

import styles from './style';
import { ItemCategory } from '../../components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/Home';
import { PRODUCTS } from '../../data';
import { ProductType } from '../../interfaces';

type Props = NativeStackScreenProps<RootStackParamList, 'CategoryScreen'>;

const Category = ({ route, navigation }: Props) => {
  const { id } = route.params;
  const products = PRODUCTS.filter((product: ProductType) => product.categoryId === id);

  const onPress = (item: ProductType) => {
    navigation.push('ProductScreen', {
      product: item,
      name: item.title,
    })
  }

  const renderItemCategory = ({ item }: { item: ProductType }) => {
    return <ItemCategory onPress={() => onPress(item)} item={item} />
  }

  return (
    <View style={styles.container}>
        <FlatList
          data={products}
          keyExtractor={(item: ProductType) => item.id}
          renderItem={renderItemCategory}
        />
    </View>
  )
}

export default Category