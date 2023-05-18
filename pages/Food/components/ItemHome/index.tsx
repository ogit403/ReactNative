import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './style';

const ItemHome = () => {
  return (
    <TouchableOpacity style={styles.item}>
        <View style={styles.wrapImage}>
            <Image style={styles.image} source={require('../../data/images/wrapper.png')} />
        </View>
        <Text style={styles.text}>Cillum tempor aute sint eli. tempor</Text>
    </TouchableOpacity>
  )
}

export default ItemHome