import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'

import styles from './style';
import { Icon, RowText } from '../../components';

const Product = () => {
  return (
      <ImageBackground style={styles.container} source={require('../../data/images/background.png')} >
          <View style={styles.wrapImage}>
        <Image style={styles.image} source={require('../../data/images/wrapper.png')} />
        <View style={styles.iconLeft}>
          <Icon value={123} />
        </View>
        <View style={styles.iconRight}>
          <Icon seen value={12} />
        </View>
      </View>
      <View style={styles.wrapContent}>
        <Text style={styles.content}>
        Pariatur consectetur ut quis cupidatat magna adipisicing cupidatat amet dolore velit. Aute cillum consequat tempor adipisicing. Deserunt proident adipisicing adipisicing nostrud dolore ex do est mollit.
        </Text>
        <View style={styles.wrapIngredients}>
          <View style={styles.wrapTextIngredients}>
          <Text style={styles.textIngredients}>Nguyên liệu</Text>
          </View>
          <View style={styles.ingredients}>
              <RowText text="Pariatur consectetur ut quis cupidatat" />
              <RowText text="magna adipisicing cupidatat amet dolore velit " />
              <RowText text="Aute cillum consequat tempor adipisicing" />
              <RowText text="Deserunt proident adipisicing adipisicing nostrud dolore ex do est mollit" />
          </View>
        </View>
        <View style={styles.wrapIngredients}>
        <View style={styles.wrapTextIngredients}>
          <Text style={styles.textIngredients}>Cách thực hiện</Text>
          </View>
          <View style={styles.ingredients}>
              <RowText text="Pariatur consectetur ut quis cupidatat" />
              <RowText text="magna adipisicing cupidatat amet dolore velit " />
              <RowText text="Aute cillum consequat tempor adipisicing" />
              <RowText text="Deserunt proident adipisicing adipisicing nostrud dolore ex do est mollit" />
          </View>
        </View>
      </View>

      </ImageBackground>
  )
}

export default Product