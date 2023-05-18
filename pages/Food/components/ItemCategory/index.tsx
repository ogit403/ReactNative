import { View, Text, Image } from 'react-native'
import React from 'react'

import styles from './style';
import Icon from '../Icon';

const ItemCategory = () => {
  return (
    <View style={styles.item}>
        <View style={styles.wrapImage}>
            <Image style={styles.image} source={require('../../data/images/wrapper.png')} />
        </View>
        <View style={styles.wrapContent}>
            <Text style={styles.text}>Cillum tempor aute sint eli. tempor</Text>
            <View style={styles.wrapIcon}>
                <Icon value={12} />
                <Icon seen value={123} />
            </View>
        </View>
    </View>
  )
}

export default ItemCategory