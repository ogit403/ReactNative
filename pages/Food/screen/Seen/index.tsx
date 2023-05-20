import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'

import styles from './style';
import { Empty, ItemFavorite } from '../../components';
import useActionProduct from '../../hooks/useActionProduct';
import { ProductType } from '../../interfaces';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamListSeen } from '../../navigation/Seen';

type Props = NativeStackScreenProps<RootStackParamListSeen, 'SeenScreen'>;

const Seen = ({ navigation }: Props) => {
  const { view } = useActionProduct('');

  const onPress = (item: ProductType) => {
    navigation.navigate('ProductScreen', {
      product: item,
      name: item.title,
    })
  }

  const renderItemFavorite = ({ item }: { item: string }) => {
    return <ItemFavorite onPress={onPress} heart id={item} />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={view}
        renderItem={renderItemFavorite}
        keyExtractor={(item: string) => item}
        ListEmptyComponent={() => <Empty />}
      />
    </View>
  )
}

export default Seen