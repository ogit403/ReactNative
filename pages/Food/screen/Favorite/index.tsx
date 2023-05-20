import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'

import styles from './style';
import { Empty, ItemFavorite } from '../../components';
import useActionProduct from '../../hooks/useActionProduct';
import { RootStackParamListFavorite } from '../../navigation/Favorite';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductType } from '../../interfaces';

type Props = NativeStackScreenProps<RootStackParamListFavorite, 'FavoriteScreen'>;

const Favorite = ({ navigation }: Props) => {
  const { favorite } = useActionProduct('');

  const onPress = (item: ProductType) => {
    navigation.navigate('ProductScreen', {
      product: item,
      name: item.title,
    })
  }

  const renderItemFavorite = ({ item }: { item: string }) => {
    return <ItemFavorite onPress={onPress} id={item} />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favorite}
        renderItem={renderItemFavorite}
        keyExtractor={(item: string) => item}
        ListEmptyComponent={() => <Empty />}
      />
    </View>
  )
}

export default Favorite