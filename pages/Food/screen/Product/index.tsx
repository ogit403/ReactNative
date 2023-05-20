import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'

import styles from './style';
import { Icon, RowText } from '../../components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/Home';
import useActionProduct from '../../hooks/useActionProduct';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductScreen'>;

const Product = ({ route }: Props) => {
  const { product } = route.params;
  const { isFavoriteActive, isViewActive, handleAction } = useActionProduct(product.id);

  useEffect(() => {
    handleAction('seen');
  }, [])

  return (
    <ImageBackground style={styles.background} source={require('../../data/images/background.png')} >
      <View style={styles.wrapImage}>
        <Image style={styles.image} source={product.thumb} />
        <View style={styles.iconLeft}>
          <TouchableOpacity onPress={() => handleAction('favorite')}>
          <Icon isFavorite={isFavoriteActive} value={product.favorite} />

          </TouchableOpacity>
        </View>
        <View style={styles.iconRight}>
          <Icon isView={isViewActive} seen value={product.view} />
        </View>
      </View>
      <View style={styles.wrapContent}>
        <ScrollView>

          <Text style={styles.content}>{product.intro}</Text>
          <View style={styles.wrapIngredients}>
            <View style={styles.wrapTextIngredients}>
              <Text style={styles.textIngredients}>Nguyên liệu</Text>
            </View>
            <View style={styles.ingredients}>
              {
                product.ingredients.split('\n').map((item: string) => (
                  <RowText text={item} />
                ))
              }
            </View>
          </View>
          <View style={styles.wrapIngredients}>
            <View style={styles.wrapTextIngredients}>
              <Text style={styles.textIngredients}>Cách thực hiện</Text>
            </View>
            <View style={styles.ingredients}>
              {
                product.instructions.split('\n').map((item: string) => (
                  <RowText text={item} />
                ))
              }
            </View>
          </View>
        </ScrollView>
      </View>

    </ImageBackground>
  )
}

export default Product