import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import useActionProduct from '../../hooks/useActionProduct';
import { ProductType } from '../../interfaces';
import { favoriteActions } from '../../store/slices/favorite';
import Icon from '../Icon';
import styles from './style';

const ItemCategory = ({ item, onPress }: { item: ProductType, onPress: () => void }) => {
  const dispatch = useDispatch();
  const { isFavoriteActive, isViewActive } = useActionProduct(item.id);

  const handleFavorite = () => {
    dispatch(favoriteActions.addProductInView(item.id));
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
        <View style={styles.wrapImage}>
            <Image style={styles.image} source={item.thumb} />
        </View>
        <View style={styles.wrapContent}>
            <Text style={styles.text}>{item.title}</Text>
            <View style={styles.wrapIcon}>
              <TouchableOpacity onPress={handleFavorite} style={styles.icon}>
              <Icon isFavorite={isFavoriteActive} value={item.favorite} />

              </TouchableOpacity>
              <View style={styles.icon}>
              <Icon isView={isViewActive} seen value={item.view} />

              </View>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default ItemCategory